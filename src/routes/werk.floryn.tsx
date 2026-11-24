import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--floryn.html?raw";

export const Route = createFileRoute("/werk/floryn")({
  head: () => ({ meta: [
  {
    "title": "Floryn — FinTech Lending Engine — elansinfotech"
  },
  {
    "name": "description",
    "content": "Low-latency automated business lending pipeline, real-time risk scoring engine and secure credit ledger systems for Floryn."
  },
  {
    "property": "og:title",
    "content": "Floryn — FinTech Lending Engine — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Low-latency automated business lending pipeline, real-time risk scoring engine and secure credit ledger systems for Floryn."
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
