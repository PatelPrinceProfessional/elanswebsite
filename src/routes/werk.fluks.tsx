import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--fluks.html?raw";

export const Route = createFileRoute("/werk/fluks")({
  head: () => ({ meta: [
  {
    "title": "Fluks — elansinfotech"
  },
  {
    "name": "description",
    "content": "Launching a new look is more than just showing a new logo. It's a new story, and that story has to make sense right away. For the launch of Fluks, we made an animation that sets that story in motion."
  },
  {
    "property": "og:title",
    "content": "Fluks — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Launching a new look is more than just showing a new logo. It's a new story, and that story has to make sense right away. For the launch of Fluks, we made an animation that sets that story in motion."
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
