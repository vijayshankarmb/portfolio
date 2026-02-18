"use client";

import { useState } from "react";
import { commands } from "@/config/commands";

type HistoryItem = {
    type :"input" | "output"
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

    return (
        <div className="h-screen w-full flex items-center justify-center p-4">
            <div className={`w-120 h-120 md:w-140 lg:w-160 font-mono overflow-y-auto bg-black border border-blue-500 rounded-lg`} style={{opacity}}>
                <div className="h-10 w-full mb-2 border-b border-blue-500 flex justify-between items-center px-2">
                    <div className="flex items-center justify-center py-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full ml-2 mt-2"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full ml-2 mt-2"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full ml-2 mt-2"></div>
                        <p className="text-blue-100 ml-5 mt-2">
                            vijay@localhost:~
                        </p>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <p className="text-blue-100">
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
                <h1 className="text-blue-200">radhe radhe</h1>
            </div>
        </div>
    );
}
