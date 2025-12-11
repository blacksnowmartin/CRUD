import { Vector4 } from './Vector4';
import * as THREE from 'three';

/**
 * Stereographic projection: Maps 4D coordinates to 3D space
 * This projection preserves angles and is commonly used for visualizing 4D objects
 * 
 * @param v4 - 4D vector to project
 * @param distance - Distance from the projection point (default: 2.0)
 * @returns 3D THREE.Vector3
 */
export function stereographicProjection(v4: Vector4, distance: number = 2.0): THREE.Vector3 {
  // If w is at the projection point, we get a singularity
  // Add a small epsilon to avoid division by zero
  const epsilon = 0.0001;
  const denom = distance - v4.w + epsilon;
  
  if (Math.abs(denom) < epsilon) {
    // Fallback: project as if w = distance
    return new THREE.Vector3(v4.x, v4.y, v4.z);
  }
  
  const scale = 1 / denom;
  return new THREE.Vector3(
    v4.x * scale,
    v4.y * scale,
    v4.z * scale
  );
}

/**
 * Alternative: Perspective projection with adjustable W-axis scaling
 */
export function perspectiveProjection(v4: Vector4, wScale: number = 0.5): THREE.Vector3 {
  return new THREE.Vector3(
    v4.x + v4.w * wScale,
    v4.y + v4.w * wScale,
    v4.z + v4.w * wScale
  );
}

