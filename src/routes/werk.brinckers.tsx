import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--brinckers.html?raw";

export const Route = createFileRoute("/werk/brinckers")({
  head: () => ({ meta: [
  {
    "title": "Brinckers — elansinfotech"
  },
  {
    "name": "description",
    "content": "One bike, endless possibilities. Brinckers wanted to show with the new Buddy that he moves with you, whoever you are. Solo, with the family or the dog. Thanks to a set of modular accessories, the Buddy changes roles effortlessly. That was the most important me"
  },
  {
    "property": "og:title",
    "content": "Brinckers — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "One bike, endless possibilities. Brinckers wanted to show with the new Buddy that he moves with you, whoever you are. Solo, with the family or the dog. Thanks to a set of modular accessories, the Buddy changes roles effortlessly. That was the most important me"
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
