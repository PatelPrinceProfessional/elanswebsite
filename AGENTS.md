<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the homepage's source composition in a sanitized local HTML asset rendered through React, so reference geometry and SVG artwork remain faithful.
- Keep reference styles and literal-color mappings in the global token system, so the source design remains authoritative without feature-level colors.
- Load original GSAP routines dynamically after hydration through the shared sanitized-page renderer; TanStack Router owns routing and no original analytics scripts run.
- Store downloaded reference media through Lovable assets with local pointer files; serve fonts locally and browser-compatible short WebM previews instead of third-party HLS streams.
- Recreate internal reference pages as local TanStack routes with sanitized HTML and English copy; keep third-party destinations external so navigation stays inside the translated site.
