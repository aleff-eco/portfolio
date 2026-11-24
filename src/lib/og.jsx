import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { content } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

const font = (pkg, file) => readFile(join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

const C = {
  bg: "#eef1f5",
  paper: "#fafcfe",
  ink: "#151d2a",
  ink2: "#4e5662",
  hair: "#c9ced5",
  blue: "#2b439d",
  blueHi: "#4461be",
  blueDeep: "#13236e",
  cyan: "#0da2c6",
  inkHi: "#3a4352",
};

function Chevrons({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <path d="M115 125 L20 200 L115 275" fill="none" stroke={C.cyan} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M285 125 L380 200 L285 275" fill="none" stroke={C.cyan} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export async function renderOg(locale) {
  const t = content[locale];
  const [sora800, sora600, oswald600] = await Promise.all([
    font("sora", "sora-latin-800-normal.woff"),
    font("sora", "sora-latin-600-normal.woff"),
    font("oswald", "oswald-latin-600-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", background: C.bg, color: C.ink, fontFamily: "Sora" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: `linear-gradient(90deg, ${C.hair} 1px, transparent 1px)`,
            backgroundSize: "100px 100%",
            opacity: 0.55,
          }}
        />
        <div style={{ position: "absolute", left: 72, top: 64, bottom: 60, width: 640, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Oswald", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", color: C.ink2 }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, background: C.blue, boxShadow: `0 0 0 6px rgba(43,67,157,.2)` }} />
            Tech Lead · Cloud &amp; DevOps
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", fontWeight: 800, fontSize: 118, letterSpacing: -5, lineHeight: 0.92 }}>
              <span>Aleff</span>
              <span>Espinosa.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 30, fontWeight: 600, fontSize: 36, letterSpacing: -1, lineHeight: 1.2 }}>
              <span>{t.why.titleA}</span>
              <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", color: C.blue }}>
                <span>{t.why.titleB}</span>
                <div style={{ height: 5, marginTop: 4, borderRadius: 999, background: C.cyan }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", fontFamily: "Oswald", fontSize: 24, letterSpacing: 2, textTransform: "uppercase" }}>devaleff.com</div>
        </div>
        <div style={{ position: "absolute", left: 700, top: 95, width: 440, height: 440, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 26,
              top: 26,
              width: 388,
              height: 388,
              borderRadius: 999,
              backgroundImage: `radial-gradient(circle at 34% 28%, ${C.blueHi}, ${C.blue} 46%, ${C.blueDeep})`,
            }}
          />
          <div style={{ position: "absolute", left: 0, top: 0, width: 440, height: 440, borderRadius: 999, border: `3px dashed ${C.cyan}` }} />
          <div style={{ position: "absolute", right: -12, top: 208, width: 24, height: 24, borderRadius: 999, background: C.cyan }} />
          <div
            style={{
              position: "absolute",
              left: 119,
              top: 119,
              width: 202,
              height: 202,
              borderRadius: 999,
              background: C.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Chevrons size={124} />
          </div>
          <div
            style={{
              position: "absolute",
              left: -26,
              bottom: 9,
              width: 97,
              height: 97,
              borderRadius: 999,
              backgroundImage: `radial-gradient(circle at 34% 28%, ${C.inkHi}, ${C.ink} 55%)`,
            }}
          />
          <div style={{ position: "absolute", right: 35, top: 0, width: 40, height: 40, borderRadius: 999, background: C.cyan }} />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Sora", data: sora800, weight: 800, style: "normal" },
        { name: "Sora", data: sora600, weight: 600, style: "normal" },
        { name: "Oswald", data: oswald600, weight: 600, style: "normal" },
      ],
    },
  );
}
