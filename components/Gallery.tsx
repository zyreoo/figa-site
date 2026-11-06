"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { images } from "@/lib/images";
import { ALT, GALLERY } from "@/lib/site";
import { EASE } from "./Motion";

export default function Gallery() {
  const [cat, setCat] = useState("toate");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(() => GALLERY.filter((g) => cat === "toate" || g.id === cat).flatMap((g) => g.images.map((name) => ({ name, label: g.label }))), [cat]);

  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    document.documentElement.classList.add("no-scroll");
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("keydown", key);
      document.documentElement.classList.remove("no-scroll");
    };
  }, [open, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrează pozele">
        {[{ id: "toate", label: "Toate" }, ...GALLERY].map((f) => (
          <button key={f.id} type="button" aria-pressed={cat === f.id} onClick={() => setCat(f.id)}>
            {cat === f.id ? <motion.span layoutId="filterpill" className="filterpill" transition={{ type: "spring", stiffness: 420, damping: 36 }} /> : null}
            <span>{f.label}</span>
          </button>
        ))}
      </div>
      <div className="masonry">
        {items.map((it, i) => (
          <motion.button data-r key={`${cat}-${it.name}`} type="button" aria-label={`Mărește poza: ${it.label}`} onClick={() => setOpen(i)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.8, ease: EASE }}>
            <Image src={`/img/${it.name}.webp`} alt={ALT[it.name] ?? it.label} width={images[it.name][0]} height={images[it.name][1]} sizes="(max-width: 1100px) 50vw, 33vw" />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {current ? (
          <motion.div className="lb" role="dialog" aria-modal="true" aria-label={current.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setOpen(null)}>
            <motion.div key={current.name} className="lb-i" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: EASE }}>
              <Image src={`/img/${current.name}.webp`} alt={ALT[current.name] ?? current.label} fill sizes="100vw" quality={85} style={{ objectFit: "contain" }} onClick={(e) => e.stopPropagation()} />
            </motion.div>
            <p className="lb-c">{current.label} · {(open ?? 0) + 1} din {items.length}</p>
            <button type="button" className="lb-b lb-x" aria-label="Închide" onClick={() => setOpen(null)}>×</button>
            <button type="button" className="lb-b lb-p" aria-label="Poza anterioară" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
            <button type="button" className="lb-b lb-n" aria-label="Poza următoare" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
