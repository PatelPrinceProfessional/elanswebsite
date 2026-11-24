import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--fiom.html?raw";

export const Route = createFileRoute("/werk/fiom")({
  head: () => ({ meta: [
  {
    "title": "Fiom — Zero-Trust Medical Vault — elansinfotech"
  },
  {
    "name": "description",
    "content": "Zero-trust encrypted database vault, HIPAA/GDPR-compliant record management system and secure client portal for Fiom."
  },
  {
    "property": "og:title",
    "content": "Fiom — Zero-Trust Medical Vault — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Zero-trust encrypted database vault, HIPAA/GDPR-compliant record management system and secure client portal for Fiom."
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
