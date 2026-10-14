import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--wervelkracht.html?raw";

export const Route = createFileRoute("/werk/wervelkracht")({
  head: () => ({ meta: [
  {
    "title": "Wervelkracht — elansinfotech"
  },
  {
    "name": "description",
    "content": "Wervelkracht is a recruitment agency that brings recruitment and marketing together. They write vacancies that are correct, set up campaigns around them and build the employer brand of their customers. Or they take over the entire recruitment process. Recruitm"
  },
  {
    "property": "og:title",
    "content": "Wervelkracht — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Wervelkracht is a recruitment agency that brings recruitment and marketing together. They write vacancies that are correct, set up campaigns around them and build the employer brand of their customers. Or they take over the entire recruitment process. Recruitm"
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
