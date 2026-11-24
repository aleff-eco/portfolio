import { LINKS } from "@/content/site";
import { Github, LogoMark } from "./icons";
import { LangSwitch } from "./LangSwitch";
import { Nav } from "./Nav";
import { ThemeToggle } from "./ThemeToggle";

const LENS_MAP =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><defs><linearGradient id='r' x1='0' x2='1'><stop offset='0' stop-color='#000'/><stop offset='1' stop-color='#f00'/></linearGradient><linearGradient id='g' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='#000'/><stop offset='1' stop-color='#0f0'/></linearGradient><filter id='b' x='-20%' y='-20%' width='140%' height='140%'><feGaussianBlur stdDeviation='5'/></filter></defs><rect width='100' height='100' fill='url(#r)'/><rect width='100' height='100' fill='url(#g)' style='mix-blend-mode:screen'/><rect x='6' y='16' width='88' height='68' rx='30' fill='#808080' filter='url(#b)'/></svg>",
  );

export function Header({ t, stars }) {
  return (
    <header className="hdr">
      <svg className="sr-only" aria-hidden="true" focusable="false">
        <filter id="liquid-glass" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feImage href={LENS_MAP} preserveAspectRatio="none" result="lens" />
          <feDisplacementMap in="SourceGraphic" in2="lens" scale="-60" xChannelSelector="R" yChannelSelector="G" result="bent" />
          <feGaussianBlur in="bent" stdDeviation="0.3" />
        </filter>
      </svg>
      <div className="wrap hdr-in">
        <a href="#inicio" aria-label={t.ui.home} className="hdr-brand">
          <LogoMark className="hdr-logo" />
        </a>
        <Nav items={t.nav} label={t.ui.navLabel} menuLabel={t.ui.menuLabel} />
        <div className="hdr-actions">
          <a href={LINKS.github} className="chip3d hide-xs" aria-label={t.ui.githubLabel(stars)} target="_blank" rel="noopener noreferrer">
            <Github />
            <span className="caps">{stars}★</span>
          </a>
          <LangSwitch locale={t.locale} label={t.other.label} />
          <ThemeToggle label={t.ui.themeLabel} />
        </div>
      </div>
    </header>
  );
}
