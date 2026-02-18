"use client";

import { useState, useCallback } from "react";
import Terminal from "@/components/terminal/Terminal";
import { motion, AnimatePresence } from "motion/react";

export default function TerminalPage() {
  const [showBg, setShowBg] = useState(true);

  const handleCommand = useCallback((input: string, isError: boolean) => {
    // Fade out when a command is processed
    setShowBg(false);

    // If it's an error or after a short delay, fade it back in
    setTimeout(() => {
      setShowBg(true);
    }, isError ? 200 : 1000);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Background Photo */}
      <AnimatePresence>
        {showBg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/assets/Krishna2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </AnimatePresence>

      {/* Persistent Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Terminal Component */}
      <Terminal onCommand={handleCommand} />
    </div>
  );
}
