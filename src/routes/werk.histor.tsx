import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--histor.html?raw";

export const Route = createFileRoute("/werk/histor")({
  head: () => ({ meta: [
  {
    "title": "Histor — Color Intelligence Engine — elansinfotech"
  },
  {
    "name": "description",
    "content": "Color intelligence algorithms, computer vision palette matching and interactive cloud visualization platform for Histor."
  },
  {
    "property": "og:title",
    "content": "Histor — Color Intelligence Engine — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Color intelligence algorithms, computer vision palette matching and interactive cloud visualization platform for Histor."
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
