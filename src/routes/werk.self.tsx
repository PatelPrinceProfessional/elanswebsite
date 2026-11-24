import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--self.html?raw";

export const Route = createFileRoute("/werk/self")({
  head: () => ({ meta: [
  {
    "title": "Self — Healthcare Telemetry Cloud — elansinfotech"
  },
  {
    "name": "description",
    "content": "HIPAA/GDPR-compliant healthcare portal, telehealth streaming architecture and secure patient telemetry platform for Self."
  },
  {
    "property": "og:title",
    "content": "Self — Healthcare Telemetry Cloud — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "HIPAA/GDPR-compliant healthcare portal, telehealth streaming architecture and secure patient telemetry platform for Self."
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
