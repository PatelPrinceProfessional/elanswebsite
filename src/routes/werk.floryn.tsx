import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--floryn.html?raw";

export const Route = createFileRoute("/werk/floryn")({
  head: () => ({ meta: [
  {
    "title": "Floryn — elansinfotech"
  },
  {
    "name": "description",
    "content": "A logo that can go in any direction. Except sitting still."
  },
  {
    "property": "og:title",
    "content": "Floryn — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "A logo that can go in any direction. Except sitting still."
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
