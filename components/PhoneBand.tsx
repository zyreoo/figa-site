"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PHONE, PHONE2 } from "@/lib/site";
import { EASE, Reveal } from "./Motion";
import Photo from "./Photo";

export default function PhoneBand({ title = "Rezervările se fac la telefon." }: { title?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 2]);
  return (
    <>
      <div className="wave" aria-hidden="true" />
      <section ref={ref} className="band" aria-label="Rezervări">
        <div className="wrap">
          <Reveal>
            <h2 className="h-m">{title}</h2>
          </Reveal>
          <motion.a className="band-num" href={PHONE.href} aria-label={PHONE.label} initial="hide" whileInView="show" viewport={{ once: true, amount: 0.4 }} transition={{ staggerChildren: 0.03 }}>
            {PHONE.label.split("").map((c, i) => (
              <span key={i} className="d-mask" aria-hidden="true">
                <motion.span data-r variants={{ hide: { y: "105%" }, show: { y: "0%", transition: { duration: 0.85, ease: EASE } } }}>
                  {c === " " ? " " : c}
                </motion.span>
              </span>
            ))}
          </motion.a>
          <div className="band-g">
            <Reveal className="band-t" delay={0.2}>
              <p>Spune-ne perioada și numărul de persoane, iar noi îți comunicăm disponibilitatea.</p>
              <p>
                A doua linie: <a href={PHONE2.href}>{PHONE2.label}</a>
              </p>
              <p>Check-in 12:00 · Check-out 10:00</p>
            </Reveal>
            <motion.figure className="band-f" style={reduce ? undefined : { rotate }}>
              <Photo name="det-semn" alt="Firma Căsuțe Sebastian, din lemn, cu numărul de telefon" sizes="(max-width: 900px) 90vw, 420px" />
            </motion.figure>
          </div>
        </div>
      </section>
    </>
  );
}
