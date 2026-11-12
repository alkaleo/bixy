"use client";

import { motion } from "motion/react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/** A hairline that draws itself from the left when scrolled into view. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={"h-px origin-left bg-ink " + className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
    />
  );
}

/** Fades and lifts its children into place when scrolled into view. */
export function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
