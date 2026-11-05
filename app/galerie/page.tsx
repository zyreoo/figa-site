import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import PhoneBand from "@/components/PhoneBand";

export const metadata: Metadata = {
  title: "Galerie foto | Băile Figa Cazare",
  description: "Poze de la Hotel Select, Cabanele Panoramic VIP, Căsuțele Sebastian și din stațiunea Băile Figa.",
};

export default function Galerie() {
  return (
    <>
      <PageHero title="Galerie" image="dron-apus" alt="Vedere din dronă asupra stațiunii la apus" short />
      <section className="sect wrap"><Gallery /></section>
      <PhoneBand />
    </>
  );
}
