import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--veilig-thuis.html?raw";

export const Route = createFileRoute("/werk/veilig-thuis")({
  head: () => ({ meta: [
  {
    "title": "Veilig Thuis — elansinfotech"
  },
  {
    "name": "description",
    "content": "Safe at Home helps people who are dealing with domestic violence or child abuse. Clear, accessible communication is essential - also online. We made a series of explainer videos for their website and social content for Meta and LinkedIn."
  },
  {
    "property": "og:title",
    "content": "Veilig Thuis — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Safe at Home helps people who are dealing with domestic violence or child abuse. Clear, accessible communication is essential - also online. We made a series of explainer videos for their website and social content for Meta and LinkedIn."
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
