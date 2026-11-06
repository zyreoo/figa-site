"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PHONE, PHONE2, STAYS } from "@/lib/site";
import { EASE } from "./Motion";
import Photo from "./Photo";
import { IconPhone } from "./Icons";

const LINKS = [
  { href: "/terapii-saline", label: "Terapii saline" },
  { href: "/ce-faci-la-figa", label: "Ce faci la Figa" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const root = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setStuck(y > 40);
    if (Math.abs(y - prev) > 2) setHidden(y > prev && y > 220);
    if (Math.abs(y - prev) > 2) setMega(false);
  });

  // Blocheaza pagina cat timp meniul mobil e deschis.
  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", mobile);
  }, [mobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setMobile(false);
      }
    };
    const onDown = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setMega(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  const open = () => {
    if (timer.current) clearTimeout(timer.current);
    setMega(true);
  };
  const closeSoon = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMega(false), 140);
  };
  const closeAll = () => {
    setMega(false);
    setMobile(false);
  };

  const inStays = pathname.startsWith("/cazare");
  const pillKey = hover ?? (inStays ? "cazare" : LINKS.find((l) => pathname.startsWith(l.href))?.href) ?? null;

  return (
    <>
      <motion.header
        ref={root}
        className={`bar${stuck || mega ? " is-solid" : ""}`}
        animate={{ y: hidden && !mega && !mobile ? "-130%" : "0%" }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="bar-in">
          <Link className="brand" href="/" onClick={closeAll} aria-label="Băile Figa Cazare, acasă">
            <Image src="/img/logo.webp" alt="" width={46} height={46} preload />
            <span>
              Băile Figa
              <small>Cazare</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Principal" onMouseLeave={() => setHover(null)}>
            <div className="nav-group" onMouseEnter={open} onMouseLeave={closeSoon}>
              <button type="button" className={`nav-l${inStays ? " is-on" : ""}`} aria-expanded={mega} aria-controls="meniu-cazare" onClick={(e) => (e.detail === 0 ? setMega((m) => !m) : setMega(true))} onMouseEnter={() => setHover("cazare")}>
                {pillKey === "cazare" ? <motion.span layoutId="navpill" className="navpill" transition={{ type: "spring", stiffness: 420, damping: 36 }} /> : null}
                <span className="nav-t">
                  Cazare
                  <svg className={`chev${mega ? " up" : ""}`} aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                  </svg>
                </span>
              </button>
            </div>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-l${pathname.startsWith(l.href) ? " is-on" : ""}`} aria-current={pathname.startsWith(l.href) ? "page" : undefined} onMouseEnter={() => setHover(l.href)} onClick={closeAll}>
                {pillKey === l.href ? <motion.span layoutId="navpill" className="navpill" transition={{ type: "spring", stiffness: 420, damping: 36 }} /> : null}
                <span className="nav-t">{l.label}</span>
              </Link>
            ))}
          </nav>

          <a className="bar-tel" href={PHONE.href}>
            <IconPhone />
            <span>{PHONE.label}</span>
          </a>
          <a className="bar-tel-m" href={PHONE.href} aria-label={`Sună la ${PHONE.label}`}>
            <IconPhone />
          </a>
          <button type="button" className={`burger${mobile ? " is-x" : ""}`} aria-label={mobile ? "Închide meniul" : "Deschide meniul"} aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
            <i />
            <i />
          </button>
        </div>

        <AnimatePresence>
          {mega ? (
            <motion.div id="meniu-cazare" className="mega" onMouseEnter={open} onMouseLeave={closeSoon} initial={{ opacity: 0, y: -12, clipPath: "inset(0% 0% 100% 0% round 22px)" }} animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 22px)" }} exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }} transition={{ duration: 0.5, ease: EASE }}>
              {STAYS.map((s, i) => (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE, delay: 0.05 + i * 0.06 }}>
                  <Link className="mega-c" href={`/cazare/${s.slug}`} onClick={closeAll}>
                    <span className="mega-i">
                      <Photo name={s.card.image} alt="" fill sizes="340px" />
                    </span>
                    <strong>{s.name}</strong>
                    <span className="mega-m">
                      {s.price} {s.priceNote}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link className="mega-all" href="/cazare" onClick={closeAll}>
                Compară toate variantele
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {mobile ? (
          <motion.div className="mmenu" initial={{ clipPath: "circle(0% at calc(100% - 46px) 46px)" }} animate={{ clipPath: "circle(150% at calc(100% - 46px) 46px)" }} exit={{ clipPath: "circle(0% at calc(100% - 46px) 46px)", transition: { duration: 0.45, ease: EASE } }} transition={{ duration: 0.7, ease: EASE }}>
            <p className="mm-label">Cazare</p>
            <div className="mm-stays">
              {STAYS.map((s, i) => (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.14 + i * 0.06 }}>
                  <Link className="mm-stay" href={`/cazare/${s.slug}`} onClick={closeAll}>
                    <span className="mm-th">
                      <Photo name={s.card.image} alt="" fill sizes="96px" />
                    </span>
                    <span>
                      <strong>{s.name}</strong>
                      <small>{s.price} pe noapte</small>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <nav aria-label="Mobil" className="mm-links">
              {[{ href: "/", label: "Acasă" }, ...LINKS].map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.32 + i * 0.05 }}>
                  <Link href={l.href} onClick={closeAll} aria-current={pathname === l.href ? "page" : undefined}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div className="mm-foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}>
              <span>Rezervări la telefon</span>
              <a href={PHONE.href}>{PHONE.label}</a>
              <a className="mm-2" href={PHONE2.href}>
                {PHONE2.label}
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
