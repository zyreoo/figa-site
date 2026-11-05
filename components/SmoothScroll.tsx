"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { lenisRef } from "@/lib/lenis";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.11, anchors: { offset: -96 } });
    lenisRef.current = lenis;
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
