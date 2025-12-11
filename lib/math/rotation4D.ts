import { Vector4 } from './Vector4';

/**
 * Creates a 4D rotation matrix for rotation in the XY plane (around ZW plane)
 */
export function rotateXY(angle: number): (v: Vector4) => Vector4 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  return (v: Vector4) => {
    return new Vector4(
      v.x * cos - v.y * sin,
      v.x * sin + v.y * cos,
      v.z,
      v.w
    );
  };
}

/**
 * Creates a 4D rotation matrix for rotation in the XZ plane (around YW plane)
 */
export function rotateXZ(angle: number): (v: Vector4) => Vector4 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  return (v: Vector4) => {
    return new Vector4(
      v.x * cos - v.z * sin,
      v.y,
      v.x * sin + v.z * cos,
      v.w
    );
  };
}

/**
 * Creates a 4D rotation matrix for rotation in the YZ plane (around XW plane)
 */
export function rotateYZ(angle: number): (v: Vector4) => Vector4 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  return (v: Vector4) => {
    return new Vector4(
      v.x,
      v.y * cos - v.z * sin,
      v.y * sin + v.z * cos,
      v.w
    );
  };
}

/**
 * Creates a 4D rotation matrix for rotation in the XW plane (around YZ plane)
 */
export function rotateXW(angle: number): (v: Vector4) => Vector4 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  return (v: Vector4) => {
    return new Vector4(
      v.x * cos - v.w * sin,
      v.y,
      v.z,
      v.x * sin + v.w * cos
    );
  };
}

/**
 * Creates a 4D rotation matrix for rotation in the YW plane (around XZ plane)
 */
export function rotateYW(angle: number): (v: Vector4) => Vector4 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  return (v: Vector4) => {
    return new Vector4(
      v.x,
      v.y * cos - v.w * sin,
      v.z,
      v.y * sin + v.w * cos
    );
  };
}

/**
 * Creates a 4D rotation matrix for rotation in the ZW plane (around XY plane)
 */
export function rotateZW(angle: number): (v: Vector4) => Vector4 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  return (v: Vector4) => {
    return new Vector4(
      v.x,
      v.y,
      v.z * cos - v.w * sin,
      v.z * sin + v.w * cos
    );
  };
}

/**
 * Applies multiple rotations to a vector in sequence
 */
export function applyRotations(
  v: Vector4,
  rotations: Array<(v: Vector4) => Vector4>
): Vector4 {
  let result = v.clone();
  for (const rotation of rotations) {
    result = rotation(result);
  }
  return result;
}

