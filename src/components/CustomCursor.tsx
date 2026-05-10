"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch
    const checkTouch = () =>
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0 ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (navigator as any).msMaxTouchPoints > 0;
    
    setIsTouchDevice(checkTouch());
  }, []);

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current) return;

    const cursor = cursorRef.current;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setIsHovering(false);
      }
    };

    const animate = () => {
      // Lerp for smooth following
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;

      cursor.style.left = `${x - 5}px`;
      cursor.style.top = `${y - 5}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-[9999] flex items-center justify-center rounded-full bg-accent transition-all duration-200 ${
        isHovering ? "h-6 w-6 opacity-50" : "h-2.5 w-2.5 opacity-80"
      }`}
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
}
