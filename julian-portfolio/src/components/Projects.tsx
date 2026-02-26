"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    id: "pacman",
    tags: ["Java", "AI", "Multithreading", "Algorithms"],
    title: "Ms. Pac-Man AI System",
    description:
      "Built a fully autonomous AI agent for Ms. Pac-Man in Java — not a game, a systems problem. Real-time decision making, performance under strict time constraints, and multithreaded execution.",
    bullets: [
      "Implemented A* and state-based AI with dynamic ghost threat modeling",
      "Optimized multithreaded decision loops to meet hard real-time deadlines",
      "Direct parallel to performance troubleshooting in production systems",
    ],
    github: "https://github.com/JuVoros",
  },
  {
    id: "pathfinder",
    tags: ["C++", "Algorithms", "Systems", "AI"],
    title: "Hex-Tile Path Planner",
    description:
      "Custom implementation of A* and Uniform-Cost Search in C++ for hex-tile environments. Modular architecture, STL containers, dynamic terrain cost — built for efficiency and extensibility.",
    bullets: [
      "Low-level C++ systems design with performance-first architecture",
      "Dynamic cost modeling simulating real-world routing constraints",
      "Demonstrates the CS foundations that make IT troubleshooting faster",
    ],
    github: "https://github.com/JuVoros",
  },
  {
    id: "portfolio",
    tags: ["Next.js", "Tailwind", "Framer Motion", "DNS", "Deployment"],
    title: "Production Portfolio Website",
    description:
      "Designed and shipped a full production website for a client. Handled everything — architecture, animations, deployment pipeline, DNS configuration, and performance optimization.",
    bullets: [
      "Framer Motion parallax, scroll-based reveals, and interactive CTAs",
      "Managed DNS records, domain config, and Vercel deployment pipeline",
      "Token-based UI system for scalable theming and maintainability",
    ],
    github: "https://github.com/JuVoros",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Projects
          <span
            className="mt-2 block h-1 w-16 rounded-full bg-[#00f5ff]"
            style={{ boxShadow: "0 0 12px rgba(0,245,255,0.5)" }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-[#a0a0a0]"
        >
          Real systems. Real code. Real problems solved.
        </motion.p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-neon group relative overflow-hidden rounded-xl p-6 transition-shadow hover:shadow-[0_0_24px_rgba(0,245,255,0.25)]"
            >
              <span
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#00f5ff] to-[#b400ff]"
                style={{ boxShadow: "0 0 12px rgba(0,245,255,0.3)" }}
              />
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(0,245,255,0.3)] px-2.5 py-0.5 text-xs font-medium text-[#00f5ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">
                {project.description}
              </p>
              <ul className="mt-4 space-y-2">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm text-[#a0a0a0] before:content-['•'] before:text-[#00f5ff]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#00f5ff]/50 bg-[#00f5ff]/5 px-4 py-2 text-sm font-semibold text-[#00f5ff] transition-all hover:shadow-[0_0_16px_rgba(0,245,255,0.3)]"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
