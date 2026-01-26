import { SiNextdotjs, SiTailwindcss, SiVercel, SiReact } from 'react-icons/si';
import { useTranslations } from "../hooks/useTranslations";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-x-2">
          <h3 className="font-semibold">{t.footer.madeWith}</h3>

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm mt-3 md:mt-0 text-white/70">
            <li>
              <a
                href="https://reactjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white hover:underline transition-colors"
              >
                <SiReact className="w-5 h-5" />
                React
              </a>
            </li>

            <li>
              <a
                href="https://nextjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white hover:underline transition-colors"
              >
                <SiNextdotjs className="w-5 h-5" />
                Next.js
              </a>
            </li>

            <li>
              <a
                href="https://tailwindcss.com"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white hover:underline transition-colors"
              >
                <SiTailwindcss className="w-5 h-5" />
                Tailwind CSS
              </a>
            </li>

            <li>
              <a
                href="https://vercel.com"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white hover:underline transition-colors"
              >
                <SiVercel className="w-5 h-5" />
                Vercel
              </a>
            </li>
          </ul>
        </div>

        <div className="text-right text-white/80">
          <div className="mb-0">&copy; 2024 Aleff Espinosa Córdova.</div>
        </div>
      </div>
    </footer>
  );
}
