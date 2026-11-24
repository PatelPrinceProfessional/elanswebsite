import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--phonehouse.html?raw";

export const Route = createFileRoute("/werk/phonehouse")({
  head: () => ({ meta: [
  {
    "title": "Phonehouse — Retail Cloud Operations — elansinfotech"
  },
  {
    "name": "description",
    "content": "Telecom retail operations portal, secure subscriber activation APIs and POS cloud integration for Phonehouse."
  },
  {
    "property": "og:title",
    "content": "Phonehouse — Retail Cloud Operations — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Telecom retail operations portal, secure subscriber activation APIs and POS cloud integration for Phonehouse."
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
