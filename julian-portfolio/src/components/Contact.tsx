"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const LINKS = [
  {
    href: "https://github.com/JuVoros",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/julian-voros",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "mailto:Julianvoros@hotmail.com",
    label: "Email",
    Icon: HiMail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Let&apos;s Connect
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
          Open to IT Support and Help Desk roles in Seattle. Let&apos;s talk — I
          respond fast.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"
          method="POST"
          className="mt-12 space-y-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#a0a0a0]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition-[box-shadow,border-color] focus:border-[#00f5ff] focus:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#a0a0a0]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition-[box-shadow,border-color] focus:border-[#00f5ff] focus:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#a0a0a0]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition-[box-shadow,border-color] focus:border-[#00f5ff] focus:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ boxShadow: "0 0 28px rgba(0,245,255,0.4)" }}
            className="w-full rounded-lg px-6 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-shadow"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #b400ff)",
              boxShadow: "0 0 20px rgba(0,245,255,0.25)",
            }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center gap-8"
        >
          {LINKS.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              whileHover={{ scale: 1.15 }}
              className="text-[#00f5ff] transition-[filter] hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.6)]"
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
