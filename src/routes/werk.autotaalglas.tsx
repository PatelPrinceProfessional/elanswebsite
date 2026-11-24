import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--autotaalglas.html?raw";

export const Route = createFileRoute("/werk/autotaalglas")({
  head: () => ({ meta: [
  {
    "title": "Autotaalglas — Fleet Management Cloud — elansinfotech"
  },
  {
    "name": "description",
    "content": "Automated fleet dispatch API, nationwide real-time vehicle booking portal and distributed scheduling platform for Autotaalglas."
  },
  {
    "property": "og:title",
    "content": "Autotaalglas — Fleet Management Cloud — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Automated fleet dispatch API, nationwide real-time vehicle booking portal and distributed scheduling platform for Autotaalglas."
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
