import { content } from "@/content/site";
import { getGithubStats } from "@/lib/github";
import { buildJsonLd } from "@/lib/seo";
import { About } from "./About";
import { Career } from "./Career";
import { Contact } from "./Contact";
import { ContactFab } from "./ContactFab";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { WhyMe } from "./WhyMe";

export async function Site({ locale }) {
  const t = content[locale];
  const github = await getGithubStats();
  const p = t.projects;
  const projects = p.items.map((item) => ({ ...item, role: p.roles[item.role], alt: p.alt(item.name), line: p.lines[item.key] }));

  return (
    <div lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }} />
      <Header t={t} stars={github.stars} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <WhyMe t={t} />
        <Skills t={t} />
        <Projects title={p.title} more={p.more} less={p.less} items={projects} />
        <Career c={t.career} />
        <Contact c={t.contact} />
      </main>
      <Footer t={t} />
      <ContactFab label={t.hero.cta} />
    </div>
  );
}
