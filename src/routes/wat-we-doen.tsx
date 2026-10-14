import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/wat-we-doen.html?raw";

export const Route = createFileRoute("/wat-we-doen")({
  head: () => ({ meta: [
  {
    "title": "What we do — elansinfotech"
  },
  {
    "name": "description",
    "content": "Discover elansinfotech’s cloud architecture, custom software engineering and AI data solutions."
  },
  {
    "property": "og:title",
    "content": "What we do — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Discover elansinfotech’s cloud architecture, custom software engineering and AI data solutions."
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
