"use client";

import { useEffect, useRef } from "react";

interface VideoModeProps {
    type: "krishna" | "pray";
    onEnd: () => void;
}

const VIDEOS = {
    krishna: "/videos/krishna.mp4",
    pray: "/videos/pray.mp4",
};

export default function VideoMode({ type, onEnd }: VideoModeProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
            <video
                ref={videoRef}
                src={VIDEOS[type]}
                autoPlay
                playsInline
                onEnded={onEnd}
                className="w-full h-full object-cover"
                style={{ pointerEvents: "none" }} // No controls, no interaction
            />
        </div>
    );
}
