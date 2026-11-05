import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { PhotoReveal, Reveal, Words } from "@/components/Motion";
import PageHero from "@/components/PageHero";
import PhoneBand from "@/components/PhoneBand";
import { STAYS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cazare la Băile Figa | Hotel, cabane și căsuțe",
  description: "Compară Hotel Select, Cabanele Panoramic VIP și Căsuțele Sebastian: preț, capacitate și distanță față de stațiune.",
};

export default function Cazare() {
  return (
    <>
      <PageHero title="Cazare" sub="Trei variante, la câțiva pași de stațiune. Acceptăm vouchere de vacanță." image="pan-dron" alt="Vedere de sus asupra cabanelor Panoramic VIP" short />
      <section className="sect wrap">
        <div className="rows">
          {STAYS.map((s, i) => (
            <article className={`row${i % 2 ? " flip" : ""}`} key={s.slug}>
              <PhotoReveal className="row-p" name={s.card.image} alt={s.card.alt} sizes="(max-width: 860px) 100vw, 55vw" />
              <div>
                <Words as="h2" text={s.name} className="h-l" />
                <Reveal delay={0.1}>
                  <p className="row-price">{s.price} <span>{s.priceNote}</span></p>
                  <p className="prose mute">{s.lead}</p>
                  <Link className="btn btn-ink" href={`/cazare/${s.slug}`}>Vezi detalii <IconArrow /></Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sect bg-soft">
        <div className="wrap">
          <Words text="Pe scurt" className="h-l mb" />
          <Reveal className="cmp-w">
            <table className="cmp">
              <thead><tr><th scope="col"></th>{STAYS.map((s) => <th scope="col" key={s.slug}><Link href={`/cazare/${s.slug}`}>{s.name}</Link></th>)}</tr></thead>
              <tbody>
                <tr><th scope="row">Preț</th>{STAYS.map((s) => <td key={s.slug}>{s.price} {s.priceNote}</td>)}</tr>
                <tr><th scope="row">Capacitate</th>{STAYS.map((s) => <td key={s.slug}>{s.compare.capacity}</td>)}</tr>
                <tr><th scope="row">Potrivit pentru</th>{STAYS.map((s) => <td key={s.slug}>{s.compare.bestFor}</td>)}</tr>
                <tr><th scope="row">Locație</th>{STAYS.map((s) => <td key={s.slug}>{s.compare.where}</td>)}</tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <PhoneBand />
    </>
  );
}
