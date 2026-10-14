import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--jamin.html?raw";

export const Route = createFileRoute("/werk/jamin")({
  head: () => ({ meta: [
  {
    "title": "Jamin — elansinfotech"
  },
  {
    "name": "description",
    "content": "Jamin crossed our path while we were filming with another customer. That clicked immediately. Our jokes and ideas matched, and one thing soon led to another."
  },
  {
    "property": "og:title",
    "content": "Jamin — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Jamin crossed our path while we were filming with another customer. That clicked immediately. Our jokes and ideas matched, and one thing soon led to another."
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
