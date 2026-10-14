import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--willem-ii.html?raw";

export const Route = createFileRoute("/werk/willem-ii")({
  head: () => ({ meta: [
  {
    "title": "Willem II — elansinfotech"
  },
  {
    "name": "description",
    "content": "Willem II is a club with its own social branch, Willem II Foundation, and we worked on various productions for both. Each with its own challenge."
  },
  {
    "property": "og:title",
    "content": "Willem II — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Willem II is a club with its own social branch, Willem II Foundation, and we worked on various productions for both. Each with its own challenge."
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
