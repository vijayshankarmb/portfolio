"use client";

import { useState } from "react";
import Terminal from "@/components/terminal/Terminal";
import { BackgroundManager } from "@/components/terminal/BackgroundManager";

export default function TerminalPage() {
  const [commandType, setCommandType] = useState<"normal" | "error" | "mode">("normal");
  const [lastCommandTime, setLastCommandTime] = useState<number>(Date.now());

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black">
      <BackgroundManager commandType={commandType} timestamp={lastCommandTime} />
      <Terminal onCommand={(input, isError, type) => {
        setLastCommandTime(Date.now());
        if (type) {
          setCommandType(type);
        }
      }} />
    </div>
  );
}




