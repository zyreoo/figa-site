import type { Metadata } from "next";
import { PhotoReveal, Reveal, Words } from "@/components/Motion";
import PageHero from "@/components/PageHero";
import PhoneBand from "@/components/PhoneBand";

export const metadata: Metadata = {
  title: "Ce faci la Băile Figa | Aqualand, Legacy, apă sărată, sport",
  description: "Aqualand, Centrul Legacy, apă sărată și nămol, tenis și fotbal la Băile Figa. Taxe și program.",
};

function List({ items }: { items: string[] }) {
  return <ul className="list one">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

function Tax({ caption, rows }: { caption: string; rows: [string, string][] }) {
  return (
    <table className="tax">
      <caption>{caption}</caption>
      <tbody>{rows.map(([a, b]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td></tr>)}</tbody>
    </table>
  );
}

const SZ = "(max-width: 860px) 100vw, 50vw";

export default function CeFaci() {
  return (
    <>
      <PageHero title="Ce faci la Figa" sub="Toate sunt la câțiva pași de cazare." image="leg-sus" alt="Bazin interior cu colace galbene în Centrul Legacy" />

      <section className="sect wrap anchor" id="aqualand">
        <div className="split">
          <div><Words text="Aqualand" className="h-xl" /><Reveal delay={0.1}><List items={["Tobogan Kamikaze, de peste 10 m înălțime", "Tobogan Spirală, 70 m de bucle", "Tobogan Concurs, cu 3 benzi", "Piscină încălzită de 18 × 15 m, adâncime 0,8–1,2 m"]} /></Reveal></div>
          <PhotoReveal className="sp" name="aq-tobogane" alt="Tobogane colorate deasupra piscinei" sizes={SZ} />
        </div>
        <div className="split flip">
          <div>
            <Words text="„Marele Alb”" className="h-l" />
            <div className="fnum in">
              {[["150 m", "lungime"], ["18 m", "înălțime"], ["30 s", "de la start la final"]].map(([a, b], i) => <Reveal key={a} delay={i * 0.08}><b>{a}</b><span>{b}</span></Reveal>)}
            </div>
          </div>
          <PhotoReveal className="sp" name="aq-spirala" alt="Tobogan alb în spirală, cu dealuri în spate" sizes={SZ} />
        </div>
        <div className="split">
          <div><Words text="Ștrand și Lazy River" className="h-l" /><Reveal delay={0.1}><p className="prose mute mt">Bazine cu apă dulce, un râu leneș pe care te poți plimba cu colacul, zeci de umbrele și șezlonguri.</p></Reveal></div>
          <PhotoReveal className="sp" name="aq-rau" alt="Lazy River printre spații verzi și umbrele" sizes={SZ} />
        </div>
      </section>

      <section className="sect bg-soft anchor" id="legacy">
        <div className="wrap">
          <div className="head">
            <Words text="Centrul Legacy" className="h-xl" />
            <Reveal><p className="mute">Nu e nevoie de rezervare. Deschis tot anul.</p></Reveal>
          </div>
          <div className="gal">
            <PhotoReveal className="g8" name="leg-ext" alt="Clădirea albă a Centrului Legacy, sub cer cu nori" sizes="(max-width: 640px) 100vw, 66vw" />
            <PhotoReveal className="g4" name="leg-rotund" alt="Bazin rotund cu mozaic" sizes="(max-width: 640px) 100vw, 33vw" />
            <PhotoReveal className="g4" name="leg-receptie" alt="Recepția Centrului Legacy, cu personalul la birou" sizes="(max-width: 640px) 100vw, 33vw" />
            <PhotoReveal className="g8" name="leg-piscina" alt="Piscina interioară cu mozaic albastru" sizes="(max-width: 640px) 100vw, 66vw" />
          </div>
          <Reveal className="mt-l"><ul className="list">{["Bazine de înot, relaxare și recuperare", "Bazin cu apă sărată", "Bowling și fitness", "Sală de gimnastică", "Bibliotecă pentru copii și adulți", "Ateliere creative", "Locuri de joacă", "6.800 mp de spații verzi"].map((i) => <li key={i}>{i}</li>)}</ul></Reveal>
        </div>
      </section>

      <section className="sect wrap anchor" id="balnear">
        <div className="split">
          <div>
            <Words text="Apă sărată și nămol" className="h-xl" />
            <Reveal delay={0.1}>
              <p className="prose mute mt">Stațiunea e cunoscută pentru apa sărată și nămolul cu proprietăți asemănătoare celor de la Techirghiol. Baia balneară are un bazin de 1,7 m legat de altul mai mic, de 0,6 m, iar Lacul Cerbul ajunge la 4 m adâncime și are cea mai mare concentrație de sare din complex.</p>
              <p className="prose mute mt-s">Recomandarea stațiunii: o baie de 15–20 de minute, apoi 15 minute de odihnă afară din apă.</p>
            </Reveal>
          </div>
          <PhotoReveal className="sp" name="balnear" alt="Oameni în bazinul cu apă sărată" sizes={SZ} />
        </div>
        <div className="split flip">
          <div><Words text="Nămol și aerosoli" className="h-l" /><Reveal delay={0.1}><p className="prose mute mt">Bazinul rustic cu nămol e în aer liber, în exteriorul complexului. Instalațiile de aerosoli salini pompează microparticule din depozitul natural de sare, un efect asemănător celui dintr-o salină.</p></Reveal></div>
          <PhotoReveal className="sp" name="namol" alt="Oameni în bazinul rustic cu nămol" sizes={SZ} />
        </div>
      </section>

      <section className="sect bg-soft anchor" id="sport">
        <div className="wrap split flip">
          <div><Words text="Sport și joacă" className="h-xl" /><Reveal delay={0.1}><List items={["2 terenuri de tenis, cu rachete incluse în preț", "Teren de fotbal cu gazon sintetic", "Parc de aventură cu tiroliană", "Labirint verde din tuia", "Zonă de joacă din lemn ecologic"]} /></Reveal></div>
          <PhotoReveal className="sp" name="sport" alt="Terenuri de sport cu dealuri împădurite în spate" sizes={SZ} />
        </div>
      </section>

      <section className="sect wrap anchor" id="taxe">
        <Words text="Taxe și program" className="h-xl" />
        <Reveal><p className="mute taxe-n">Accesul în Parcul balnear și în Centrul Legacy nu este inclus în cazare și se plătește separat.</p></Reveal>
        <div className="bands" aria-label="Brățările principale">
          {[{ c: "wb-a", t: "Intrare parc", d: "20 lei luni–joi · 30 lei vineri–duminică" }, { c: "wb-b", t: "Tobogan", d: "10 lei / brățară, pentru fiecare" }, { c: "wb-c", t: "Legacy", d: "adulți 60 lei · copii 30 lei" }].map((w, i) => (
            <Reveal key={w.t} delay={i * 0.1} y={0} className={`wb ${w.c}`}><b>{w.t}</b><span>{w.d}</span></Reveal>
          ))}
        </div>
        <div className="two">
          <Reveal>
            <Tax caption="Parcul balnear" rows={[["Program", "zilnic 08:00–21:00"], ["Intrare luni–joi", "20 lei"], ["Intrare vineri–duminică", "30 lei"], ["Copii sub 7 ani", "gratuit"], ["Interiorul complexului", "20 lei"], ["Tobogan „Aqualand” sau tobogan „2”", "10 lei / brățară"], ["Teren de fotbal", "50 lei / oră"], ["Teren de tenis", "20 lei / oră"], ["Jacuzzi sau saună", "5 lei / 20 min"], ["Fitness", "5 lei / oră"]]} />
          </Reveal>
          <Reveal delay={0.1}>
            <Tax caption="Centrul Legacy" rows={[["Luni", "10:00–20:00"], ["Marți–duminică", "08:00–20:00"], ["Adulți", "60 lei"], ["Copii, 0–14 ani", "30 lei"], ["Abonament luni–vineri", "400 lei / lună"], ["Bowling", "50 lei / joc"]]} />
            <p className="prose mute mt">La tobogane ai nevoie de brățara de intrare în parc și de câte una pentru fiecare tobogan. Te rugăm să le porți la mână pe toată durata vizitei.</p>
          </Reveal>
        </div>
      </section>
      <PhoneBand title="Pentru cazare, sună-ne." />
    </>
  );
}
