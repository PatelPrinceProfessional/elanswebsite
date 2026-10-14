import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--vvaa.html?raw";

export const Route = createFileRoute("/werk/vvaa")({
  head: () => ({ meta: [
  {
    "title": "VvAA — elansinfotech"
  },
  {
    "name": "description",
    "content": "Pay close attention, maybe your team will spot EF ;)"
  },
  {
    "property": "og:title",
    "content": "VvAA — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Pay close attention, maybe your team will spot EF ;)"
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
