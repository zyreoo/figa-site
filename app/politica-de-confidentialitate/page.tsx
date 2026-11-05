import { pageMeta } from "@/lib/seo";
import { PHONE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Politica de confidențialitate | Băile Figa Cazare",
  description: "Ce date prelucrează site-ul Băile Figa Cazare și ce drepturi ai.",
  path: "/politica-de-confidentialitate",
  og: "contact",
});

export default function Politica() {
  return (
    <section className="legal wrap">
      <h1 className="h-l">Politica de confidențialitate</h1>
      <div className="prose legal-t">
        <h2>Cine suntem</h2>
        <p>Site-ul este operat de Turism Expert Băile Figa SRL, CUI RO47387788, J12/7545/29.12.2022, Strada Băile Figa, Bistrița-Năsăud.</p>
        <h2>Ce date colectează site-ul</h2>
        <p>Site-ul nu are formulare și nu cere date personale. Rezervările se fac la telefon. Când ne suni, folosim numărul tău și datele pe care ni le spui doar pentru a gestiona rezervarea.</p>
        <h2>Cookie-uri și analiză</h2>
        <p>Site-ul nu folosește cookie-uri de marketing sau de analiză.</p>
        <h2>Găzduire</h2>
        <p>Site-ul este găzduit de Vercel, care poate păstra temporar jurnale tehnice ale accesărilor, de exemplu adresa IP, pentru funcționarea și securitatea serviciului.</p>
        <h2>Linkuri externe</h2>
        <p>Când deschizi Google Maps sau alte site-uri legate de aici, se aplică politicile acelor site-uri.</p>
        <h2>Drepturile tale</h2>
        <p>Conform GDPR, poți cere accesul la datele tale, corectarea sau ștergerea lor și te poți adresa ANSPDCP. Ne poți contacta la {PHONE.label} sau la bailefigacazare@gmail.com.</p>
      </div>
    </section>
  );
}
