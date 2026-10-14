import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/algemene-voorwaarden.html?raw";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({ meta: [
  {
    "title": "Terms & Conditions — elansinfotech"
  },
  {
    "name": "description",
    "content": "These general terms and conditions apply to assignments to business clients and consumers. Where mandatory legal rules apply to consumers, those rules take precedence."
  },
  {
    "property": "og:title",
    "content": "Terms & Conditions — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "These general terms and conditions apply to assignments to business clients and consumers. Where mandatory legal rules apply to consumers, those rules take precedence."
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
