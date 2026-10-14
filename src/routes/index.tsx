import { createFileRoute } from "@tanstack/react-router";
import ReferenceHomepage from "@/components/reference-homepage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "elansinfotech — Cloud Architecture, AI & Enterprise Software" },
    { name: "description", content: "The engineers at elansinfotech architect modern digital solutions. Cloud platforms, full-stack software and AI engineering." },
    { property: "og:title", content: "elansinfotech — Engineering modern digital solutions" },
    { property: "og:description", content: "An elite engineering crew delivering scalable cloud systems, custom software and AI platforms." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ReferenceHomepage,
});
