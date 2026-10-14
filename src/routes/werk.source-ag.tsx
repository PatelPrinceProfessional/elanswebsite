import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--source-ag.html?raw";

export const Route = createFileRoute("/werk/source-ag")({
  head: () => ({ meta: [
  {
    "title": "Source.ag — elansinfotech"
  },
  {
    "name": "description",
    "content": "Source.ag builds AI software that helps growers around the world start, manage and scale successful farms. Quite a mouthful."
  },
  {
    "property": "og:title",
    "content": "Source.ag — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Source.ag builds AI software that helps growers around the world start, manage and scale successful farms. Quite a mouthful."
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
