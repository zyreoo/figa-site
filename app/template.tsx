"use client";

import { motion, useReducedMotion } from "motion/react";

// Cortina petrol care se ridica la fiecare schimbare de pagina.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <>
      {reduce ? null : (
        <motion.div data-curtain className="curtain" aria-hidden="true" initial={{ y: "0%" }} animate={{ y: "-105%" }} transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.05 }} />
      )}
      {children}
    </>
  );
}
