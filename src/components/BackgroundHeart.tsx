import { Heart as HeartIcon } from "lucide-react";
import type { Heart as HeartType } from "../types";


export const BackgroundHearts: React.FC<{ hearts: HeartType[] }> = ({ hearts }) => (
    <>
        {hearts.map((heart) => (
            <div
                key={heart.id}
                className="fixed opacity-8 z-0"
                style={{
                    left: `${heart.left}%`,
                    top: `${heart.top}%`,
                    animation: `heartFloat ${4 + Math.random() * 2}s ease-in-out infinite ${heart.delay}s`,
                }}
            >
                <HeartIcon
                    size={heart.size}
                    className="text-rose-300"
                    fill="currentColor"
                />
            </div>
        ))}
    </>
);
