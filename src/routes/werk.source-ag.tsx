import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--source-ag.html?raw";

export const Route = createFileRoute("/werk/source-ag")({
  head: () => ({ meta: [
  {
    "title": "Source.ag — Agritech AI Engine — elansinfotech"
  },
  {
    "name": "description",
    "content": "AI-powered agritech decision engine, predictive yield neural models and real-time greenhouse sensor processing for Source.ag."
  },
  {
    "property": "og:title",
    "content": "Source.ag — Agritech AI Engine — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "AI-powered agritech decision engine, predictive yield neural models and real-time greenhouse sensor processing for Source.ag."
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
