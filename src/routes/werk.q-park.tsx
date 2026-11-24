import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--q-park.html?raw";

export const Route = createFileRoute("/werk/q-park")({
  head: () => ({ meta: [
  {
    "title": "Q-Park — Smart Mobility Cloud API — elansinfotech"
  },
  {
    "name": "description",
    "content": "Automated parking mobility API, real-time sensor processing, license plate recognition integration and smart gate cloud management for Q-Park."
  },
  {
    "property": "og:title",
    "content": "Q-Park — Smart Mobility Cloud API — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Automated parking mobility API, real-time sensor processing, license plate recognition integration and smart gate cloud management for Q-Park."
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
