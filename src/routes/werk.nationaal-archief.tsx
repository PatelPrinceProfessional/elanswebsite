import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--nationaal-archief.html?raw";

export const Route = createFileRoute("/werk/nationaal-archief")({
  head: () => ({ meta: [
  {
    "title": "Nationaal Archief — elansinfotech"
  },
  {
    "name": "description",
    "content": "The National Archives preserves almost a thousand years of Dutch history: 142 kilometers of documents and 800 terabytes of digital files. The War for the Judge project makes part of that archive surrounding the Second World War more searchable. Sensitive matte"
  },
  {
    "property": "og:title",
    "content": "Nationaal Archief — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "The National Archives preserves almost a thousand years of Dutch history: 142 kilometers of documents and 800 terabytes of digital files. The War for the Judge project makes part of that archive surrounding the Second World War more searchable. Sensitive matte"
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
