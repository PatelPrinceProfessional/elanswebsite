import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--holland-casino.html?raw";

export const Route = createFileRoute("/werk/holland-casino")({
  head: () => ({ meta: [
  {
    "title": "Holland Casino — Gaming Telemetry — elansinfotech"
  },
  {
    "name": "description",
    "content": "Low-latency real-time tournament telemetry platform, secure payout verification and high-concurrency gaming microservices for Holland Casino."
  },
  {
    "property": "og:title",
    "content": "Holland Casino — Gaming Telemetry — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Low-latency real-time tournament telemetry platform, secure payout verification and high-concurrency gaming microservices for Holland Casino."
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
