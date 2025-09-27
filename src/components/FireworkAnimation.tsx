import { Sparkles } from "lucide-react";
import type { Firework } from "../types";

export const FireworksAnimation: React.FC<{ fireworks: Firework[]; showFireworks: boolean }> = ({
    fireworks,
    showFireworks
}) => {
    if (!showFireworks) return null;

    return (
        <div className="fixed inset-0 z-40 pointer-events-none">
            {fireworks.map((firework) => (
                <div
                    key={firework.id}
                    className="absolute animate-ping"
                    style={{
                        left: `${firework.left}%`,
                        top: `${firework.top}%`,
                        animationDelay: `${firework.delay}s`,
                        animationDuration: `${firework.duration}s`
                    }}
                >
                    <div
                        className="w-6 h-6 rounded-full opacity-90"
                        style={{ backgroundColor: firework.color }}
                    ></div>
                </div>
            ))}

            {[...Array(30)].map((_, i) => (
                <div
                    key={`spark-${i}`}
                    className="absolute animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: '1.5s'
                    }}
                >
                    <Sparkles
                        size={Math.random() * 20 + 10}
                        className="text-yellow-300"
                    />
                </div>
            ))}
        </div>
    );
};