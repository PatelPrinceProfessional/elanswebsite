import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--q-park.html?raw";

export const Route = createFileRoute("/werk/q-park")({
  head: () => ({ meta: [
  {
    "title": "Q-Park — elansinfotech"
  },
  {
    "name": "description",
    "content": "That is why we have been working with and for Q-Park for a long time. Not for one separate production, but as creative makers who figure out how to convey all those different stories in an interesting and inspiring way."
  },
  {
    "property": "og:title",
    "content": "Q-Park — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "That is why we have been working with and for Q-Park for a long time. Not for one separate production, but as creative makers who figure out how to convey all those different stories in an interesting and inspiring way."
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
