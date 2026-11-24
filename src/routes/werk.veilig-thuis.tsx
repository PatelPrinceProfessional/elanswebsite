import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--veilig-thuis.html?raw";

export const Route = createFileRoute("/werk/veilig-thuis")({
  head: () => ({ meta: [
  {
    "title": "Veilig Thuis — Incident Dispatch Cloud — elansinfotech"
  },
  {
    "name": "description",
    "content": "Mission-critical emergency dispatch portal, zero-trust encrypted communications and fault-tolerant cloud infrastructure for Veilig Thuis."
  },
  {
    "property": "og:title",
    "content": "Veilig Thuis — Incident Dispatch Cloud — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Mission-critical emergency dispatch portal, zero-trust encrypted communications and fault-tolerant cloud infrastructure for Veilig Thuis."
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
