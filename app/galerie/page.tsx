import { pageMeta } from "@/lib/seo";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import PhoneBand from "@/components/PhoneBand";
import { breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Galerie foto Băile Figa | Hotel, cabane, căsuțe și stațiune",
  description: "Poze de la Hotel Select, Cabanele Panoramic VIP, Căsuțele Sebastian și din stațiunea Băile Figa: camere, piscine, tobogane și peisaje.",
  path: "/galerie",
  og: "galerie",
});

export default function Galerie() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Acasă", path: "/" }, { name: "Galerie", path: "/galerie" }])} />
      <PageHero crumbs={[{ name: "Acasă", path: "/" }, { name: "Galerie", path: "/galerie" }]} title="Galerie" image="dron-apus" alt="Vedere din dronă asupra stațiunii la apus" short />
      <section className="sect wrap"><Gallery /></section>
      <PhoneBand />
    </>
  );
}
