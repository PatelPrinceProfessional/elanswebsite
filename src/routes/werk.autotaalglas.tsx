import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--autotaalglas.html?raw";

export const Route = createFileRoute("/werk/autotaalglas")({
  head: () => ({ meta: [
  {
    "title": "Autotaalglas — elansinfotech"
  },
  {
    "name": "description",
    "content": "Autotaalglas repairs and replaces car windows throughout the Netherlands. As a permanent partner, we create their social content every month: concepts, animation and social video that show just that little bit more than a repaired window. We are bursting with "
  },
  {
    "property": "og:title",
    "content": "Autotaalglas — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Autotaalglas repairs and replaces car windows throughout the Netherlands. As a permanent partner, we create their social content every month: concepts, animation and social video that show just that little bit more than a repaired window. We are bursting with "
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
