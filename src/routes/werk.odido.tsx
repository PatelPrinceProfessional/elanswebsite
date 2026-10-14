import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--odido.html?raw";

export const Route = createFileRoute("/werk/odido")({
  head: () => ({ meta: [
  {
    "title": "Odido — elansinfotech"
  },
  {
    "name": "description",
    "content": "Together with the ACT agency, we contributed to the go-live of the rebrand: Odido, and that was not a matter of one studio delivering something. We worked in secret, together with other production houses like BUCK and Code d'Azur, all building the same brand a"
  },
  {
    "property": "og:title",
    "content": "Odido — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Together with the ACT agency, we contributed to the go-live of the rebrand: Odido, and that was not a matter of one studio delivering something. We worked in secret, together with other production houses like BUCK and Code d'Azur, all building the same brand a"
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
