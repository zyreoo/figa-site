import Link from "next/link";
import DayTimeline from "@/components/DayTimeline";
import HomeHero from "@/components/HomeHero";
import { IconArrow } from "@/components/Icons";
import { Parallax, PhotoReveal, Reveal, Words } from "@/components/Motion";
import PhoneBand from "@/components/PhoneBand";
import StayStack from "@/components/StayStack";
import { MAP } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="sect wrap">
        <div className="intro">
          <Reveal><p className="label">Bine ai venit</p></Reveal>
          <Reveal><p className="lead">Băile Figa e cunoscută drept „Litoralul Bistrițenilor”: 15 hectare între dealuri împădurite, cu lacuri sărate, bazine și Aqualand. Aici găsești hotel, cabane și căsuțe, chiar lângă stațiune.</p></Reveal>
        </div>
        <div className="collage">
          <PhotoReveal className="c1" name="det-gazda" alt="Recepția de la Căsuțele Sebastian, cu flori și firmă de lemn" caption="Recepția Căsuțelor Sebastian" sizes="(max-width: 760px) 100vw, 50vw" />
          <PhotoReveal className="c2" name="det-grinda" alt="Grindă de lemn cioplită la foișor" caption="Lemn cioplit la foișor" sizes="(max-width: 760px) 66vw, 42vw" delay={0.1} />
          <PhotoReveal className="c3" name="pan-foc" alt="Foc aprins în vatra de lângă foișor" caption="Vatra de foc de la cabane" sizes="(max-width: 760px) 50vw, 25vw" />
          <PhotoReveal className="c4" name="om-familie" alt="Un copil sare pe skateboard, iar o femeie citește pe canapea în curte" caption="Curtea de la cabane" sizes="(max-width: 760px) 100vw, 42vw" delay={0.08} />
          <PhotoReveal className="c5" name="det-ceaun" alt="Ceaun de fontă într-un cuptor de cărămidă" caption="Cuptor de cărămidă cu ceaun" sizes="(max-width: 760px) 50vw, 25vw" delay={0.16} />
        </div>
      </section>

      <section aria-labelledby="alege">
        <div className="wrap head">
          <Words id="alege" text="Alege unde stai" className="h-xl" />
          <Reveal><p className="mute">Hotel, cabane și căsuțe. Acceptăm vouchere de vacanță la toate. <Link className="lnk" href="/cazare">Compară variantele <IconArrow /></Link></p></Reveal>
        </div>
        <StayStack />
      </section>

      <PhoneBand />

      <section className="sect wrap" aria-labelledby="zi">
        <div className="head">
          <Words id="zi" text="O zi la Figa" className="h-xl" />
          <Reveal><p className="mute">Un exemplu de program. Accesul în complex se plătește separat de cazare, vezi <Link className="lnk" href="/ce-faci-la-figa#taxe">taxe și program</Link>.</p></Reveal>
        </div>
        <DayTimeline />
      </section>

      <section className="salt on-dark" aria-labelledby="sare">
        <div className="wrap salt-g">
          <div>
            <Reveal><p className="script salt-s">povestea locului</p></Reveal>
            <Words id="sare" text="Aici se scoate sare de peste 3.000 de ani" className="h-xl" />
            <Reveal className="prose salt-p" delay={0.15}>
              <p>Arheologii au găsit la Figa jgheaburi de lemn din epoca bronzului, folosite la exploatarea sării. E considerat unul dintre cele mai importante situri de acest fel din Europa.</p>
              <p>Azi, sarea ajunge în lacuri, în nămol și în aerul de lângă instalațiile de aerosoli salini.</p>
              <p className="small"><a href="https://agerpres.ro/cultura-media/2025/06/13/bistrita-nasaud-expozitia-milenii-de-exploatare-a-sarii-la-baile-figa-vernisata-la-capatul-a-20-de-a--1459199">Despre expoziția „Milenii de exploatare a sării”, Agerpres</a></p>
            </Reveal>
          </div>
          <div className="salt-i">
            <figure>
              <Parallax className="ph r34" name="turn" alt="Turn rotund de aerosoli salini, din crengi, cu acoperiș de țiglă" sizes="(max-width: 900px) 40vw, 18vw" />
              <figcaption>Aerosoli salini, circular</figcaption>
            </figure>
            <figure>
              <Parallax className="ph r11" name="aer" alt="Galerie de lemn cu pereți din crengi, pentru aerosoli salini" sizes="(max-width: 900px) 60vw, 26vw" />
              <figcaption>Aerosoli salini, longitudinal</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sect bg-soft" id="recenzii">
        <div className="wrap">
          <Reveal><p className="label mb-s">Excelent, în 447 de recenzii pe Google</p></Reveal>
          <div className="revs">
            <Reveal><figure className="rev-b"><blockquote>„Cazare excepțională, proprietarul foarte amabil și calm, dispus să ajute cu orice informații.”</blockquote><figcaption>Beldean Diana</figcaption></figure></Reveal>
            <Reveal delay={0.1}><figure className="rev-s"><blockquote>„O zonă frumoasă cu multe opțiuni de a petrece o zi frumoasă cu familia sau cu gașca.”</blockquote><figcaption>Serban Claudiu</figcaption></figure></Reveal>
            <Reveal delay={0.2}><figure className="rev-s"><blockquote>„Aici am avut parte de confort, liniște, relaxare. Ne vom întoarce cu siguranță!”</blockquote><figcaption>Ana Sic</figcaption></figure></Reveal>
          </div>
        </div>
      </section>

      <Parallax className="loc on-dark" name="dron-apus" alt="Vedere din dronă asupra stațiunii la apus" amount={6}>
        <div className="loc-c">
          <div>
            <Words text="Unde ne găsești" className="h-xl" />
            <p className="loc-a">Strada Băile Figa, Bistrița-Năsăud, 425100<br />La mai puțin de 3 km de Beclean</p>
          </div>
          <a className="btn btn-white" href={MAP}>Deschide pe hartă <IconArrow /></a>
        </div>
      </Parallax>
    </>
  );
}
