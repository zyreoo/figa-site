import Link from "next/link";
import { STAYS } from "@/lib/site";
import { Reveal, Words } from "./Motion";
import Photo from "./Photo";

export default function Others({ current }: { current: string }) {
  return (
    <section className="sect wrap">
      <Words text="Alte variante de cazare" className="h-l mb" />
      <div className="others">
        {STAYS.filter((s) => s.slug !== current).map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.08}>
            <Link className="other" href={`/cazare/${s.slug}`}>
              <span className="other-i">
                <Photo name={s.card.image} alt={s.card.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </span>
              <span className="other-t">
                <strong>{s.name}</strong>
                <span>{s.price} pe noapte</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
