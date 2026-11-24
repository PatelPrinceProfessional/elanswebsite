import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--odido.html?raw";

export const Route = createFileRoute("/werk/odido")({
  head: () => ({ meta: [
  {
    "title": "Odido — Telecom Mobile Architecture — elansinfotech"
  },
  {
    "name": "description",
    "content": "High-throughput mobile application architecture, subscriber self-service APIs and edge streaming services for Odido."
  },
  {
    "property": "og:title",
    "content": "Odido — Telecom Mobile Architecture — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "High-throughput mobile application architecture, subscriber self-service APIs and edge streaming services for Odido."
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
