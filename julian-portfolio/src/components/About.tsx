"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const STATS = [
  { label: "B.S. Computer Science", sub: "Full Sail University · March 2025" },
  { label: "Full Stack Web Development", sub: "University of Washington · 2021" },
  { label: "Seattle, WA", sub: "Open to work" }
];

const COURSEWORK = [
  {
    title: "Core CS",
    items: "Data Structures & Algorithms, Operating Systems, Computer Networks, Software Engineering",
  },
  {
    title: "AI & Game Dev",
    items: "Artificial Intelligence, Game Architecture, Engine Development, Game Integration",
  },
  {
    title: "Math & Theory",
    items: "Discrete Math, Linear Algebra, Probability, Digital Logic",
  },
  {
    title: "UX & Media",
    items: "Psychology of Play, Human-Computer Interaction, 3D Content Creation",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="About Me" />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-xl border border-[rgba(0,245,255,0.15)] bg-[#0d0d0d]"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-xs text-[#a0a0a0]">julian.js</span>
            </div>
            <pre className="flex overflow-x-auto p-4 text-sm leading-relaxed sm:p-6">
              <span className="select-none pr-4 text-right text-[#a0a0a0]/60" aria-hidden>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("\n")}
              </span>
              <code className="flex-1">
                <span className="text-white">const julian = </span>
                <span className="text-white">{"{"}</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">degree</span>
                <span className="text-white">: </span>
                <span className="text-[#00f5ff]">
                  "B.S. Computer Science — Full Sail University (March 2025)"
                </span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">alsoStudied</span>
                <span className="text-white">: </span>
                <span className="text-[#00f5ff]">
                  "Full Stack Web Dev — University of Washington (Fall/Winter 2021)"
                </span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">currentlyLearning</span>
                <span className="text-white">: </span>
                <span className="text-[#00f5ff]">
                  "Google IT Support Specialization"
                </span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">targetCert</span>
                <span className="text-white">: </span>
                <span className="text-[#00f5ff]">"CompTIA A+, AWS Cloud"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">location</span>
                <span className="text-white">: </span>
                <span className="text-[#00f5ff]">"Seattle, WA"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">openTo</span>
                <span className="text-white">: [</span>
                <span className="text-[#00f5ff]">
                  "Software Development", "IT Support", "Systems roles"
                </span>
                <span className="text-white">],</span>
                {"\n"}
                <span className="text-[#a0a0a0]">  </span>
                <span className="text-[#b400ff]">superpower</span>
                <span className="text-white">: </span>
                <span className="text-[#00f5ff]">
                  "Developer thinking applied to IT problems"
                </span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </code>
            </pre>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col justify-center gap-6">
            <p className="text-[#a0a0a0] leading-relaxed">
              Recent Computer Science graduate with a strong foundation in software and game development, specializing in AI and real-time systems. Experienced with multiple engines, programming languages, and development pipelines. Passionate about building intelligent, efficient, and engaging systems in both games and broader software applications.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              I graduated from Full Sail University with a B.S. in Computer Science (March 2025), focused on AI systems, real-time applications, and how software behaves at a low level. I&apos;ve written multithreaded Java applications, built custom pathfinding algorithms in C++, and shipped production web apps with Next.js. I also hold a Full Stack Web Development certification from the University of Washington.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-lg font-semibold text-white">Coursework Highlights</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {COURSEWORK.map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-[rgba(0,245,255,0.15)] bg-[#0d0d0d] p-4"
              >
                <p className="font-semibold text-[#00f5ff]">{block.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">{block.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                boxShadow: "0 0 24px rgba(0,245,255,0.25)",
              }}
              className="card-neon rounded-xl p-6 transition-shadow"
            >
              <p className="font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-[#a0a0a0]">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

