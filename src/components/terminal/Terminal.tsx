"use client";

import { useState, useEffect, useRef } from "react";
import { commands } from "@/config/commands";

type HistoryItem = {
    type: "input" | "output"
    content: string
}

export default function Terminal() {

    const [opacity, setOpacity] = useState(1);
    const [currentInput, setCurrentInput] = useState("");
    const [history, setHistory] = useState<HistoryItem[]>([
        {
            type: "output",
            content: "Welcome to Radhe Radhe Terminal. Type help to begin."
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
            return;
        }

        const command = commands[trimmed];

        if (command) {
            const result = command();
            if (Array.isArray(result)) {
                setHistory((prev) => [
                    ...prev,
                    {type: "input", content: input},
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
            setHistory((prev)=>[
                ...prev,
                {type: "input", content: input},
                {type: "output", content: "Command not found. Type help."},
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
        <div className="h-screen w-full flex items-center justify-center p-4 text-xs text-blue-200">
            <div className={`w-120 h-120 md:w-140 lg:w-160 font-mono overflow-y-auto bg-black border border-blue-500 rounded-lg`} style={{ opacity }}>
                <div className="h-10 w-full mb-2 border-b border-blue-500 flex justify-between items-center px-2">
                    <div className="flex items-center justify-center py-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full ml-2 mt-2"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full ml-2 mt-2"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full ml-2 mt-2"></div>
                        <p className="ml-5 mt-2">
                            vijay@localhost:~
                        </p>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <p>
                            OPACITY
                        </p>
                        <input
                            type="range"
                            min="0.7" max="1" step="0.1"
                            value={opacity}
                            onChange={(e) => setOpacity(parseFloat(e.target.value))}
                            className="w-20 ml-2" />
                    </div>
                </div>
                {
                    history.map((item, index) => (
                        <div key={index} className="mt-2 mb-1 px-4">
                            {item.type === "input" ? (
                                <div>
                                    <span className="text-blue-400">
                                        vijay@localhost:~$
                                    </span> {" "}
                                    {item.content}
                                </div>
                            ) : (
                            <div>{item.content}</div>
                            )}
                        </div>
                    ))
                }
                <div className="flex px-4 relative">
                    <span className="text-blue-400">
                        vijay@localhost:~$
                    </span>
                    <span className="ml-2 whitespace-pre">
                        {currentInput}
                        <span className="blink">▊</span>
                    </span>
                    <input type="text"
                    autoFocus
                    value={currentInput}
                    onChange={(e)=>setCurrentInput(e.target.value)}
                    className="absolute opacity-0 inset-0"
                    onKeyDown={handleKeyDown}
                    />
                </div>
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
}
