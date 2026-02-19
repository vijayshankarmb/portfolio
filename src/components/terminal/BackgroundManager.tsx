'use client'

import { useEffect, useState } from "react";

export type CommandType = "normal" | "mode" | "error";

export interface BackgroundManagerProps {
    commandType: CommandType;
    timestamp: number;
}

export const BackgroundManager = ({ commandType, timestamp }: BackgroundManagerProps) => {

    const normalImages = [
        "/images/bg1.jpg",
        "/images/bg2.jpg",
        "images/Krishna.jpg",
    ]

    const errorImages = [
        "/images/error1.jpg",
    ]

    const modeImages = "/images/v.jpg";

    const [currentBg, setCurrentBg] = useState(normalImages[0]);
    const [fade, setFade] = useState(false);

    const getRandom = (arr: string[]) =>
        arr[Math.floor(Math.random() * arr.length)];

    useEffect(() => {
        setFade(true);

        const timeout = setTimeout(() => {
            if (commandType === "error") {
                setCurrentBg(getRandom(errorImages));
            } else if (commandType === "mode") {
                setCurrentBg(modeImages);
            } else {
                setCurrentBg(getRandom(normalImages));
            }

            setFade(false);
        }, 500); 

        return () => clearTimeout(timeout);
    }, [commandType, timestamp]);

    return (
        <div
            className={`fixed inset-0 z-0 transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
                    url("${currentBg.startsWith('/') ? currentBg : '/' + currentBg}")
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 150px 50px rgba(0, 10, 50, 0.8), inset 0 0 50px 10px rgba(0, 102, 255, 0.2)",
            }}
        >
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
        </div>
    )
}