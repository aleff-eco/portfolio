import { SITE_URL } from "@/content/site";

export default function sitemap() {
  const languages = { "es-MX": `${SITE_URL}/`, en: `${SITE_URL}/en` };
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${SITE_URL}/en`, lastModified, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
