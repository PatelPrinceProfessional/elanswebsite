import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--nationaal-archief.html?raw";

export const Route = createFileRoute("/werk/nationaal-archief")({
  head: () => ({ meta: [
  {
    "title": "Nationaal Archief — Semantic Search Vault — elansinfotech"
  },
  {
    "name": "description",
    "content": "High-volume digital archive preservation system, OCR vector indexing and semantic search platform for the National Archives."
  },
  {
    "property": "og:title",
    "content": "Nationaal Archief — Semantic Search Vault — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "High-volume digital archive preservation system, OCR vector indexing and semantic search platform for the National Archives."
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
