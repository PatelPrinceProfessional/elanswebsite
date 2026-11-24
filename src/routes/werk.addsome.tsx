import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--addsome.html?raw";

export const Route = createFileRoute("/werk/addsome")({
  head: () => ({ meta: [
  {
    "title": "Velora — E-Commerce Platform — elansinfotech"
  },
  {
    "name": "description",
    "content": "Bespoke headless Shopify Plus storefront, automated order orchestration and sub-second catalog search for Velora."
  },
  {
    "property": "og:title",
    "content": "Velora — E-Commerce Platform — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Bespoke headless Shopify Plus storefront, automated order orchestration and sub-second catalog search for Velora."
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
