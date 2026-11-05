"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import { useRef } from "react";
import { PhotoReveal, Reveal } from "./Motion";

const DAY = [
  { time: "08:00", title: "Cafeaua, pe terasă", text: "Ai filtru de cafea în cameră, iar Parcul balnear se deschide la 08:00.", image: "hotel-terasa", alt: "Terasă cu două fotolii și o măsuță" },
  { time: "10:00", title: "Aqualand și tobogane", text: "Toboganul Kamikaze are peste 10 metri înălțime, iar „Marele Alb” are 150 de metri lungime.", image: "aq-oameni", alt: "Tineri care sar în piscină, cu dealuri în spate" },
  { time: "14:00", title: "Prânz", text: "Poți comanda de la firma de catering sau poți folosi grătarul.", image: "pan-masa", alt: "Masă lungă cu scaune albe, într-o cabană" },
  { time: "17:00", title: "Apă sărată și nămol", text: "Stațiunea recomandă o baie de 15–20 de minute, urmată de 15 minute de odihnă.", image: "namol", alt: "Oameni în bazinul rustic cu nămol, în aer liber" },
  { time: "20:00", title: "Seara la foișor", text: "Foișorul are masă lungă, iar lângă el sunt grătarul și vatra de foc.", image: "pan-foisor2", alt: "Foișor de lemn cu masă lungă, seara" },
];

export default function DayTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  return (
    <div className="day" ref={ref}>
      <div className="day-line" aria-hidden="true">
        <motion.span style={reduce ? undefined : { scaleY: scrollYProgress }} />
      </div>
      {DAY.map((d) => (
        <article key={d.time}>
          <Reveal>
            <time>{d.time}</time>
          </Reveal>
          <Reveal delay={0.08}>
            <h3>{d.title}</h3>
            <p className="mute">{d.text}</p>
          </Reveal>
          <PhotoReveal name={d.image} alt={d.alt} sizes="(max-width: 760px) 100vw, 42vw" className="day-p" />
        </article>
      ))}
    </div>
  );
}
