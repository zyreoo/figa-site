"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { EASE, Words } from "./Motion";
import Photo from "./Photo";

export default function PageHero({ title, sub, image, alt, short, position }: { title: string; sub?: string; image: string; alt: string; short?: boolean; position?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  return (
    <section ref={ref} className={`phero${short ? " short" : ""}`} aria-label={title}>
      <motion.div className="phero-i" style={reduce ? undefined : { y }}>
        <motion.div data-r className="phero-z" initial={{ scale: 1.14 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: EASE }}>
          <Photo name={image} alt={alt} fill preload quality={85} style={position ? { objectPosition: position } : undefined} />
        </motion.div>
      </motion.div>
      <div className="phero-c wrap">
        {sub ? (
          <motion.p data-r className="sub" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}>
            {sub}
          </motion.p>
        ) : null}
        <Words as="h1" text={title} onLoad delay={0.35} />
      </div>
    </section>
  );
}
