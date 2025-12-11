/**
 * Vector4 - A 4-dimensional vector class for handling 4D geometry
 */
export class Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  /**
   * Add another vector to this vector
   */
  add(v: Vector4): Vector4 {
    return new Vector4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
  }

  /**
   * Subtract another vector from this vector
   */
  subtract(v: Vector4): Vector4 {
    return new Vector4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
  }

  /**
   * Multiply this vector by a scalar
   */
  multiply(scalar: number): Vector4 {
    return new Vector4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
  }

  /**
   * Calculate the dot product with another vector
   */
  dot(v: Vector4): number {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }

  /**
   * Calculate the magnitude (length) of the vector
   */
  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  /**
   * Normalize the vector to unit length
   */
  normalize(): Vector4 {
    const mag = this.magnitude();
    if (mag === 0) return new Vector4(0, 0, 0, 0);
    return this.multiply(1 / mag);
  }

  /**
   * Clone this vector
   */
  clone(): Vector4 {
    return new Vector4(this.x, this.y, this.z, this.w);
  }
}

