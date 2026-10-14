import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--avans.html?raw";

export const Route = createFileRoute("/werk/avans")({
  head: () => ({ meta: [
  {
    "title": "Avans — elansinfotech"
  },
  {
    "name": "description",
    "content": "We have previously created several explanation animations for students and teachers for Avans. With the go-live of Avans One, we were able to set up another great video."
  },
  {
    "property": "og:title",
    "content": "Avans — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "We have previously created several explanation animations for students and teachers for Avans. With the go-live of Avans One, we were able to set up another great video."
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
