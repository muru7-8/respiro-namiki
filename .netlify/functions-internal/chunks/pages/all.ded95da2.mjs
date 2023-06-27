/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent } from '../astro.b9633c79.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro("https://respiro-namiki.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta name="theme-color" content="#07070F">
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/nic.motta/Code/muru-web-dev/src/layouts/Layout.astro");

const $$Astro = createAstro("https://respiro-namiki.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Respir0 Namiki" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", null, { "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "/Users/nic.motta/Code/muru-web-dev/src/components/SvelteComponents/Container/Container.svelte", "client:component-export": "default" })}` })}
<!-- <Pecinco client:only/> -->`;
}, "/Users/nic.motta/Code/muru-web-dev/src/pages/index.astro");

const $$file = "/Users/nic.motta/Code/muru-web-dev/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const DISPOSITIVOS = [
  'dispositivo-1',
  'dispositivo-2',
  'dispositivo-3',
  'dispositivo-4',
  'dispositivo-5',
];

async function get() {
  const response = await fetch('https://respir0-namiki-default-rtdb.firebaseio.com/data.json');
  const data = await response.json();
  const dataResponse = DISPOSITIVOS.map((dispositivo) => {
    const key = data[dispositivo];
    return key.co2;
  });
  return {
    body: JSON.stringify(dataResponse),
  };
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
