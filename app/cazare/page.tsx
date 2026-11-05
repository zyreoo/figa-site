import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { PhotoReveal, Reveal, Words } from "@/components/Motion";
import PageHero from "@/components/PageHero";
import PhoneBand from "@/components/PhoneBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/seo";
import { FAQ, STAYS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Cazare la Băile Figa | Hotel, cabane și căsuțe, de la 250 lei",
  description: "Compară Hotel Select, Cabanele Panoramic VIP și Căsuțele Sebastian de la Băile Figa: preț, capacitate și locație. Vouchere de vacanță acceptate.",
  path: "/cazare",
  og: "cazare",
});

export default function Cazare() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Acasă", path: "/" }, { name: "Cazare", path: "/cazare" }])} />
      <JsonLd data={faqLd()} />
      <PageHero crumbs={[{ name: "Acasă", path: "/" }, { name: "Cazare", path: "/cazare" }]} title="Cazare la Băile Figa" sub="Trei variante, la câțiva pași de stațiune. Acceptăm vouchere de vacanță." image="pan-dron" alt="Vedere de sus asupra cabanelor Panoramic VIP" short />
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
          <div className="cmp-m">
            {STAYS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} className="cmp-c">
                <h3><Link href={`/cazare/${s.slug}`}>{s.name}</Link></h3>
                <dl>
                  <div><dt>Preț</dt><dd>{s.price} {s.priceNote}</dd></div>
                  <div><dt>Capacitate</dt><dd>{s.compare.capacity}</dd></div>
                  <div><dt>Potrivit pentru</dt><dd>{s.compare.bestFor}</dd></div>
                  <div><dt>Locație</dt><dd>{s.compare.where}</dd></div>
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="sect wrap" aria-labelledby="intrebari">
        <Words id="intrebari" text="Întrebări frecvente" className="h-l mb" />
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p className="mute">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <PhoneBand />
    </>
  );
}
