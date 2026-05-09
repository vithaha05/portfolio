"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!finePointer) {
      return;
    }

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const activate = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor='hover']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    window.addEventListener("mouseover", enter);
    document.addEventListener("mouseover", activate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      window.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseover", activate);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-5 w-5 rounded-full border border-accent2 mix-blend-difference transition-transform duration-150 md:block"
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0) scale(${
          active ? 2.25 : 1
        })`,
      }}
    />
  );
}
