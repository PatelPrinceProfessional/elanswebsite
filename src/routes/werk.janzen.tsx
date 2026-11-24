import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--janzen.html?raw";

export const Route = createFileRoute("/werk/janzen")({
  head: () => ({ meta: [
  {
    "title": "Janzen — Omni-Channel Commerce — elansinfotech"
  },
  {
    "name": "description",
    "content": "Distributed omni-channel commerce portal, B2B wholesale API and automated order orchestration architecture for Janzen."
  },
  {
    "property": "og:title",
    "content": "Janzen — Omni-Channel Commerce — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Distributed omni-channel commerce portal, B2B wholesale API and automated order orchestration architecture for Janzen."
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
