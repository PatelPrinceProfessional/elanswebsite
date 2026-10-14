import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/faq.html?raw";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
  {
    "title": "Frequently asked questions — elansinfotech"
  },
  {
    "name": "description",
    "content": "Answers to your questions about cloud architecture, DevOps, custom software engineering, sprint cycles and SLAs."
  },
  {
    "property": "og:title",
    "content": "Frequently asked questions — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Answers to your questions about cloud architecture, DevOps, custom software engineering, sprint cycles and SLAs."
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
