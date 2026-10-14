import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--self.html?raw";

export const Route = createFileRoute("/werk/self")({
  head: () => ({ meta: [
  {
    "title": "Self — elansinfotech"
  },
  {
    "name": "description",
    "content": "Self guides, treats and supports children, young people, families and (young) adults who are stuck, where necessary. They invest in a relationship of trust and work step by step towards human and desirable behavior, so that families participate again in societ"
  },
  {
    "property": "og:title",
    "content": "Self — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Self guides, treats and supports children, young people, families and (young) adults who are stuck, where necessary. They invest in a relationship of trust and work step by step towards human and desirable behavior, so that families participate again in societ"
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
