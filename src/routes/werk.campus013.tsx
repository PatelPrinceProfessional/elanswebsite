import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--campus013.html?raw";

export const Route = createFileRoute("/werk/campus013")({
  head: () => ({ meta: [
  {
    "title": "Campus 013 — Education LMS Cloud — elansinfotech"
  },
  {
    "name": "description",
    "content": "Modern cloud learning management system, interactive student portals and automated administrative workflows for Campus 013."
  },
  {
    "property": "og:title",
    "content": "Campus 013 — Education LMS Cloud — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Modern cloud learning management system, interactive student portals and automated administrative workflows for Campus 013."
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
