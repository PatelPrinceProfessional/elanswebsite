import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--vvaa.html?raw";

export const Route = createFileRoute("/werk/vvaa")({
  head: () => ({ meta: [
  {
    "title": "VvAA — Medical Member Vault — elansinfotech"
  },
  {
    "name": "description",
    "content": "Enterprise medical member portal, encrypted insurance policy engine and secure zero-trust vault for VvAA."
  },
  {
    "property": "og:title",
    "content": "VvAA — Medical Member Vault — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Enterprise medical member portal, encrypted insurance policy engine and secure zero-trust vault for VvAA."
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
