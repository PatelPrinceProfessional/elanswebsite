import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--easytoys.html?raw";

export const Route = createFileRoute("/werk/easytoys")({
  head: () => ({ meta: [
  {
    "title": "Easytoys — elansinfotech"
  },
  {
    "name": "description",
    "content": "Something different, because for us, acting normal is far from crazy enough. What we are also proud of: our brainfarts that we quickly transform into designs. Like this social content for Easytoys."
  },
  {
    "property": "og:title",
    "content": "Easytoys — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Something different, because for us, acting normal is far from crazy enough. What we are also proud of: our brainfarts that we quickly transform into designs. Like this social content for Easytoys."
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
