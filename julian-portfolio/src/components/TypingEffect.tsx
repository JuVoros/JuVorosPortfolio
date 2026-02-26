"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PHRASES = [
  "Software Developer",
  "CS + AI Background",
  "Video Game Developer",
  "Level Designer",
];

const TYPING_SPEED = 80;
const PAUSE_AT_END = 2000;
const DELETING_SPEED = 50;
const PAUSE_AT_START = 500;

export default function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (!isDeleting && displayText === phrase) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AT_END);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setIsDeleting(false);
      }, PAUSE_AT_START);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting ? phrase.slice(0, prev.length - 1) : phrase.slice(0, prev.length + 1)
        );
      },
      isDeleting && displayText === phrase ? PAUSE_AT_END : speed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <span className="min-h-[1.5em] inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-0.5 inline-block w-0.5 bg-[#00f5ff] align-middle"
        style={{ height: "1em" }}
      />
    </span>
  );
}
