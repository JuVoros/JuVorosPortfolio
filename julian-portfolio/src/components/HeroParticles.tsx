"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 40;

export default function HeroParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 10,
        y: Math.random() * 100 - 10,
        size: 2 + Math.random() * 2,
        color: Math.random() > 0.5 ? "#00f5ff" : "#b400ff",
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0.3,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
