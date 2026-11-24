import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--sovak.html?raw";

export const Route = createFileRoute("/werk/sovak")({
  head: () => ({ meta: [
  {
    "title": "Sovak — Healthcare Workforce Cloud — elansinfotech"
  },
  {
    "name": "description",
    "content": "Secure healthcare operations platform, staff scheduling software and enterprise cloud migration for Sovak."
  },
  {
    "property": "og:title",
    "content": "Sovak — Healthcare Workforce Cloud — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Secure healthcare operations platform, staff scheduling software and enterprise cloud migration for Sovak."
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
