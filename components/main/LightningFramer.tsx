import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";

const lightningVariants = {
    initial: {
        opacity: 0,
        scaleY: 0.5,
        filter: "blur(2px) brightness(1.5)",
    },
    animate: {
        opacity: [0, 1, 0.7, 0],
        scaleY: [0.5, 1.2, 0.8, 1],
        filter: [
            "blur(2px) brightness(1.5)",
            "blur(0px) brightness(2.5)",
            "blur(1px) brightness(1.2)",
            "blur(2px) brightness(1.5)"
        ],
        transition: {
            duration: 0.45,
            ease: easeInOut
        }
    }
};

const lightningPaths = [
    "M10 0 L12 8 L8 8 L14 20 L12 12 L16 12 Z",
    "M20 0 L22 10 L18 10 L26 28 L22 18 L28 18 Z",
    "M30 0 L32 12 L28 12 L36 32 L32 20 L38 20 Z"
];

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const LightningFramer: React.FC = () => {
    const [flashes, setFlashes] = React.useState<{
        id: number;
        left: number;
        top: number;
        scale: number;
        path: string;
    }[]>([]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.35) {
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

    React.useEffect(() => {
        if (flashes.length > 0) {
            const timeout = setTimeout(() => {
                setFlashes((prev) => prev.slice(1));
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [flashes]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[30]">
            <AnimatePresence>
                {flashes.map((flash) => (
                    <motion.svg
                        key={flash.id}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        variants={lightningVariants}
                        style={{
                            position: "absolute",
                            left: `${flash.left}%`,
                            top: `${flash.top}%`,
                            transform: `scale(${flash.scale})`,
                            filter: "drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #00e0ff)",
                            opacity: 0.85,
                            width: 40,
                            height: 40
                        }}
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <motion.path
                            d={flash.path}
                            fill="#fff"
                            stroke="#00e0ff"
                            strokeWidth={2}
                            style={{ filter: "drop-shadow(0 0 8px #00e0ff)" }}
                        />
                    </motion.svg>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default LightningFramer;
