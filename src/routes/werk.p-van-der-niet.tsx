import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--p-van-der-niet.html?raw";

export const Route = createFileRoute("/werk/p-van-der-niet")({
  head: () => ({ meta: [
  {
    "title": "P. van der Niet — Enterprise ERP Platform — elansinfotech"
  },
  {
    "name": "description",
    "content": "Scalable enterprise web application, field technician dispatch engine and distributed cloud workflow architecture for P. van der Niet."
  },
  {
    "property": "og:title",
    "content": "P. van der Niet — Enterprise ERP Platform — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Scalable enterprise web application, field technician dispatch engine and distributed cloud workflow architecture for P. van der Niet."
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
