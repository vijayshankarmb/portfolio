"use client";

import Terminal from "@/components/terminal/Terminal";

export default function TerminalPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/krishna2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Persistent Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Terminal Component */}
      <Terminal />
    </div>
  );
}
