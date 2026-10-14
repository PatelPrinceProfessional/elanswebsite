import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/privacyverklaring.html?raw";

export const Route = createFileRoute("/privacyverklaring")({
  head: () => ({ meta: [
  {
    "title": "Privacy Policy — elansinfotech"
  },
  {
    "name": "description",
    "content": "elansinfotech B.V. attaches great importance to the protection of your personal data. In this privacy statement we explain which personal data we collect, why we process it and how we handle your data carefully."
  },
  {
    "property": "og:title",
    "content": "Privacy Policy — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "elansinfotech B.V. attaches great importance to the protection of your personal data. In this privacy statement we explain which personal data we collect, why we process it and how we handle your data carefully."
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
