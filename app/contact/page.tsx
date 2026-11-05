import { pageMeta } from "@/lib/seo";
import { IconArrow } from "@/components/Icons";
import { PhotoReveal, Reveal, Words } from "@/components/Motion";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import PhoneBand from "@/components/PhoneBand";
import { breadcrumbLd } from "@/lib/seo";
import { MAP } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact și rezervări Băile Figa Cazare | 0743 092 226",
  description: "Rezervări la 0743 092 226 sau 0759 021 090. Strada Băile Figa, Bistrița-Năsăud, la mai puțin de 3 km de Beclean. Check-in 12:00, check-out 10:00.",
  path: "/contact",
  og: "contact",
});

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Acasă", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero crumbs={[{ name: "Acasă", path: "/" }, { name: "Contact", path: "/contact" }]} title="Contact" image="hotel-front" alt="Hotel Select seara" short position="50% 40%" />
      <PhoneBand />
      <section className="sect wrap">
        <div className="split mb-l">
          <div>
            <Words text="Recepția" className="h-xl" />
            <Reveal delay={0.1}><p className="prose mute mt">Recepția se află în Satul de vacanță Băile Figa.</p></Reveal>
          </div>
          <PhotoReveal className="sp" name="det-receptie" alt="Firmă de lemn cu inscripția Recepție, cu flori roz în față" sizes="(max-width: 860px) 100vw, 50vw" />
        </div>
        <div className="two">
          <Reveal>
            <h2 className="h-l">Unde suntem</h2>
            <p className="prose mute mt">Strada Băile Figa, Bistrița-Năsăud, 425100. La mai puțin de 3 km de Beclean.<br />GPS: 47.164053, 24.207428</p>
            <a className="btn btn-ink mt-b" href={MAP}>Deschide pe hartă <IconArrow /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-l">Cum plătești</h2>
            <ul className="list one mt"><li>Cash</li><li>Virament bancar</li><li>Vouchere de vacanță</li><li>Card de vacanță</li></ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
