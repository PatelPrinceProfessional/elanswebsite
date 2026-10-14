import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk.html?raw";

export const Route = createFileRoute("/werk/")({
  head: () => ({ meta: [
  {
    "title": "Our work — elansinfotech"
  },
  {
    "name": "description",
    "content": "Explore cloud architecture, enterprise software and AI platform case studies engineered by elansinfotech."
  },
  {
    "property": "og:title",
    "content": "Our work — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Explore cloud architecture, enterprise software and AI platform case studies engineered by elansinfotech."
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
