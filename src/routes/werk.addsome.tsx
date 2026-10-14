import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--addsome.html?raw";

export const Route = createFileRoute("/werk/addsome")({
  head: () => ({ meta: [
  {
    "title": "Addsome — elansinfotech"
  },
  {
    "name": "description",
    "content": "The creatives at Addsome are certainly no strangers to us. When they launched their own agency, an animation had to be included. Not as an afterthought, but as the moment when Addsome introduced himself to the world."
  },
  {
    "property": "og:title",
    "content": "Addsome — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "The creatives at Addsome are certainly no strangers to us. When they launched their own agency, an animation had to be included. Not as an afterthought, but as the moment when Addsome introduced himself to the world."
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
