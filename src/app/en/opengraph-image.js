import { renderOg, ogSize } from "@/lib/og";
import { content } from "@/content/site";

export const alt = content.en.seo.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg("en");
}
