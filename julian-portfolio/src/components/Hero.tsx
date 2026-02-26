"use client";

import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import HeroParticles from "./HeroParticles";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <HeroParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-6 top-28 flex items-center gap-2 text-sm text-[#a0a0a0] md:left-12 md:top-32"
      >
        <span
          className="relative flex h-2 w-2"
          aria-hidden
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available to Freelance Dev Work
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">Julian Voros</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-xl font-semibold text-white sm:text-2xl md:text-3xl"
        >
          <TypingEffect />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-[600px] text-base text-[#a0a0a0] sm:text-lg"
        >
          CS grad. Software Developer. Now going deeper into the systems, networks,
          and infrastructure that everything runs on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative rounded-lg bg-[#00f5ff] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_24px_rgba(0,245,255,0.5)]"
            style={{ boxShadow: "0 0 20px rgba(0,245,255,0.25)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[#00f5ff] px-6 py-3 text-sm font-semibold text-[#00f5ff] transition-all hover:shadow-[0_0_24px_rgba(0,245,255,0.4)]"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scroll to about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-[#a0a0a0]"
        >
          <HiChevronDown size={28} />
        </motion.a>
      </motion.div>
    </section>
  );
}
