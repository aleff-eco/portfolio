const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function Icon({ size = 16, width = 2.4, d }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={width} {...base}>
      <path d={d} />
    </svg>
  );
}

export const ArrowRight = (p) => <Icon d="M5 12h14M13 6l6 6-6 6" {...p} />;
export const ArrowDown = (p) => <Icon d="M12 5v14M6 13l6 6 6-6" {...p} />;
export const ArrowUp = (p) => <Icon d="M12 19V5M6 11l6-6 6 6" {...p} />;
export const Plus = (p) => <Icon d="M12 5v14M5 12h14" {...p} />;
export const Minus = (p) => <Icon d="M5 12h14" {...p} />;
export const Pause = (p) => <Icon d="M9 6v12M15 6v12" {...p} />;
export const Play = (p) => <Icon d="M8 5.5v13l11-6.5z" {...p} />;
export const ChevronDown = (p) => <Icon d="M6 9l6 6 6-6" {...p} />;
export const Close = (p) => <Icon d="M6 6l12 12M18 6L6 18" {...p} />;
export const Moon = (p) => <Icon width={1.8} size={20} d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" {...p} />;
export const Sun = (p) => (
  <Icon width={1.8} size={20} d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" {...p} />
);
export const Github = (p) => (
  <Icon
    width={1.8}
    size={18}
    d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
    {...p}
  />
);

export const Rocket = (p) => (
  <Icon
    width={1.8}
    size={20}
    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
    {...p}
  />
);
export const Compass = (p) => <Icon width={1.8} size={20} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" {...p} />;
export const Cloud = (p) => <Icon width={1.8} size={20} d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" {...p} />;
export const Buoy = (p) => (
  <Icon
    width={1.8}
    size={20}
    d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
    {...p}
  />
);

export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true">
      <path d="M115 125 L20 200 L115 275 M285 125 L380 200 L285 275 M226 92 L174 308" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Scribble({ className }) {
  return (
    <svg className={`scribble ${className ?? ""}`} aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none">
      <path pathLength="1" d="M4 14 C 60 4, 140 22, 296 8" />
    </svg>
  );
}

export function ScribbleCircle() {
  return (
    <svg className="scribble" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path pathLength="1" d="M52 6 C 22 4, 6 26, 8 50 C 10 78, 40 96, 66 90 C 92 84, 98 54, 90 32 C 82 12, 58 2, 36 10" />
    </svg>
  );
}
