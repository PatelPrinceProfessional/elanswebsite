import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import parse, { attributesToProps, domToReact, Element as ParsedElement, type DOMNode, type HTMLReactParserOptions } from "html-react-parser";
import { Button } from "@/components/ui/button";
import homepage from "@/assets/reference/homepage.html?raw";
import { referenceRoutes } from "@/lib/reference-routes";

const options: HTMLReactParserOptions = {
  replace(node) {
    if (!(node instanceof ParsedElement)) return undefined;
    if (node.name === "link" || node.name === "script") return <></>;
    if (node.name === "a" && !node.attribs['rd-cookieflow']) {
      let rawHref = node.attribs['href'] || '/';
      // Strip any external domain prefixes
      let href = rawHref
        .replace(/^https?:\/\/(www\.)?extrafazant\.nl/i, '')
        .replace(/^https?:\/\/(www\.)?elansinfotech\.nl/i, '')
        .replace(/^https?:\/\/(www\.)?elansinfotech\.com/i, '');
      if (href.length > 1 && href.endsWith('/')) href = href.slice(0, -1);
      const destination = referenceRoutes.find((path) => path === href);
      if (destination) {
        const { href: _href, ...props } = attributesToProps(node.attribs);
        return <Link {...props} to={destination}>{domToReact(node.children as DOMNode[], options)}</Link>;
      }
    }
    if (node.attribs['data-accordion-toggle'] !== undefined) {
      const props = attributesToProps(node.attribs);
      return <Button {...props} variant="reference" size="reference" type="button" aria-expanded="false">{domToReact(node.children as DOMNode[], options)}</Button>;
    }
    if (node.name === "button") {
      const props = attributesToProps(node.attribs);
      return <Button {...props} variant="reference" size="reference">{domToReact(node.children as DOMNode[], options)}</Button>;
    }
    return undefined;
  },
};

export default function ReferenceHomepage() {
  return <ReferencePage markup={homepage} />;
}

export function ReferencePage({ markup }: { markup: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let dispose: (() => void) | undefined;
    let cancelled = false;
    document.fonts.ready.then(async () => {
      const { default: initialize } = await import("@/lib/reference-motion.js");
      if (!cancelled) dispose = initialize(element);
    });
    const wrapper = element.querySelector<HTMLElement>('[rd-cookieflow="wrapper"]');
    if (document.cookie.includes("elansinfotech_consent=")) wrapper?.setAttribute("data-dismissed", "");
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const accordion = target.closest<HTMLElement>('[data-accordion-toggle]');
      if (accordion) {
        requestAnimationFrame(() => accordion.setAttribute('aria-expanded', String(accordion.parentElement?.getAttribute('data-accordion-status') === 'active')));
      }
      const control = target.closest("[rd-cookieflow]");
      const action = control?.getAttribute("rd-cookieflow");
      if (action === "open-settings") {
        event.preventDefault(); wrapper?.setAttribute("data-settings-open", "");
      } else if (action === "close" || action === "accept" || action === "reject" || action === "accept-selected") {
        event.preventDefault();
        if (action === "close" && wrapper?.hasAttribute("data-settings-open")) wrapper.removeAttribute("data-settings-open");
        else {
          document.cookie = `elansinfotech_consent=${action === "accept" ? "accepted" : "essential"}; Path=/; Max-Age=31536000; SameSite=Lax`;
          wrapper?.setAttribute("data-dismissed", "");
        }
      }
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute("href");
      if (href && href.length > 1) {
        const destination = element.querySelector(href);
        if (destination) { event.preventDefault(); destination.scrollIntoView({ behavior: "smooth" }); }
      }
    };
    element.addEventListener("click", onClick);
    return () => { cancelled = true; dispose?.(); element.removeEventListener("click", onClick); };
  }, [markup]);
  return <div ref={root}>{parse(markup, options)}</div>;
}