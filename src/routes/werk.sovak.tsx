import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--sovak.html?raw";

export const Route = createFileRoute("/werk/sovak")({
  head: () => ({ meta: [
  {
    "title": "Sovak — elansinfotech"
  },
  {
    "name": "description",
    "content": "Sovak is there for everyone with an intellectual disability: living, working, learning, participating. Sovak does this in her own way and we show this through video and animation."
  },
  {
    "property": "og:title",
    "content": "Sovak — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Sovak is there for everyone with an intellectual disability: living, working, learning, participating. Sovak does this in her own way and we show this through video and animation."
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
