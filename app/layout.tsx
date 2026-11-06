import type { Metadata, Viewport } from "next";
import { Great_Vibes, Host_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { businessLd, pageMeta } from "@/lib/seo";
import { PUBLIC_URL } from "@/lib/site";
import "./globals.css";

const sans = Host_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const script = Great_Vibes({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  ...pageMeta({
    title: "Cazare Băile Figa | Hotel, cabane și căsuțe la 3 km de Beclean",
    description: "Cazare la Băile Figa: Hotel Select, Cabane Panoramic VIP și Căsuțe Sebastian, de la 250 lei pe noapte, aproape de Aqualand și terapiile saline. Rezervări la 0743 092 226.",
    path: "/",
    og: "home",
  }),
  applicationName: "Băile Figa Cazare",
  formatDetection: { telephone: true, address: false },
};

export const viewport: Viewport = { themeColor: "#0A2A3B", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${sans.variable} ${script.variable}`}>
      <body>
        <noscript>
          <style>{`[data-r]{opacity:1!important;transform:none!important;clip-path:none!important}[data-curtain]{display:none}`}</style>
        </noscript>
        <a className="skip" href="#continut">Sari la conținut</a>
        <JsonLd data={businessLd()} />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
