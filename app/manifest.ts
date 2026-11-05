import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Băile Figa Cazare",
    short_name: "Băile Figa",
    description: "Hotel, cabane și căsuțe la Băile Figa, la 3 km de Beclean.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0a2a3b",
    lang: "ro",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
