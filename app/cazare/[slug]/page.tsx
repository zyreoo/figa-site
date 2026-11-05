import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMeta, stayLd } from "@/lib/seo";
import { notFound } from "next/navigation";
import EnterScroll from "@/components/EnterScroll";
import { PhotoReveal, Reveal, Words } from "@/components/Motion";
import Others from "@/components/Others";
import PageHero from "@/components/PageHero";
import PhoneBand from "@/components/PhoneBand";
import Photo from "@/components/Photo";
import { ROOMS, STAYS, type Slug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return STAYS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stay = STAYS.find((s) => s.slug === slug);
  if (!stay) return {};
  return pageMeta({ title: stay.title, description: stay.description, path: `/cazare/${stay.slug}`, og: stay.slug });
}

const SPOTS = [
  { left: "27%", top: "37%", title: "Cabană", note: "până la 12 persoane" },
  { left: "73%", top: "37%", title: "Cabană", note: "până la 12 persoane" },
  { left: "50%", top: "70%", title: "Foișor", note: "cu masă lungă" },
  { left: "72%", top: "73%", title: "Vatră de foc" },
];

const LEVELS = [
  { t: "Demisol", d: "Living spațios și bucătărie complet utilată: cafetieră, plită electrică, frigider, ceainic." },
  { t: "Parter", d: "Un dormitor matrimonial, unul pentru copii cu pat supraetajat și 2 băi." },
  { t: "Etaj", d: "2 dormitoare, fiecare cu baia lui." },
];

function Middle({ slug }: { slug: Slug }) {
  if (slug === "hotel-select") {
    return (
      <section className="sect bg-soft">
        <div className="wrap">
          <div className="head">
            <Words text="Camerele" className="h-xl" />
            <Reveal><p className="mute">300 lei pe noapte. Rezervările se fac telefonic.</p></Reveal>
          </div>
          <div className="rooms">
            {ROOMS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 4) * 0.06}>
                <article className="room">
                  <span className="room-i"><Photo name={r.image} alt={r.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" /></span>
                  <h3>{r.name}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (slug === "cabane-panoramic") {
    return (
      <>
        <section className="sect wrap">
          <Words text="Curtea, văzută de sus" className="h-xl mb" />
          <Reveal className="spots">
            <Photo name="pan-dron" alt="Vedere de sus: două cabane, curte pavată și foișorul octogonal" sizes="100vw" />
            {SPOTS.map((s, i) => (
              <span className="spot" key={i} style={{ left: s.left, top: s.top }}>
                <i aria-hidden="true" />
                <b>{s.title}</b>
                {s.note ? <small>{s.note}</small> : null}
              </span>
            ))}
          </Reveal>
        </section>
        <section className="sect bg-soft">
          <div className="wrap">
            <Words text="Trei niveluri, o singură cabană" className="h-xl mb" />
            <div className="levels">
              {LEVELS.map((l, i) => (
                <Reveal key={l.t} delay={i * 0.08}>
                  <article className="level"><h3>{l.t}</h3><p className="mute">{l.d}</p></article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <section className="sect bg-soft">
      <div className="wrap split">
        <div>
          <Words text="Bucătărie de vară și grătar" className="h-l" />
          <Reveal delay={0.1}><p className="prose mute mt">Bucătăria de afară are plită electrică dublă și cuptor cu microunde, pentru micul dejun. Ai grătar și foișoare, iar firma de catering poate livra mâncare, inclusiv pizza.</p></Reveal>
        </div>
        <PhotoReveal className="sp" name="cas-mese" alt="Mese de lemn sub un acoperiș, lângă căsuțe" sizes="(max-width: 860px) 100vw, 50vw" />
      </div>
    </section>
  );
}

export default async function StayPage({ params }: Props) {
  const { slug } = await params;
  const stay = STAYS.find((s) => s.slug === slug);
  if (!stay) notFound();
  const crumbs = [{ name: "Acasă", path: "/" }, { name: "Cazare", path: "/cazare" }, { name: stay.name, path: `/cazare/${stay.slug}` }];
  return (
    <>
      <JsonLd data={stayLd(stay)} />
      <JsonLd data={breadcrumbLd(crumbs)} />
      <PageHero crumbs={crumbs} title={stay.name} sub={stay.sub} image={stay.hero} alt={stay.heroAlt} />
      <section className="sect wrap">
        <div className="facts">
          <Reveal><p className="label">Pe scurt</p></Reveal>
          <div>
            <Reveal><p className="lead">{stay.lead}</p></Reveal>
            <Reveal delay={0.1}><p className="prose mute mt">{stay.prose}</p></Reveal>
          </div>
        </div>
        <div className="fnum">
          {stay.numbers.map((n, i) => (
            <Reveal key={n.value} delay={i * 0.07}><b>{n.value}</b><span>{n.note}</span></Reveal>
          ))}
        </div>
      </section>
      <EnterScroll stay={stay} />
      <Middle slug={stay.slug} />
      <section className="sect wrap">
        <Words text="Ce găsești aici" className="h-l mb" />
        <Reveal><ul className="list">{stay.amenities.map((a) => <li key={a}>{a}</li>)}</ul></Reveal>
      </section>
      <section className="wrap pb">
        <div className="gal">
          {stay.gallery.map((g) => (
            <PhotoReveal key={g.image} className={g.size} name={g.image} alt={g.alt} sizes="(max-width: 640px) 100vw, 60vw" />
          ))}
        </div>
      </section>
      <PhoneBand title={`Rezervări pentru ${stay.name}, la telefon.`} />
      <Others current={stay.slug} />
    </>
  );
}
