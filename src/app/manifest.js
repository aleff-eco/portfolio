export default function manifest() {
  return {
    name: "Aleff Espinosa — Cloud & DevOps · Arquitecto de Software",
    short_name: "Aleff",
    description: "Portafolio de Aleff Espinosa Córdova, Cloud & DevOps Engineer y arquitecto de software.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef1f5",
    theme_color: "#2b439d",
    lang: "es-MX",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
