import { SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-x-2">
          <h3 className="font-inter">Built with:</h3>
          <ul className="flex items-center gap-x-2 text-sm dark:text-zinc-600 text-zinc-400 md:mt-0 mt-3">
            <li>
              <a
                href="https://nextjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
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
                className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
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
                className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
              >
                <SiVercel className="w-5 h-5" />
                Vercel
              </a>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <div className="mb-4 md:mb-0">&copy; 2024 Aleff Espinosa Córdova.</div>
        </div>
      </div>
    </footer>
  );
}

