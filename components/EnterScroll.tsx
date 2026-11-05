"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Stay } from "@/lib/site";
import Photo from "./Photo";

// Te apropii de cladire la scroll, apoi ajungi in interior.
export default function EnterScroll({ stay }: { stay: Stay }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const extScale = useTransform(p, [0, 0.7], [1, 2.5]);
  const extOpacity = useTransform(p, [0.42, 0.68], [1, 0]);
  const intScale = useTransform(p, [0.42, 0.95], [1.22, 1]);
  const intOpacity = useTransform(p, [0.42, 0.68], [0, 1]);
  const textOpacity = useTransform(p, [0.72, 0.88], [0, 1]);
  const textY = useTransform(p, [0.72, 0.88], [28, 0]);

  if (reduce) {
    return (
      <section className="enter-static" aria-label="Interior">
        <Photo name={stay.int} alt={stay.intAlt} fill sizes="100vw" />
        <div className="enter-t is-on">
          <div className="wrap">
            <p className="h-l">{stay.enterText}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="enter" aria-label="Interior">
      <div className="enter-s">
        <motion.div className="enter-l" style={{ scale: extScale, opacity: extOpacity, transformOrigin: stay.origin }}>
          <Photo name={stay.ext} alt={stay.extAlt} fill sizes="100vw" quality={85} />
        </motion.div>
        <motion.div className="enter-l" style={{ scale: intScale, opacity: intOpacity }}>
          <Photo name={stay.int} alt={stay.intAlt} fill sizes="100vw" quality={85} />
        </motion.div>
        <motion.div className="enter-t" style={{ opacity: textOpacity, y: textY }}>
          <div className="wrap">
            <p className="h-l">{stay.enterText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
