import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--mentos.html?raw";

export const Route = createFileRoute("/werk/mentos")({
  head: () => ({ meta: [
  {
    "title": "Mentos — elansinfotech"
  },
  {
    "name": "description",
    "content": "We have been making 3D videos and social content for Mentos for a long time. Pre-rolls on YouTube, paid social on Meta and DOOH for the screens in the supermarket, always in the same rhythm of a brand that must remain continuously visible."
  },
  {
    "property": "og:title",
    "content": "Mentos — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "We have been making 3D videos and social content for Mentos for a long time. Pre-rolls on YouTube, paid social on Meta and DOOH for the screens in the supermarket, always in the same rhythm of a brand that must remain continuously visible."
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
