import type { Heart } from "../types";

export default class HeartUtil {
  static generateHearts(): Heart[] {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 8; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 10 + 6,
        top: Math.random() * 100
      });
    }
    return newHearts;
  }
}