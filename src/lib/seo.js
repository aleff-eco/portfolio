import { SITE_URL, LINKS, certs, content } from "@/content/site";

const languages = { "es-MX": "/", en: "/en", "x-default": "/" };

export function buildMetadata(locale) {
  const t = content[locale];
  return {
    title: { absolute: t.seo.title },
    description: t.seo.description,
    alternates: { canonical: t.path, languages },
    openGraph: {
      type: "profile",
      url: t.path,
      siteName: "Aleff Espinosa",
      locale: t.ogLocale,
      alternateLocale: [locale === "es" ? content.en.ogLocale : content.es.ogLocale],
      title: t.seo.ogTitle,
      description: t.seo.ogDescription,
      firstName: "Aleff",
      lastName: "Espinosa Córdova",
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.ogTitle,
      description: t.seo.ogDescription,
    },
  };
}

export function buildJsonLd(locale) {
  const t = content[locale];
  const url = `${SITE_URL}${t.path === "/" ? "/" : t.path}`;
  const person = `${SITE_URL}/#person`;
  const inLanguage = locale === "es" ? "es-MX" : "en";

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": person,
      name: "Aleff Espinosa Córdova",
      givenName: "Aleff",
      familyName: "Espinosa Córdova",
      jobTitle: t.seo.jobTitle,
      description: t.seo.personDescription,
      url: SITE_URL,
      email: `mailto:${LINKS.email}`,
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tuxtla Gutiérrez",
        addressRegion: "Chiapas",
        addressCountry: "MX",
      },
      knowsLanguage: ["es", "en"],
      knowsAbout: [
        "Amazon Web Services",
        "DevOps",
        "CI/CD",
        "GitHub Actions",
        "Docker",
        "Software architecture",
        "Laravel",
        "FastAPI",
        "Node.js",
        "Next.js",
        "Flutter",
        "React Native",
        "MySQL",
        "PostgreSQL",
        "Cybersecurity",
      ],
      sameAs: [LINKS.github, LINKS.linkedin],
      worksFor: { "@type": "Organization", name: "UNINNOVA — Universidad del País Innova" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Politécnica de Chiapas",
        url: "https://www.upchiapas.edu.mx/",
      },
      hasCredential: certs.map((cert) => ({
        "@type": "EducationalOccupationalCredential",
        name: `${cert.provider} — ${cert.name}`,
        credentialCategory: "badge",
        dateCreated: cert.year,
        image: `${SITE_URL}${cert.img}`,
        recognizedBy: { "@type": "Organization", name: cert.provider },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Aleff Espinosa · Cloud & DevOps",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: LINKS.email,
      founder: { "@id": person },
      areaServed: [{ "@type": "Country", name: "México" }, "Remote"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tuxtla Gutiérrez",
        addressRegion: "Chiapas",
        addressCountry: "MX",
      },
      serviceType: t.seo.services,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Aleff Espinosa",
      url: SITE_URL,
      inLanguage: ["es-MX", "en"],
      author: { "@id": person },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${url}#profilepage`,
      url,
      name: t.seo.title,
      inLanguage,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": person },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: "México API",
      url: LINKS.mexicoApi,
      codeRepository: `${LINKS.github}/mexico-api`,
      programmingLanguage: "JavaScript",
      author: { "@id": person },
    },
  ];
}
