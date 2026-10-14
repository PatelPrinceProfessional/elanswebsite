import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--campus013.html?raw";

export const Route = createFileRoute("/werk/campus013")({
  head: () => ({ meta: [
  {
    "title": "Campus 013 — elansinfotech"
  },
  {
    "name": "description",
    "content": "From a simple question to a school full of character."
  },
  {
    "property": "og:title",
    "content": "Campus 013 — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "From a simple question to a school full of character."
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
