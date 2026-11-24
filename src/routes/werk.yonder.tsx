import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--yonder.html?raw";

export const Route = createFileRoute("/werk/yonder")({
  head: () => ({ meta: [
  {
    "title": "Yonder — Unified Campus Portal — elansinfotech"
  },
  {
    "name": "description",
    "content": "Unified higher education portal, multi-campus identity management and cloud services for Yonder."
  },
  {
    "property": "og:title",
    "content": "Yonder — Unified Campus Portal — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Unified higher education portal, multi-campus identity management and cloud services for Yonder."
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
