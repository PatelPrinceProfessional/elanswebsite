import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--fiom.html?raw";

export const Route = createFileRoute("/werk/fiom")({
  head: () => ({ meta: [
  {
    "title": "Fiom — elansinfotech"
  },
  {
    "name": "description",
    "content": "For the Vindplaats project, something was added that you can't just put in a video."
  },
  {
    "property": "og:title",
    "content": "Fiom — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "For the Vindplaats project, something was added that you can't just put in a video."
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
