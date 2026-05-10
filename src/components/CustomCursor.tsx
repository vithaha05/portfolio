'use client'

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 110, damping: 20, mass: 0.6 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setIsPointerFine(isFine);
    if (!isFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <>
      {/* DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#F59E0B] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* RING */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-[#F59E0B]/60 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.85 : isHovering ? 1.8 : 1,
          borderColor: isHovering ? "rgba(245,158,11,1)" : "rgba(245,158,11,0.6)",
          opacity: 1,
        }}
      />
    </>
  );
}
