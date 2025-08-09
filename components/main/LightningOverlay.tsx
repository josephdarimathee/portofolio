import React, { useEffect, useState } from "react";

const lightningPaths = [
    "M10 0 L12 8 L8 8 L14 20 L12 12 L16 12 Z",
    "M20 0 L22 10 L18 10 L26 28 L22 18 L28 18 Z",
    "M30 0 L32 12 L28 12 L36 32 L32 20 L38 20 Z"
];

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const LightningOverlay: React.FC = () => {
    const [flashes, setFlashes] = useState<{
        id: number;
        left: number;
        top: number;
        scale: number;
        path: string;
    }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance d'éclair
                setFlashes((prev) => [
                    ...prev,
                    {
                        id: Date.now() + Math.random(),
                        left: getRandomInt(5, 90),
                        top: getRandomInt(5, 60),
                        scale: Math.random() * 0.7 + 0.5,
                        path: lightningPaths[getRandomInt(0, lightningPaths.length - 1)]
                    }
                ]);
            }
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (flashes.length > 0) {
            const timeout = setTimeout(() => {
                setFlashes((prev) => prev.slice(1));
            }, 350);
            return () => clearTimeout(timeout);
        }
    }, [flashes]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[30]">
            {flashes.map((flash) => (
                <svg
                    key={flash.id}
                    style={{
                        position: "absolute",
                        left: `${flash.left}%`,
                        top: `${flash.top}%`,
                        transform: `scale(${flash.scale})`,
                        filter: "drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #00e0ff)",
                        opacity: 0.85,
                        transition: "opacity 0.2s"
                    }}
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                >
                    <path
                        d={flash.path}
                        fill="#fff"
                        stroke="#00e0ff"
                        strokeWidth={2}
                        style={{ filter: "drop-shadow(0 0 8px #00e0ff)" }}
                    />
                </svg>
            ))}
        </div>
    );
};

export default LightningOverlay;
