import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--avans.html?raw";

export const Route = createFileRoute("/werk/avans")({
  head: () => ({ meta: [
  {
    "title": "Avans — Student Information Gateway — elansinfotech"
  },
  {
    "name": "description",
    "content": "High-availability student information gateway, SSO authentication system and cloud-native microservices architecture for Avans University."
  },
  {
    "property": "og:title",
    "content": "Avans — Student Information Gateway — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "High-availability student information gateway, SSO authentication system and cloud-native microservices architecture for Avans University."
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
