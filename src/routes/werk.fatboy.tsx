import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--fatboy.html?raw";

export const Route = createFileRoute("/werk/fatboy")({
  head: () => ({ meta: [
  {
    "title": "Fatboy — Headless Global Commerce — elansinfotech"
  },
  {
    "name": "description",
    "content": "Global headless e-commerce architecture, dynamic 3D product visualizer and sub-second page transitions for Fatboy."
  },
  {
    "property": "og:title",
    "content": "Fatboy — Headless Global Commerce — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Global headless e-commerce architecture, dynamic 3D product visualizer and sub-second page transitions for Fatboy."
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
