import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage } from "@/components/reference-homepage";
import markup from "@/assets/reference/werk--yonder.html?raw";

export const Route = createFileRoute("/werk/yonder")({
  head: () => ({ meta: [
  {
    "title": "Yonder — elansinfotech"
  },
  {
    "name": "description",
    "content": "Education group Tilburg and ROC continued together under a new name, Yonder. That name was not yet known to the general public when we were allowed to get started. Under the code name Flamingo, we secretly worked on a FOOH announcement for socials and a first "
  },
  {
    "property": "og:title",
    "content": "Yonder — elansinfotech"
  },
  {
    "property": "og:description",
    "content": "Education group Tilburg and ROC continued together under a new name, Yonder. That name was not yet known to the general public when we were allowed to get started. Under the code name Flamingo, we secretly worked on a FOOH announcement for socials and a first "
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
