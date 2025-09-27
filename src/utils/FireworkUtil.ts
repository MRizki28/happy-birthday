import type { Firework } from "../types";

export default class FireworkUtil {
    static generateFireworks(): Firework[] {
        const newFireworks: Firework[] = [];
        const colors = ['#FF6B9D', '#45D4FF', '#9B59B6', '#F39C12', '#E74C3C', '#1ABC9C', '#3498DB'];

        for (let i = 0; i < 20; i++) {
            newFireworks.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 2,
                duration: Math.random() * 2 + 1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        return newFireworks;
    }
}
