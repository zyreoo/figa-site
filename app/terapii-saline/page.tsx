import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { PhotoReveal, Reveal, Words } from "@/components/Motion";
import PageHero from "@/components/PageHero";
import PhoneBand from "@/components/PhoneBand";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { STAYS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terapii saline Băile Figa | Aerosoli, camera de sare, băi sărate, nămol",
  description: "Terapii saline la Băile Figa: aerosoli salini, camera de sare, băi și plutire în apă sărată, împachetări cu nămol sapropelic și saună. Cazare aproape, la 0743 092 226.",
  path: "/terapii-saline",
  og: "terapii-saline",
});

const SZ = "(max-width: 860px) 100vw, 50vw";
const CRUMBS = [{ name: "Acasă", path: "/" }, { name: "Terapii saline", path: "/terapii-saline" }];

const THERAPIES = [
  { id: "aerosoli", title: "Aerosoli salini și camera de sare", text: "Respiri aer încărcat cu microparticule de sare, într-o cameră cu pereți din blocuri de sare. Terapia e căutată pentru căile respiratorii iritate, bronșite cronice, sinuzite și alergii de sezon.", tags: ["căi respiratorii", "copii și adulți"], image: "ts-sare", alt: "Camera de sare cu pereți din blocuri de sare și o bancă de lemn" },
  { id: "bai", title: "Băi și plutire în apă sărată", text: "Bazinele folosesc apă din izvoarele sărate. Căldura și sarea relaxează musculatura, iar densitatea apei susține corpul, așa că plutești fără efort și coloana se descarcă.", tags: ["15–20 de minute", "articulații"], image: "ts-bazin", alt: "Bazinul interior cu apă sărată, cu tavan din lemn" },
  { id: "namol", title: "Împachetări cu nămol sapropelic", text: "Nămolul terapeutic se aplică pe corp sub formă de împachetări. Împreună cu băile sărate, e folosit pentru dureri reumatice și pentru stimularea circulației periferice.", tags: ["dureri reumatice", "piele"], image: "ts-tratament", alt: "Sală de tratament cu căzi pentru proceduri" },
  { id: "relaxare", title: "Saună și relaxare", text: "Completezi ședințele cu sauna, cu sauna cu infraroșu și cu jacuzzi pe terasa de pe acoperiș, cu vedere spre dealuri.", tags: ["relaxare", "somn mai bun"], image: "ts-sauna", alt: "Saună din lemn și zonă de relaxare" },
];

const STEPS = [
  { t: "Duș înainte", d: "Cu apă dulce, fără creme sau uleiuri pe piele." },
  { t: "Intri treptat", d: "Lasă corpul să se obișnuiască cu temperatura și cu plutirea." },
  { t: "15–20 de minute", d: "Ține capul și ochii afară din apă. Ieși dacă amețești." },
  { t: "Pauză", d: "Odihnește-te la umbră cel puțin cât ai stat în apă." },
  { t: "Clătire și apă", d: "Duș cu apă dulce, apoi bea apă. Sarea deshidratează." },
];

const FOR = [
  { t: "Copii", d: "Pentru imunitate și pentru alergii respiratorii." },
  { t: "Adulți și sportivi", d: "Pentru respirație, stres și recuperare musculară." },
  { t: "Seniori", d: "Pentru dureri articulare și reumatice." },
];

const INDICATIONS = ["Reumatism degenerativ, dureri de spate, redoare articulară", "Recuperare după traumatisme sau imobilizare", "Psoriazis, unele forme de eczemă, piele uscată", "Căi respiratorii iritate, bronșite cronice", "Stres, oboseală, somn slab"];
const CONTRA = ["Hipertensiune necontrolată, boli cardiace severe", "Febră, boli în fază acută", "Răni deschise, arsuri, infecții ale pielii", "Sarcină: doar cu acordul medicului", "Afecțiuni oncologice, insuficiențe de organ"];

