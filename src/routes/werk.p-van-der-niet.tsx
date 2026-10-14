import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--p-van-der-niet.html?raw";

export const Route = createFileRoute("/werk/p-van-der-niet")({
  head: () => ({ meta: [
  {
    "title": "P. van der Niet — elansinfotech"
  },
  {
    "name": "description",
    "content": "A brand film that does not tell you who you are, but makes you feel where you belong. That is what we created for Installatiebedrijf P. van der Niet. A film in which colleagues play the leading roles and in which you understand within a few seconds why no one "
  },
  {
    "property": "og:title",
    "content": "P. van der Niet — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "A brand film that does not tell you who you are, but makes you feel where you belong. That is what we created for Installatiebedrijf P. van der Niet. A film in which colleagues play the leading roles and in which you understand within a few seconds why no one "
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
