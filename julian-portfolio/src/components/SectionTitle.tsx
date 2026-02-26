"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className = "" }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`text-3xl font-bold text-white sm:text-4xl ${className}`}
    >
      {title}
      <span
        className="mt-2 block h-1 w-16 rounded-full bg-[#00f5ff]"
        style={{ boxShadow: "0 0 12px rgba(0,245,255,0.5)" }}
      />
    </motion.h2>
  );
}
