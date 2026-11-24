import { Site } from "@/components/Site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en");

export default function HomeEn() {
  return <Site locale="en" />;
}
