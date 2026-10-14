import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/contact.html?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
  {
    "title": "Contact — elansinfotech"
  },
  {
    "name": "description",
    "content": "Get in touch with elansinfotech to accelerate your software engineering, cloud migration and digital roadmap."
  },
  {
    "property": "og:title",
    "content": "Contact — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Get in touch with elansinfotech to accelerate your software engineering, cloud migration and digital roadmap."
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
