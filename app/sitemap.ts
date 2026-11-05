import type { MetadataRoute } from "next";
import { SITE_URL, STAYS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/cazare", ...STAYS.map((s) => `/cazare/${s.slug}`), "/ce-faci-la-figa", "/galerie", "/contact"];
  return paths.map((p) => ({ url: `${SITE_URL}${p}` }));
}
