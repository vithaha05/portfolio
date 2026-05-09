"use client";

import { type MouseEvent, useState } from "react";

export function useMouseTilt(maxTilt = 8) {
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;

    setTransform(
      `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2,
      )}deg) translateY(-4px)`,
    );
  }

  function handleMouseLeave() {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");
  }

  return { transform, handleMouseMove, handleMouseLeave };
}
