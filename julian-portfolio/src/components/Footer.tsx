"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/5 px-6 py-8"
    >
      <p className="text-center text-sm text-[#a0a0a0]">
        Built by Julian Voros
        <span className="mx-2 text-[#00f5ff]" style={{ textShadow: "0 0 8px rgba(0,245,255,0.5)" }}>
          ·
        </span>
        Seattle, WA
        <span className="mx-2 text-[#00f5ff]" style={{ textShadow: "0 0 8px rgba(0,245,255,0.5)" }}>
          ·
        </span>
        2025
      </p>
    </motion.footer>
  );
}
