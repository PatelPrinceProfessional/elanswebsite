import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--fatboy.html?raw";

export const Route = createFileRoute("/werk/fatboy")({
  head: () => ({ meta: [
  {
    "title": "Fatboy — elansinfotech"
  },
  {
    "name": "description",
    "content": "Fatboy is an interior brand that combines design and playfulness, and we were allowed to make two very different productions for it."
  },
  {
    "property": "og:title",
    "content": "Fatboy — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Fatboy is an interior brand that combines design and playfulness, and we were allowed to make two very different productions for it."
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
