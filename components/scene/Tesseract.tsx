'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector4 } from '@/lib/math/Vector4';
import * as rotation4D from '@/lib/math/rotation4D';
import { stereographicProjection } from '@/lib/math/projection';
import { use4DStore } from '@/lib/store/use4DStore';

// Shader material for glowing edges
const glowShader = {
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color(0x00ff88) },
  },
  vertexShader: `
    varying vec3 vPosition;
    
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color;
    varying vec3 vPosition;
    
    void main() {
      float intensity = 0.8 + 0.2 * sin(time * 2.0);
      float dist = length(vPosition);
      float glow = 1.0 / (1.0 + dist * 0.1);
      vec3 finalColor = color * intensity * glow;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

/**
 * Tesseract (4D Hypercube) Component
 * Defines 16 vertices and connects them with edges based on 4D connectivity
 */
export function Tesseract() {
  const meshRef = useRef<THREE.Group>(null);
  const { rotationSpeeds } = use4DStore();

  // Define the 16 vertices of a tesseract (unit hypercube centered at origin)
  const vertices4D = useMemo(() => {
    const vertices: Vector4[] = [];
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        for (let z = -1; z <= 1; z += 2) {
          for (let w = -1; w <= 1; w += 2) {
            vertices.push(new Vector4(x, y, z, w));
          }
        }
      }
    }
    return vertices;
  }, []);

  // Define edges: two vertices are connected if they differ in exactly one coordinate
  const edges = useMemo(() => {
    const edgeList: [number, number][] = [];
    for (let i = 0; i < vertices4D.length; i++) {
      for (let j = i + 1; j < vertices4D.length; j++) {
        const v1 = vertices4D[i];
        const v2 = vertices4D[j];
        const diff = v1.subtract(v2);
        const diffCount = Math.abs(diff.x) + Math.abs(diff.y) + Math.abs(diff.z) + Math.abs(diff.w);
        // If exactly one coordinate differs by 2 (since we use -1 and 1), they're adjacent
        if (Math.abs(diffCount - 2) < 0.1) {
          edgeList.push([i, j]);
        }
      }
    }
    return edgeList;
  }, [vertices4D]);

  // Create shared shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: glowShader.uniforms,
      vertexShader: glowShader.vertexShader,
      fragmentShader: glowShader.fragmentShader,
    });
  }, []);

  // Create initial geometry
  const initialGeometry = useMemo(() => {
    const projected = vertices4D.map((v) => stereographicProjection(v));
    return edges.map(([startIdx, endIdx]) => {
      const start = projected[startIdx];
      const end = projected[endIdx];
      const positions = new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z]);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      return geometry;
    });
  }, [vertices4D, edges]);

  // Animation frame: rotate in 4D space
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Update shader time uniform
    material.uniforms.time.value = time;

    // Apply rotations
    const rotations = [
      rotation4D.rotateXY(rotationSpeeds.xy * time),
      rotation4D.rotateXZ(rotationSpeeds.xz * time),
      rotation4D.rotateYZ(rotationSpeeds.yz * time),
      rotation4D.rotateXW(rotationSpeeds.xw * time),
      rotation4D.rotateYW(rotationSpeeds.yw * time),
      rotation4D.rotateZW(rotationSpeeds.zw * time),
    ];

    // Project rotated vertices to 3D
    const projectedVertices = vertices4D.map((v) => {
      const rotated = rotation4D.applyRotations(v, rotations);
      return stereographicProjection(rotated);
    });

    // Update geometry
    const group = meshRef.current;
    group.children.forEach((child, idx) => {
      if (child instanceof THREE.Line) {
        const [startIdx, endIdx] = edges[idx];
        const start = projectedVertices[startIdx];
        const end = projectedVertices[endIdx];
        
        const positions = new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z]);
        const geometry = child.geometry as THREE.BufferGeometry;
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.attributes.position.needsUpdate = true;
      }
    });
  });

  return (
    <group ref={meshRef}>
      {initialGeometry.map((geometry, idx) => (
        <line key={idx} geometry={geometry} material={material} />
      ))}
    </group>
  );
}

