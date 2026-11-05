"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { PHONE } from "@/lib/site";
import { EASE, Words } from "./Motion";
import Photo from "./Photo";
import { IconPhone } from "./Icons";

const WORD = "Băile Figa";

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const wordScroll = useTransform(p, [0, 1], [0, 300]);
  const fgScroll = useTransform(p, [0, 1], [0, 60]);
  const fgScale = useTransform(p, [0, 1], [1, 1.09]);
  const wordX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const wordY = useTransform([wordScroll, sy], ([a, b]) => (a as number) + (b as number) * -16);
  const fgX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const fgY = useTransform([fgScroll, sy], ([a, b]) => (a as number) + (b as number) * 10);
  const copyOpacity = useTransform(p, [0, 0.55], [1, 0]);

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover)").matches) return;
    const move = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my, reduce]);

  return (
    <section ref={ref} className="hero" aria-label="Băile Figa">
      <motion.div className="hero-word" aria-hidden="true" style={reduce ? undefined : { x: wordX, y: wordY }} initial="hide" animate="show" transition={{ staggerChildren: 0.045, delayChildren: 0.35 }}>
        {WORD.split("").map((c, i) => (
          <span key={i} className="c-mask">
            <motion.span data-r variants={{ hide: { y: "100%" }, show: { y: "0%", transition: { duration: 1.1, ease: EASE } } }}>
              {c === " " ? " " : c}
            </motion.span>
          </span>
        ))}
      </motion.div>

      <motion.div className="hero-fg" style={reduce ? undefined : { x: fgX, y: fgY, scale: fgScale }}>
        <motion.div data-r className="hero-fg-i" initial={{ y: 70, opacity: 0.4 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: EASE, delay: 0.15 }}>
          <Photo name="hero-fg" alt="Cabanele Panoramic VIP de la Băile Figa, seara, cu luminile aprinse" fill preload quality={85} sizes="(max-aspect-ratio: 1/1) 150vw, 100vw" />
        </motion.div>
      </motion.div>

      <motion.p data-r className="hero-script script" aria-hidden="true" initial={{ clipPath: "inset(-20% 100% -20% 0%)" }} animate={{ clipPath: "inset(-20% 0% -20% 0%)" }} transition={{ duration: 1.6, ease: [0.45, 0, 0.2, 1], delay: 1 }}>
        Litoralul Bistrițenilor
      </motion.p>

      <motion.div className="hero-c" style={reduce ? undefined : { opacity: copyOpacity }}>
        <div className="wrap hero-row">
          <div>
            <motion.p data-r className="script m-script" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
              Litoralul Bistrițenilor
            </motion.p>
            <Words as="h1" text="Cazare la Băile Figa, între dealuri, la 3 km de Beclean" onLoad delay={0.7} />
          </div>
          <motion.a data-r className="pill" href={PHONE.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 1.15 }}>
            Rezervi cu un telefon
            <span className="btn btn-white">
              <IconPhone />
              {PHONE.label}
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
