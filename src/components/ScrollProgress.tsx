'use client'

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] z-[9998]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        boxShadow: "0 0 6px rgba(245,158,11,0.6)"
      }}
    />
  );
}
