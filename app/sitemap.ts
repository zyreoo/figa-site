import type { MetadataRoute } from "next";
import { GALLERY, SITE_URL, STAYS } from "@/lib/site";

const UPDATED = new Date("2026-11-05");
const img = (n: string) => `${SITE_URL}/img/${n}.webp`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: UPDATED, changeFrequency: "monthly", priority: 1, images: [`${SITE_URL}/og/home.jpg`] },
    { url: `${SITE_URL}/cazare`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...STAYS.map((s) => ({ url: `${SITE_URL}/cazare/${s.slug}`, lastModified: UPDATED, changeFrequency: "monthly" as const, priority: 0.9, images: [s.hero, ...s.gallery.map((g) => g.image)].map(img) })),
    { url: `${SITE_URL}/ce-faci-la-figa`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/galerie`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6, images: GALLERY.flatMap((g) => g.images).map(img) },
    { url: `${SITE_URL}/contact`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/politica-de-confidentialitate`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
