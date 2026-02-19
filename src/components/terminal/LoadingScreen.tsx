"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[0.15em] text-blue-400 select-none text-center"
                    style={{ fontFamily: "'American Captain', sans-serif" }}
                >
                    KRISHNA&apos;S DOMINE
                </motion.h1>

                {/* Animated Underline */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                    className="h-1 bg-blue-500 mt-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
            </div>

            {/* Subtle background glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
            />
        </motion.div>
    );
}
