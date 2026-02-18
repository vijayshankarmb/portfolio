"use client";

import { useState, useEffect, useRef } from "react";
import { commands } from "@/config/commands";

type HistoryItem = {
    type: "input" | "output"
    content: string
}

interface TerminalProps {
    onCommand?: (input: string, isError: boolean) => void;
}

export default function Terminal({ onCommand }: TerminalProps) {

    const [opacity, setOpacity] = useState(1);
    const [currentInput, setCurrentInput] = useState("");
    const [history, setHistory] = useState<HistoryItem[]>([
        {
            type: "output",
            content: "Welcome to Krishna Domine. Type help to begin."
        }
    ]);

    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (input: string) => {
        const trimmed = input.trim().toLowerCase();

        if (trimmed === "clear") {
            setHistory([]);
            onCommand?.("clear", false);
            return;
        }

        const command = commands[trimmed];

        if (command) {
            onCommand?.(trimmed, false);
            const result = command();
            if (Array.isArray(result)) {
                setHistory((prev) => [
                    ...prev,
                    { type: "input", content: input },
                    ...result.map((line): HistoryItem => (
                        {
                            type: "output",
                            content: line
                        }))
                ])
            } else {
                setHistory((prev) => [
                    ...prev,
                    { type: "input", content: input },
                    { type: "output", content: result },
                ])
            }
        } else {
            onCommand?.(trimmed, true);
            setHistory((prev) => [
                ...prev,
                { type: "input", content: input },
                { type: "output", content: "Command not found. Type help." },
            ])
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(currentInput);
            setCurrentInput("");
        }
    }

    return (
        <div
            className={`w-120 h-120 md:w-140 lg:w-160 font-mono border border-blue-500 rounded-lg relative z-10 overflow-hidden flex flex-col bg-black/40 shadow-2xl shadow-blue-500/20 text-blue-200 text-xs`}
            style={{ opacity }}
        >
            {/* Terminal Header (Nav) - No Backdrop Blur */}
            <div className="h-10 w-full border-b border-blue-500 flex justify-between items-center px-4 bg-black/80 shrink-0">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm shadow-red-500/50"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm shadow-yellow-500/50"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm shadow-green-500/50"></div>
                    <p className="ml-2 font-semibold tracking-tight text-blue-300/90 select-none">
                        vijay@localhost:~
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold text-blue-400/70 hidden sm:inline select-none">
                        Opacity
                    </span>
                    <input
                        type="range"
                        min="0.7" max="1" step="0.1"
                        value={opacity}
                        onChange={(e) => setOpacity(parseFloat(e.target.value))}
                        className="w-16 cursor-pointer" />
                </div>
            </div>

            {/* Content Area - With Backdrop Blur and Internal Scrolling */}
            <div className="flex-1 overflow-y-auto backdrop-blur-md bg-black/20 pt-4 pb-6 scrollbar-thin scrollbar-thumb-blue-500/20">
                {
                    history.map((item, index) => (
                        <div key={index} className="mt-2 mb-1 px-6">
                            {item.type === "input" ? (
                                <div className="flex">
                                    <span className="text-blue-400 font-bold shrink-0">
                                        vijay@localhost:~$
                                    </span>
                                    <span className="ml-2 text-blue-100">
                                        {item.content}
                                    </span>
                                </div>
                            ) : (
                                <div className="leading-relaxed whitespace-pre-wrap break-words text-blue-100/90">{item.content}</div>
                            )}
                        </div>
                    ))
                }
                <div className="flex px-6 relative mt-1">
                    <span className="text-blue-400 font-bold shrink-0">
                        vijay@localhost:~$
                    </span>
                    <span className="ml-2 whitespace-pre text-blue-100 relative">
                        {currentInput}
                        <span className="blink text-blue-400 absolute ml-0.5">▊</span>
                    </span>
                    <input type="text"
                        autoFocus
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        className="absolute opacity-0 inset-0 cursor-text w-full"
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
}
