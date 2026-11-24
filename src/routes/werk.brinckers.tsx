import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--brinckers.html?raw";

export const Route = createFileRoute("/werk/brinckers")({
  head: () => ({ meta: [
  {
    "title": "Brinckers — IoT E-Bike Telemetry — elansinfotech"
  },
  {
    "name": "description",
    "content": "Connected IoT telemetry pipeline, real-time vehicle diagnostics API and mobile companion application for Brinckers."
  },
  {
    "property": "og:title",
    "content": "Brinckers — IoT E-Bike Telemetry — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Connected IoT telemetry pipeline, real-time vehicle diagnostics API and mobile companion application for Brinckers."
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
