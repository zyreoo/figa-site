"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Photo from "./Photo";

export const EASE = [0.2, 0.75, 0.2, 1] as const;
const VIEW = { once: true, amount: 0.15 } as const;

export function Reveal({ children, delay = 0, y = 26, className, style }: { children: React.ReactNode; delay?: number; y?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div data-r className={className} style={style} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

// Titlu care urca pe cuvinte, din spatele unei masti.
export function Words({ text, as = "h2", className, id, delay = 0, onLoad }: { text: string; as?: "h1" | "h2" | "h3" | "p"; className?: string; id?: string; delay?: number; onLoad?: boolean }) {
  const Tag = motion[as];
  const words = text.split(" ");
  const animateProps = onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.4 } };
  return (
    <Tag id={id} className={className} aria-label={text} initial="hide" {...animateProps} transition={{ staggerChildren: 0.055, delayChildren: delay }}>
      {words.map((w, i) => (
        <span key={i} className="w-mask" aria-hidden="true">
          <motion.span data-r className="w-in" variants={{ hide: { y: "112%" }, show: { y: "0%", transition: { duration: 0.95, ease: EASE } } }}>
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

// Poza se dezvaluie de jos in sus si se aseaza usor.
// Observam cadrul de afara, pentru ca o poza decupata complet nu e vazuta ca vizibila.
export function PhotoReveal({ name, alt, sizes, className, delay = 0, caption }: { name: string; alt: string; sizes?: string; className?: string; delay?: number; caption?: string }) {
  return (
    <motion.figure className={className} initial="hide" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      <motion.div data-r className="ph" variants={{ hide: { clipPath: "inset(100% 0% 0% 0%)" }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.15, ease: EASE, delay } } }}>
        <motion.div data-r className="ph-in" variants={{ hide: { scale: 1.16 }, show: { scale: 1, transition: { duration: 1.5, ease: EASE, delay } } }}>
          <Photo name={name} alt={alt} fill sizes={sizes} />
        </motion.div>
      </motion.div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </motion.figure>
  );
}

// Fotografie cu parallax la scroll, in interiorul unui cadru.
export function Parallax({ name, alt, sizes, amount = 8, className, children }: { name: string; alt: string; sizes?: string; amount?: number; className?: string; children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={className}>
      <motion.div className="plx" style={reduce ? undefined : { y, scale: 1 + (amount * 2.2) / 100 }}>
        <Photo name={name} alt={alt} fill sizes={sizes} />
      </motion.div>
      {children}
    </div>
  );
}
