import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/over.html?raw";

export const Route = createFileRoute("/over")({
  head: () => ({ meta: [
  {
    "title": "About us — elansinfotech"
  },
  {
    "name": "description",
    "content": "Meet the engineering team behind elansinfotech: software architects, DevOps specialists and AI engineers."
  },
  {
    "property": "og:title",
    "content": "About us — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Meet the engineering team behind elansinfotech: software architects, DevOps specialists and AI engineers."
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