export default function TerapiiSaline() {
  return (
    <>
      <JsonLd data={breadcrumbLd(CRUMBS)} />
      <PageHero crumbs={CRUMBS} title="Terapii saline" sub="Aerosoli, camera de sare, băi sărate și nămol, în complexul de la Băile Figa." image="ts-ext" alt="Clădirea Terapii Saline de la Băile Figa, fațada principală" position="34% 50%" />

      <section className="sect wrap">
        <div className="intro">
          <Reveal><p className="label">Parte din complex</p></Reveal>
          <Reveal><p className="lead">La Figa, sarea e aproape de suprafață, iar izvoarele aduc apă foarte sărată. Clădirea de terapii saline adună într-un singur loc aerosolii, camera de sare, bazinul interior, sălile de tratament și saunele.</p></Reveal>
        </div>
        <div className="ts-for">
          {FOR.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <h2 className="h-m">{f.t}</h2>
              <p className="mute">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sect bg-soft" aria-labelledby="terapiile">
        <div className="wrap">
          <Words id="terapiile" text="Terapiile" className="h-xl mb" />
          {THERAPIES.map((t, i) => (
            <article id={t.id} className={`split anchor${i % 2 ? " flip" : ""}`} key={t.id}>
              <div>
                <Words as="h3" text={t.title} className="h-l" />
                <Reveal delay={0.1}>
                  <p className="prose mute mt">{t.text}</p>
                  <ul className="ts-tags">{t.tags.map((x) => <li key={x}>{x}</li>)}</ul>
                </Reveal>
              </div>
              <PhotoReveal className="sp" name={t.image} alt={t.alt} sizes={SZ} />
            </article>
          ))}
        </div>
      </section>

      <section className="sect wrap" aria-labelledby="pasi">
        <Words id="pasi" text="O baie sărată, pas cu pas" className="h-xl mb" />
        <ol className="ts-steps">
          {STEPS.map((s, i) => (
            <li key={s.t}>
              <Reveal delay={i * 0.07}>
                <span aria-hidden="true">{i + 1}</span>
                <h3>{s.t}</h3>
                <p className="mute">{s.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="sect bg-soft" aria-labelledby="pentru-cine">
        <div className="wrap">
          <Words id="pentru-cine" text="Când ajută și când e mai bine să aștepți" className="h-l mb" />
          <div className="two">
            <Reveal>
              <h3 className="h-m">Indicații frecvente</h3>
              <ul className="list one">{INDICATIONS.map((x) => <li key={x}>{x}</li>)}</ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="ts-contra">
                <h3 className="h-m">Contraindicații</h3>
                <ul className="list one">{CONTRA.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </Reveal>
          </div>
          <Reveal><p className="ts-note">Informațiile sunt generale și nu înlocuiesc un sfat medical. Întreabă medicul de familie sau medicul de recuperare înainte de o cură, mai ales dacă ai o boală cronică.</p></Reveal>
        </div>
      </section>

      <section className="sect wrap" aria-label="Fotografii">
        <div className="gal">
          <PhotoReveal className="g8" name="ts-terasa" alt="Terasa cu șezlonguri și jacuzzi" sizes="(max-width: 640px) 100vw, 66vw" />
          <PhotoReveal className="g4" name="ts-cada" alt="Cadă pentru proceduri" sizes="(max-width: 640px) 100vw, 33vw" />
          <PhotoReveal className="g4" name="ts-sare2" alt="Pereți din blocuri de sare" sizes="(max-width: 640px) 100vw, 33vw" />
          <PhotoReveal className="g8" name="ts-jacuzzi" alt="Jacuzzi cu priveliște spre dealuri" sizes="(max-width: 640px) 100vw, 66vw" />
        </div>
        <Reveal className="ts-more">
          <p className="mute">Programul și tarifele terapiilor: [de confirmat]</p>
          <Link className="lnk" href="/galerie">Vezi toate pozele <IconArrow /></Link>
        </Reveal>
      </section>

      <section className="sect bg-soft" aria-labelledby="sta">
        <div className="wrap">
          <div className="head">
            <Words id="sta" text="O cură se face câteva zile la rând" className="h-l" />
            <Reveal><p className="mute">Stai aproape de băi, la una dintre cazările noastre.</p></Reveal>
          </div>
          <div className="others three">
            {STAYS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link className="other" href={`/cazare/${s.slug}`}>
                  <span className="ts-stay"><strong>{s.name}</strong><span>{s.price} pe noapte</span></span>
                  <IconArrow />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PhoneBand title="Pentru cazare, sună-ne." />
    </>
  );
}
