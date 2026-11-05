"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PHONE, PHONE2, STAYS } from "@/lib/site";
import { EASE } from "./Motion";
import { IconPhone } from "./Icons";

const WORD = "Băile Figa";

export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="wrap">
          <div className="foot-g">
            <div>
              <Image className="foot-logo" src="/img/logo.webp" alt="Sigla Băile Figa Cazare" width={88} height={88} />
              <p className="mute small">
                Turism Expert Băile Figa SRL
                <br />
                J12/7545/29.12.2022 · CUI RO47387788
              </p>
            </div>
            <div>
              <span className="label">Cazare</span>
              <ul>
                {STAYS.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/cazare/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label">Stațiunea</span>
              <ul>
                <li><Link href="/terapii-saline">Terapii saline</Link></li>
                <li><Link href="/ce-faci-la-figa">Ce faci la Figa</Link></li>
                <li><Link href="/galerie">Galerie</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <span className="label">Rezervări</span>
              <ul>
                <li><a href={PHONE.href}>{PHONE.label}</a></li>
                <li><a href={PHONE2.href}>{PHONE2.label}</a></li>
                <li><Link href="/politica-de-confidentialitate">Confidențialitate</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div className="foot-word" aria-hidden="true" initial="hide" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.035 }}>
          {WORD.split("").map((c, i) => (
            <motion.span data-r key={i} variants={{ hide: { y: "60%", opacity: 0 }, show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: EASE } } }}>
              {c === " " ? " " : c}
            </motion.span>
          ))}
        </motion.div>
      </footer>
      <div className="callbar">
        <a className="btn btn-accent" href={PHONE.href}>
          <IconPhone />
          Sună: {PHONE.label}
        </a>
      </div>
    </>
  );
}
