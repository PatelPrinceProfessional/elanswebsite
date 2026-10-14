import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--histor.html?raw";

export const Route = createFileRoute("/werk/histor")({
  head: () => ({ meta: [
  {
    "title": "Histor — elansinfotech"
  },
  {
    "name": "description",
    "content": "Six episodes, no fixed script, but a catchy and compelling story."
  },
  {
    "property": "og:title",
    "content": "Histor — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Six episodes, no fixed script, but a catchy and compelling story."
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
