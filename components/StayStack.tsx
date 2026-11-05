"use client";

import Link from "next/link";
import { motion, type MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { STAYS, type Stay } from "@/lib/site";
import { IconArrow } from "./Icons";
import Photo from "./Photo";

function Card({ stay, index, total, progress }: { stay: Stay; index: number; total: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const start = index / total;
  const end = (index + 1) / total;
  const last = index === total - 1;
  const scale = useTransform(progress, [start, end], [1, last ? 1 : 0.93]);
  const dim = useTransform(progress, [start, end], [0, last ? 0 : 0.5]);
  const imgScale = useTransform(progress, [Math.max(0, start - 1 / total), end], [1.14, 1]);
  return (
    <motion.article className="stay" style={reduce ? undefined : { scale }}>
      <Link href={`/cazare/${stay.slug}`} className="stay-a">
        <motion.div className="stay-i" style={reduce ? undefined : { scale: imgScale }}>
          <Photo name={stay.hero} alt={stay.heroAlt} fill sizes="100vw" quality={85} />
        </motion.div>
        <div className="stay-c">
          <div>
            <h3>{stay.name}</h3>
            <span className="stay-go">
              Vezi {stay.short.toLowerCase()} <IconArrow />
            </span>
          </div>
          <div className="stats">
            {stay.stack.map((s) => (
              <div className="stat" key={s.value}>
                <b>{s.value}</b>
                <span>{s.note}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.span className="stay-dim" aria-hidden="true" style={reduce ? undefined : { opacity: dim }} />
      </Link>
    </motion.article>
  );
}

export default function StayStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div className="stack" ref={ref}>
      {STAYS.map((s, i) => (
        <Card key={s.slug} stay={s} index={i} total={STAYS.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
