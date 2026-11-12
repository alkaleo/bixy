"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { HEADLINE_WORDS } from "@/lib/site";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * "We Make In[teractive] Ads" — "In" stays put, the rest flips like an
 * airport split-flap board through HEADLINE_WORDS.
 */
export function HeroTitle() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % HEADLINE_WORDS.length), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  const word = HEADLINE_WORDS[index];

  return (
    <h1 className="display hero-title text-brand">
      <span className="sr-only">We Make Interactive Ads</span>
      <span aria-hidden="true" className="flex flex-wrap items-baseline gap-x-[0.2em] gap-y-[0.06em] lg:flex-nowrap">
        <span>We Make</span>
        <span className="flap-row relative inline-flex">
          <span className="flap">I</span>
          <span className="flap">n</span>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={word}
              className="inline-flex"
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
            >
              {word.split("").map((ch, k) => (
                <motion.span
                  key={k}
                  className="flap"
                  initial={{ rotateX: -92, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ delay: k * 0.045, duration: 0.42, ease: EASE }}
                >
                  {ch}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </span>
        <motion.span layout="position" transition={{ duration: 0.45, ease: EASE }}>
          Ads
        </motion.span>
      </span>
    </h1>
  );
}
