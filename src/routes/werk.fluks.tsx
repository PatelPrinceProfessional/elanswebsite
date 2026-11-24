import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--fluks.html?raw";

export const Route = createFileRoute("/werk/fluks")({
  head: () => ({ meta: [
  {
    "title": "Fluks — Real-Time Telemetry Cloud — elansinfotech"
  },
  {
    "name": "description",
    "content": "Cloud platform modernization, real-time telemetry dashboard and event-driven data streaming architecture for Fluks."
  },
  {
    "property": "og:title",
    "content": "Fluks — Real-Time Telemetry Cloud — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Cloud platform modernization, real-time telemetry dashboard and event-driven data streaming architecture for Fluks."
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
