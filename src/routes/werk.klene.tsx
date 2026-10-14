import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--klene.html?raw";

export const Route = createFileRoute("/werk/klene")({
  head: () => ({ meta: [
  {
    "title": "Klene — elansinfotech"
  },
  {
    "name": "description",
    "content": "Klene has been making licorice with an identical taste for 150 years, giving the Netherlands a moment of pure indulgence: the Klene break."
  },
  {
    "property": "og:title",
    "content": "Klene — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Klene has been making licorice with an identical taste for 150 years, giving the Netherlands a moment of pure indulgence: the Klene break."
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
