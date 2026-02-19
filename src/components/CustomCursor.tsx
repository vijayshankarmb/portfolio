"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    life: number;
    maxLife: number;
    velocity: { x: number; y: number };
}

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>(0);

    const mousePos = useRef({ x: -100, y: -100 });
    const cursorFollowPos = useRef({ x: -100, y: -100 });
    const particles = useRef<Particle[]>([]);
    const particleId = useRef(0);

    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isInteractive);

            // Spawn particles - reduced frequency/count
            if (particles.current.length < 12) {
                spawnParticle(e.clientX, e.clientY);
            }
        };

        const spawnParticle = (x: number, y: number) => {
            particleId.current++;
            const speed = 0.3 + Math.random() * 0.7; // Slower
            const angle = Math.random() * Math.PI * 2;

            particles.current.push({
                id: particleId.current,
                x,
                y,
                size: 1 + Math.random() * 2, // Smaller particles
                color: "rgba(59, 130, 246, 0.8)", // Blue 500
                life: 0,
                maxLife: 20 + Math.random() * 20, // Shorter life
                velocity: {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed - 0.3 // Gentler float
                }
            });
        };

        const animate = () => {
            // Lerp for cursor following
            const lerpFactor = 0.15;
            cursorFollowPos.current.x += (mousePos.current.x - cursorFollowPos.current.x) * lerpFactor;
            cursorFollowPos.current.y += (mousePos.current.y - cursorFollowPos.current.y) * lerpFactor;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorFollowPos.current.x}px, ${cursorFollowPos.current.y}px, 0) scale(${isHovering ? 1.5 : 1})`;
            }

            // Draw particles on canvas
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    particles.current = particles.current.filter(p => {
                        p.life++;
                        p.x += p.velocity.x;
                        p.y += p.velocity.y;

                        const alpha = 1 - p.life / p.maxLife;
                        if (alpha <= 0) return false;

                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.6})`;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
                        ctx.fill();

                        return true;
                    });
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", handleResize);
        handleResize();
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(requestRef.current);
        };
    }, [isHovering, isMobile]);

    if (isMobile) return null;

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{ mixBlendMode: 'screen' }}
            />
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] -ml-6 -mt-6 transition-transform duration-200 ease-out"
                style={{
                    backgroundImage: "url('/assets/cursor.png')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    mixBlendMode: 'plus-lighter'
                }}
            />
        </>
    );
}
