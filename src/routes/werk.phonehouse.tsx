import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--phonehouse.html?raw";

export const Route = createFileRoute("/werk/phonehouse")({
  head: () => ({ meta: [
  {
    "title": "Phonehouse — elansinfotech"
  },
  {
    "name": "description",
    "content": "Phonehouse is the local telecom store that positions itself as a neighborhood store, close by, accessible, just that little bit more personal than the big chains."
  },
  {
    "property": "og:title",
    "content": "Phonehouse — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Phonehouse is the local telecom store that positions itself as a neighborhood store, close by, accessible, just that little bit more personal than the big chains."
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
