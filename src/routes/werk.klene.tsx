import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--klene.html?raw";

export const Route = createFileRoute("/werk/klene")({
  head: () => ({ meta: [
  {
    "title": "Klene — Supply Chain AI Platform — elansinfotech"
  },
  {
    "name": "description",
    "content": "Automated industrial supply chain prediction platform, ERP cloud integration and automated inventory ledger for Klene."
  },
  {
    "property": "og:title",
    "content": "Klene — Supply Chain AI Platform — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Automated industrial supply chain prediction platform, ERP cloud integration and automated inventory ledger for Klene."
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
