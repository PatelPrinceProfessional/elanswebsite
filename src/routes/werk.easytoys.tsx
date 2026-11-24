import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--easytoys.html?raw";

export const Route = createFileRoute("/werk/easytoys")({
  head: () => ({ meta: [
  {
    "title": "Easytoys — High-Concurrency Commerce — elansinfotech"
  },
  {
    "name": "description",
    "content": "High-throughput e-commerce microservices, real-time catalog search and distributed inventory sync engine for Easytoys."
  },
  {
    "property": "og:title",
    "content": "Easytoys — High-Concurrency Commerce — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "High-throughput e-commerce microservices, real-time catalog search and distributed inventory sync engine for Easytoys."
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
