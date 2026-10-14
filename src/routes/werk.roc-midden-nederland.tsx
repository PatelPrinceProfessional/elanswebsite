import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--roc-midden-nederland.html?raw";

export const Route = createFileRoute("/werk/roc-midden-nederland")({
  head: () => ({ meta: [
  {
    "title": "ROC Midden NL — elansinfotech"
  },
  {
    "name": "description",
    "content": "Everything moves. Also at ROC Midden Nederland. Their students are the creators of society, and that requires good explanation."
  },
  {
    "property": "og:title",
    "content": "ROC Midden NL — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Everything moves. Also at ROC Midden Nederland. Their students are the creators of society, and that requires good explanation."
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
