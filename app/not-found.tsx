import Link from "next/link";

export default function NotFound() {
  return (
    <section className="nf wrap">
      <h1 className="h-xl">Pagina nu există</h1>
      <p className="prose mute mt">Adresa s-ar putea să se fi schimbat odată cu noul site.</p>
      <Link className="btn btn-ink mt-b" href="/">Înapoi la prima pagină</Link>
    </section>
  );
}
