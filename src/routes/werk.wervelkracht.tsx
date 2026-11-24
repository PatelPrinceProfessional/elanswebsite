import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--wervelkracht.html?raw";

export const Route = createFileRoute("/werk/wervelkracht")({
  head: () => ({ meta: [
  {
    "title": "Wervelkracht — Talent Matching AI — elansinfotech"
  },
  {
    "name": "description",
    "content": "AI-powered talent matching platform, resume vector search pipeline and automated recruitment workflow engine for Wervelkracht."
  },
  {
    "property": "og:title",
    "content": "Wervelkracht — Talent Matching AI — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "AI-powered talent matching platform, resume vector search pipeline and automated recruitment workflow engine for Wervelkracht."
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
