import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--mentos.html?raw";

export const Route = createFileRoute("/werk/mentos")({
  head: () => ({ meta: [
  {
    "title": "Mentos — Global Brand Cloud Hub — elansinfotech"
  },
  {
    "name": "description",
    "content": "Global digital brand infrastructure, automated asset delivery pipeline and headless distributed edge systems for Mentos."
  },
  {
    "property": "og:title",
    "content": "Mentos — Global Brand Cloud Hub — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Global digital brand infrastructure, automated asset delivery pipeline and headless distributed edge systems for Mentos."
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
