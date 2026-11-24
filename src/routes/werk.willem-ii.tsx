import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--willem-ii.html?raw";

export const Route = createFileRoute("/werk/willem-ii")({
  head: () => ({ meta: [
  {
    "title": "Willem II — Sports Intelligence AI — elansinfotech"
  },
  {
    "name": "description",
    "content": "Real-time athletic performance analytics, player biometric tracking and predictive machine learning models for Willem II."
  },
  {
    "property": "og:title",
    "content": "Willem II — Sports Intelligence AI — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Real-time athletic performance analytics, player biometric tracking and predictive machine learning models for Willem II."
  },
  {
    "property": "og:type",
    "content": "website"
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  }
] }),
  component: Page,
});

function Page() { return <ReferencePage markup={markup} />; }
