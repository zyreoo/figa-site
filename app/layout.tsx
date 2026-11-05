import type { Metadata, Viewport } from "next";
import { Great_Vibes, Host_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Host_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const script = Great_Vibes({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Băile Figa Cazare | Hotel, cabane și căsuțe la 3 km de Beclean", template: "%s" },
  description: "Cazare la Băile Figa: Hotel Select, Cabane Panoramic VIP și Căsuțe Sebastian, de la 250 lei pe noapte. Rezervări la 0743 092 226. Acceptăm vouchere de vacanță.",
  icons: { icon: "/img/logo.webp" },
  openGraph: { locale: "ro_RO", type: "website", siteName: "Băile Figa Cazare", images: ["/img/hero-og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0A2A3B" };

const LD = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Băile Figa Cazare",
  url: SITE_URL,
  telephone: "+40743092226",
  priceRange: "250–750 RON",
  address: { "@type": "PostalAddress", streetAddress: "Strada Băile Figa", postalCode: "425100", addressRegion: "Bistrița-Năsăud", addressCountry: "RO" },
  geo: { "@type": "GeoCoordinates", latitude: 47.164053, longitude: 24.207428 },
  checkinTime: "12:00",
  checkoutTime: "10:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${sans.variable} ${script.variable}`}>
      <body>
        <noscript>
          <style>{`[data-r]{opacity:1!important;transform:none!important;clip-path:none!important}[data-curtain]{display:none}`}</style>
        </noscript>
        <a className="skip" href="#continut">Sari la conținut</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
        <SmoothScroll />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
