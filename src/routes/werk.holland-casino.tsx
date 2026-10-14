import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--holland-casino.html?raw";

export const Route = createFileRoute("/werk/holland-casino")({
  head: () => ({ meta: [
  {
    "title": "Holland Casino — elansinfotech"
  },
  {
    "name": "description",
    "content": "Holland Casino organizes poker festivals throughout the year at various locations. Rotterdam Rounders was one of them, nine days in December. Such a tournament must be promoted to players in advance."
  },
  {
    "property": "og:title",
    "content": "Holland Casino — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Holland Casino organizes poker festivals throughout the year at various locations. Rotterdam Rounders was one of them, nine days in December. Such a tournament must be promoted to players in advance."
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
