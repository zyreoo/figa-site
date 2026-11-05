import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { qualities: [75, 85], formats: ["image/avif", "image/webp"], minimumCacheTTL: 2592000 },
  // Adresele de test de pe Vercel nu trebuie sa apara in Google, doar domeniul real.
  async headers() {
    return [{ source: "/:path*", has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }], headers: [{ key: "X-Robots-Tag", value: "noindex" }] }];
  },
  // Adresele de pe site-ul vechi, ca sa nu pierdem Google si reclamele.
  async redirects() {
    return [
      { source: "/cabanele-panoramic-si-sebastian-2", destination: "/cazare", permanent: true },
      { source: "/cabanele-panoramic-si-sebastian-2/hotel-select", destination: "/cazare/hotel-select", permanent: true },
      { source: "/cabanele-panoramic-si-sebastian-2/panoramic-vip", destination: "/cazare/cabane-panoramic", permanent: true },
      { source: "/cazare/panoramic-vip", destination: "/cazare/cabane-panoramic", permanent: true },
      { source: "/cabanele-panoramic-si-sebastian-2/casutele-sebastian", destination: "/cazare/casute-sebastian", permanent: true },
      { source: "/cabanele-panoramic-si-sebastian-2/casute-sebastian", destination: "/cazare/casute-sebastian", permanent: true },
      { source: "/cazare-casute-sebastian-baile-figa/casute-sebastian", destination: "/cazare/casute-sebastian", permanent: true },
      { source: "/aqualand-casute-sebastian-vacanta-ta", destination: "/ce-faci-la-figa#aqualand", permanent: true },
      { source: "/aqualand", destination: "/ce-faci-la-figa#aqualand", permanent: true },
      { source: "/spa-si-relaxare", destination: "/ce-faci-la-figa#legacy", permanent: true },
      { source: "/spa", destination: "/ce-faci-la-figa#legacy", permanent: true },
      { source: "/stiri", destination: "/", permanent: true },
      { source: "/google-reviews", destination: "/#recenzii", permanent: true },
      { source: "/festivalul-celtic", destination: "/ce-faci-la-figa", permanent: true },
      { source: "/herghelia-beclean", destination: "/ce-faci-la-figa", permanent: true },
      { source: "/baile-figa-litoralul-bistritenilor", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
