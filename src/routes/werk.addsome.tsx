import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--addsome.html?raw";

export const Route = createFileRoute("/werk/addsome")({
  head: () => ({ meta: [
  {
    "title": "Velora — Shopify Store — elansinfotech"
  },
  {
    "name": "description",
    "content": "Velora: Built to Last. Worn Every Day. Premium caps crafted from washed cotton twill. Bespoke Shopify Plus storefront engineered for high conversion, desktop horizontal layout, and mobile-first experience."
  },
  {
    "property": "og:title",
    "content": "Velora — Shopify Store — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Velora: Built to Last. Worn Every Day. Premium caps crafted from washed cotton twill. Bespoke Shopify Plus storefront engineered for high conversion, desktop horizontal layout, and mobile-first experience."
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
