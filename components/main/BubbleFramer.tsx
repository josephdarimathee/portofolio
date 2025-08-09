import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bubbleColors = [
    "#a076f8",
    "#00e0ff",
    "#fff",
    "#7042f8",
    "#b3e0ff"
];

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BubbleFramer: React.FC = () => {
    const [bubbles, setBubbles] = useState<{
        id: number;
        left: number;
        size: number;
        color: string;
        duration: number;
        delay: number;
        exploded?: boolean;
    }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.5) {
                setBubbles((prev) => [
                    ...prev,
                    {
                        id: Date.now() + Math.random(),
                        left: getRandomInt(5, 90),
                        size: getRandomInt(24, 60),
                        color: bubbleColors[getRandomInt(0, bubbleColors.length - 1)],
                        duration: Math.random() * 2 + 2.5,
                        delay: Math.random() * 0.5
                    }
                ]);
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (bubbles.length > 0) {
            const timeout = setTimeout(() => {
                setBubbles((prev) => prev.slice(1));
            }, 4000);
            return () => clearTimeout(timeout);
        }
    }, [bubbles]);

    // Fonction pour faire exploser une bulle
    const handleBubbleClick = (id: number) => {
        setBubbles((prev) =>
            prev.map((bubble) =>
                bubble.id === id ? { ...bubble, exploded: true } : bubble
            )
        );
        // Supprimer la bulle après l'animation d'explosion
        setTimeout(() => {
            setBubbles((prev) => prev.filter((bubble) => bubble.id !== id));
        }, 600);
    };

    return (
        <div className="pointer-events-none fixed inset-0 z-[25]">
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        initial={{
                            y: 100,
                            opacity: 0.2,
                            scale: 0.7
                        }}
                        animate={
                            bubble.exploded
                                ? {
                                    scale: [1, 1.5, 0.2],
                                    opacity: [0.7, 1, 0],
                                    y: -window.innerHeight * 0.8 - 40,
                                    boxShadow: `0 0 32px 16px ${bubble.color}99, 0 0 64px 32px #fff4`
                                }
                                : {
                                    y: -window.innerHeight * 0.8,
                                    opacity: [0.2, 0.7, 0.4, 0],
                                    scale: [0.7, 1.1, 0.9, 1.2]
                                }
                        }
                        exit={{ opacity: 0, scale: 1.3 }}
                        transition={{
                            duration: bubble.exploded ? 0.6 : bubble.duration,
                            delay: bubble.delay,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: "absolute",
                            left: `${bubble.left}%`,
                            bottom: 0,
                            width: bubble.size,
                            height: bubble.size,
                            borderRadius: "50%",
                            background: `radial-gradient(circle at 30% 30%, #fff 60%, ${bubble.color} 100%)`,
                            boxShadow: `0 0 16px 2px ${bubble.color}55, 0 0 32px 8px #fff2`,
                            opacity: 0.7,
                            pointerEvents: "auto",
                            zIndex: 25,
                            border: `1.5px solid ${bubble.color}`
                        }}
                        onClick={() => handleBubbleClick(bubble.id)}
                        whileTap={{ scale: 1.5, opacity: 1 }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default BubbleFramer;
