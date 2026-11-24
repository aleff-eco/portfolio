import { Site } from "@/components/Site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("es");

export default function Home() {
  return <Site locale="es" />;
}
