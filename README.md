# Băile Figa Cazare

Site de prezentare pentru cazarea de la Băile Figa: Hotel Select, Cabane Panoramic VIP și Căsuțe Sebastian. Rezervările se fac doar la telefon, deci site-ul nu are formular.

Construit cu Next.js (App Router), TypeScript, Motion pentru animații și Lenis pentru scroll.

## Pornire

```bash
npm install
npm run dev
```

Site-ul pornește la http://localhost:3000.

## Rute

| Rută | Pagină |
| --- | --- |
| `/` | Prima pagină |
| `/cazare` | Compararea variantelor de cazare |
| `/cazare/hotel-select` | Hotel Select |
| `/cazare/cabane-panoramic` | Cabane Panoramic VIP |
| `/cazare/casute-sebastian` | Căsuțe Sebastian |
| `/ce-faci-la-figa` | Activități, taxe și program |
| `/galerie` | Galerie foto |
| `/contact` | Contact |

Adresele site-ului vechi sunt redirecționate în `next.config.ts`.

## Unde schimbi conținutul

- Prețuri, texte și poze pentru cazare: `lib/site.ts`
- Telefoane și hartă: `lib/site.ts`
- Taxe și program: `app/ce-faci-la-figa/page.tsx`
- Poze: `public/img`. Dacă adaugi una, trece-i dimensiunile în `lib/images.ts`.

## SEO

- Titluri, descrieri și imagini de distribuire: `lib/seo.ts` și `metadata` din fiecare pagină
- Date structurate (schema.org): `lib/seo.ts`
- Sitemap și robots: `app/sitemap.ts`, `app/robots.ts`
- Adresele `*.vercel.app` primesc `noindex`; se indexează doar domeniul real

Când domeniul `bailefigacazare.ro` este mutat pe acest site, trimite `https://bailefigacazare.ro/sitemap.xml` în Google Search Console.
