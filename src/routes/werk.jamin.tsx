import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--jamin.html?raw";

export const Route = createFileRoute("/werk/jamin")({
  head: () => ({ meta: [
  {
    "title": "Jamin — Retail POS & Inventory Sync — elansinfotech"
  },
  {
    "name": "description",
    "content": "Automated multi-channel retail inventory engine, edge POS synchronization and real-time supply chain telemetry for Jamin."
  },
  {
    "property": "og:title",
    "content": "Jamin — Retail POS & Inventory Sync — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Automated multi-channel retail inventory engine, edge POS synchronization and real-time supply chain telemetry for Jamin."
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
