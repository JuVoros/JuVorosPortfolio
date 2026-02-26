"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SkillItem = { label: string; inProgress?: boolean };

const IT_SKILLS: SkillItem[] = [
  {
    label: "Operating Systems: Windows 10/11, Linux (Ubuntu) — from CS coursework",
  },
  {
    label: "Networking: TCP/IP, DNS, DHCP, Network Programming — from CS coursework",
  },
  {
    label: "Troubleshooting: Currently developing via Google IT Support labs",
  },
  { label: "Version Control: Git, GitHub" },
  { label: "Project Tracking: Jira" },
  { label: "Google IT Support Specialization", inProgress: true },
  { label: "CompTIA A+", inProgress: true },
];

const DEV_SKILLS: SkillItem[] = [
  {
    label:
      "Languages: C++, C#, Java, JavaScript, TypeScript, HTML, CSS",
  },
  { label: "Frameworks: React, Next.js, Tailwind CSS" },
  {
    label:
      "AI & Algorithms: Pathfinding (A*, UCS), State Machines, Multithreading",
  },
  { label: "Engines: Unity, Unreal Engine" },
  { label: "Tools: Git, Perforce, Jira" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function SkillPill({
  label,
  inProgress,
  accent,
}: {
  label: string;
  inProgress?: boolean;
  accent: "cyan" | "purple";
}) {
  const isAmber = inProgress;
  const borderColor = isAmber
    ? "#f59e0b"
    : accent === "cyan"
      ? "#00f5ff"
      : "#b400ff";
  const glowColor = isAmber
    ? "rgba(245,158,11,0.25)"
    : accent === "cyan"
      ? "rgba(0,245,255,0.25)"
      : "rgba(180,0,255,0.25)";

  return (
    <motion.span
      variants={item}
      className="inline-block rounded-full border px-4 py-2 text-sm font-medium"
      style={{
        borderColor: isAmber ? "rgba(245,158,11,0.4)" : borderColor + "40",
        color: isAmber ? "#f59e0b" : borderColor,
        boxShadow: `0 0 12px ${glowColor}`,
      }}
    >
      {label}
      {inProgress && (
        <span className="ml-2 rounded bg-[#f59e0b]/20 px-1.5 py-0.5 text-xs text-[#f59e0b]">
          In Progress
        </span>
      )}
    </motion.span>
  );
}

export default function Skills() {
  const [tab, setTab] = useState<"it" | "dev">("it");

  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Skills & Stack
          <span
            className="mt-2 block h-1 w-16 rounded-full bg-[#00f5ff]"
            style={{ boxShadow: "0 0 12px rgba(0,245,255,0.5)" }}
          />
        </motion.h2>

        <div className="mt-12 flex gap-2 rounded-lg border border-white/10 bg-[#111] p-1.5">
          <button
            type="button"
            onClick={() => setTab("it")}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-all ${
              tab === "it"
                ? "bg-[#00f5ff]/15 text-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.2)]"
                : "text-[#a0a0a0] hover:text-white"
            }`}
          >
            IT & Infrastructure
          </button>
          <button
            type="button"
            onClick={() => setTab("dev")}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-all ${
              tab === "dev"
                ? "bg-[#b400ff]/15 text-[#b400ff] shadow-[0_0_20px_rgba(180,0,255,0.2)]"
                : "text-[#a0a0a0] hover:text-white"
            }`}
          >
            Development
          </button>
        </div>

        <div className="mt-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            {tab === "it" ? (
              <motion.div
                key="it"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-3"
                >
                  {IT_SKILLS.map((skill) => (
                    <SkillPill
                      key={skill.label}
                      label={skill.label}
                      inProgress={skill.inProgress}
                      accent="cyan"
                    />
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="dev"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-3"
                >
                  {DEV_SKILLS.map((skill) => (
                    <SkillPill
                      key={skill.label}
                      label={skill.label}
                      inProgress={skill.inProgress}
                      accent="purple"
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
