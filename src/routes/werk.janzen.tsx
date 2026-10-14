import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--janzen.html?raw";

export const Route = createFileRoute("/werk/janzen")({
  head: () => ({ meta: [
  {
    "title": "Janzen — elansinfotech"
  },
  {
    "name": "description",
    "content": "Can we let the new collection float through the city? Sure! For the launch of the Heavenly collection, we came up with a FOOH campaign in which the product literally lives up to its name. We shot footage ourselves in the streets of 's-Hertogenbosch, then we an"
  },
  {
    "property": "og:title",
    "content": "Janzen — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Can we let the new collection float through the city? Sure! For the launch of the Heavenly collection, we came up with a FOOH campaign in which the product literally lives up to its name. We shot footage ourselves in the streets of 's-Hertogenbosch, then we an"
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
