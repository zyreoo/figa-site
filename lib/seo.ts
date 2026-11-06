import type { Metadata } from "next";
import { FAQ, MAP, PHONE, SITE_URL, type Stay } from "./site";

const SITE_NAME = "Băile Figa Cazare";
const ADDRESS = { "@type": "PostalAddress", streetAddress: "Strada Băile Figa", addressLocality: "Beclean", postalCode: "425100", addressRegion: "Bistrița-Năsăud", addressCountry: "RO" };
const GEO = { "@type": "GeoCoordinates", latitude: 47.164053, longitude: 24.207428 };
const TELEPHONE = PHONE.href.replace("tel:", "");

// Texte scurte pentru linkurile trimise: aplicatiile de mesagerie taie textele lungi.
const SHARE: Record<string, { title: string; description: string }> = {
  "/": { title: "Băile Figa Cazare", description: "Hotel, cabane și căsuțe la 3 km de Beclean. De la 250 lei pe noapte." },
  "/cazare": { title: "Cazare la Băile Figa", description: "Hotel, cabane și căsuțe, de la 250 lei pe noapte." },
  "/cazare/hotel-select": { title: "Hotel Select, Băile Figa", description: "8 camere, 300 lei pe noapte. Rezervări la 0743 092 226." },
  "/cazare/cabane-panoramic": { title: "Cabane Panoramic, Băile Figa", description: "Până la 12 persoane, 750 lei pe noapte. Rezervări la 0743 092 226." },
  "/cazare/casute-sebastian": { title: "Căsuțe Sebastian, Băile Figa", description: "Pat king-size și terasă, 250 lei pe noapte. Rezervări la 0743 092 226." },
  "/terapii-saline": { title: "Terapii saline, Băile Figa", description: "Aerosoli, camera de sare, băi sărate și nămol." },
  "/ce-faci-la-figa": { title: "Ce faci la Băile Figa", description: "Aqualand, Legacy, apă sărată și sport." },
  "/galerie": { title: "Galerie foto, Băile Figa", description: "Hotel, cabane, căsuțe și stațiune." },
  "/contact": { title: "Rezervări Băile Figa", description: "Rezervări la 0743 092 226 sau 0759 021 090." },
};

// Titlu, descriere, adresa canonica si imaginea de la distribuire, pentru fiecare pagina.
export function pageMeta({ title, description, path, og }: { title: string; description: string; path: string; og: string }): Metadata {
  const share = SHARE[path] ?? { title, description };
  const images = [{ url: `/og/${og}.jpg`, width: 1200, height: 630, alt: share.title, type: "image/jpeg" }];
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path === "/" ? "" : path}` },
    openGraph: { ...share, url: path, siteName: SITE_NAME, locale: "ro_RO", type: "website", images },
    twitter: { card: "summary_large_image", ...share, images: [`/og/${og}.jpg`] },
  };
}

export function businessLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        image: `${SITE_URL}/og/home.jpg`,
        telephone: TELEPHONE,
        priceRange: "250–750 RON",
        currenciesAccepted: "RON",
        paymentAccepted: "Numerar, virament bancar, vouchere de vacanță, card de vacanță",
        checkinTime: "12:00",
        checkoutTime: "10:00",
        address: ADDRESS,
        geo: GEO,
        hasMap: MAP,
        sameAs: ["https://www.facebook.com/CasuteSebastianBaileFiga"],
        legalName: "Turism Expert Băile Figa SRL",
      },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "ro-RO", publisher: { "@id": `${SITE_URL}/#business` } },
    ],
  };
}

export function stayLd(stay: Stay) {
  return {
    "@context": "https://schema.org",
    "@type": stay.slug === "hotel-select" ? "Hotel" : "LodgingBusiness",
    "@id": `${SITE_URL}/cazare/${stay.slug}#cazare`,
    name: `${stay.name}, Băile Figa`,
    description: stay.description,
    url: `${SITE_URL}/cazare/${stay.slug}`,
    image: [stay.hero, ...stay.gallery.map((g) => g.image)].map((i) => `${SITE_URL}/img/${i}.webp`),
    telephone: TELEPHONE,
    priceRange: `${stay.price.replace(" lei", "")} RON pe noapte`,
    address: ADDRESS,
    geo: GEO,
    checkinTime: "12:00",
    checkoutTime: "10:00",
    amenityFeature: stay.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    parentOrganization: { "@id": `${SITE_URL}/#business` },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
