"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Terminal from "@/components/terminal/Terminal";
import { BackgroundManager } from "@/components/terminal/BackgroundManager";
import VideoMode from "@/components/terminal/VideoMode";
import { ArrowLeft, X } from "lucide-react";

export default function TerminalPage() {
  const router = useRouter();
  const [commandType, setCommandType] = useState<"normal" | "error" | "mode">("normal");
  const [lastCommandTime, setLastCommandTime] = useState<number>(Date.now());
  const [appMode, setAppMode] = useState<"terminal" | "video">("terminal");
  const [activeVideo, setActiveVideo] = useState<"krishna" | "pray" | null>(null);

  const handleCommand = (input: string, isError: boolean, type?: "normal" | "error" | "mode") => {
    setLastCommandTime(Date.now());
    const trimmed = input.trim().toLowerCase();

    if (trimmed === "krishna" || trimmed === "pray") {
      setActiveVideo(trimmed as "krishna" | "pray");
      setAppMode("video");
      return;
    }

    if (type) {
      setCommandType(type);
    }
  };

  const handleBack = () => {
    if (appMode === "video") {
      setAppMode("terminal");
      setActiveVideo(null);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Navigation/Exit Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-[60] flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 border border-blue-500/30 hover:border-blue-500/60 rounded-full text-blue-400 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm group"
      >
        {appMode === "video" ? (
          <>
            <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-sm font-mono uppercase tracking-wider">Close Video</span>
          </>
        ) : (
          <>
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono uppercase tracking-wider">Back to Portfolio</span>
          </>
        )}
      </button>

      {appMode === "terminal" ? (
        <>
          <BackgroundManager commandType={commandType} timestamp={lastCommandTime} />
          <Terminal onCommand={handleCommand} />
        </>
      ) : (
        activeVideo && (
          <VideoMode
            type={activeVideo}
            onEnd={() => {
              setAppMode("terminal");
              setActiveVideo(null);
            }}
          />
        )
      )}
    </div>
  );
}




