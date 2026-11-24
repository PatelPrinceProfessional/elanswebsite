import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--roc-midden-nederland.html?raw";

export const Route = createFileRoute("/werk/roc-midden-nederland")({
  head: () => ({ meta: [
  {
    "title": "ROC Midden NL — Enterprise Campus LMS — elansinfotech"
  },
  {
    "name": "description",
    "content": "Enterprise educational LMS, identity federation, secure cloud infrastructure and student portal for ROC Midden Nederland."
  },
  {
    "property": "og:title",
    "content": "ROC Midden NL — Enterprise Campus LMS — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Enterprise educational LMS, identity federation, secure cloud infrastructure and student portal for ROC Midden Nederland."
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
