import * as adapter from '@astrojs/netlify/netlify-functions.js';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { s as server_default, g as deserializeManifest } from './chunks/astro.b9633c79.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/pages/all.d679c57c.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 */
function check$1(Component) {
	return Component['render'] && Component['$$render'];
}

async function renderToStaticMarkup$1(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			`<astro-slot${key === 'default' ? '' : ` name="${key}"`}>${value}</astro-slot>`;
	}
	const { html } = Component.render(props, { $$slots: slots });
	return { html };
}

const _renderer2 = {
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React.createElement(StaticHtml, { value: newChildren });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = ReactDOM.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode));
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/live.astro", _page1],["src/pages/api/data.json.js", _page2],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer2 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.1ace426f.css","_astro/index.b8b61f6b.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.1ace426f.css","_astro/index.b8b61f6b.css"],"scripts":[],"routeData":{"route":"/live","type":"page","pattern":"^\\/live\\/?$","segments":[[{"content":"live","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/live.astro","pathname":"/live","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/api/data.json","type":"endpoint","pattern":"^\\/api\\/data\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"data.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/data.json.js","pathname":"/api/data.json","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/nic.motta/Code/muru-web-dev/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/nic.motta/Code/muru-web-dev/src/pages/live.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@astrojs/svelte/client.js":"_astro/client.c4e17359.js","/Users/nic.motta/Code/muru-web-dev/src/components/SvelteComponents/Container/Container.svelte":"_astro/Container.2d939859.js","/Users/nic.motta/Code/muru-web-dev/src/components/SvelteComponents/ContainerLive/ContainerLive.svelte":"_astro/ContainerLive.be385776.js","@astrojs/react/client.js":"_astro/client.97e10384.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.1ace426f.css","/favicon.svg","/_astro/Container.2d939859.js","/_astro/ContainerLive.be385776.js","/_astro/client.97e10384.js","/_astro/client.c4e17359.js","/_astro/index.b8b61f6b.css","/_astro/p5.min.ccbe9cec.js","/_astro/respiroNamikiSound.c6d1d996.js","/assets/sound/respiroNamikiSound.mp3","/assets/models/achira.obj","/assets/models/brus.obj","/assets/models/semillas.obj","/assets/models/tortuga.obj","/assets/images/achira-front-green.png","/assets/images/achira-front-limeGreen.png","/assets/images/achira-front-orange.png","/assets/images/achira-front-red.png","/assets/images/achira-front-yellow.png","/assets/images/arrow.svg","/assets/images/brus-front-green.png","/assets/images/brus-front-limeGreen.png","/assets/images/brus-front-orange.png","/assets/images/brus-front-red.png","/assets/images/brus-front-yellow.png","/assets/images/info-2.svg","/assets/images/model-load.svg","/assets/images/modelo-1.svg","/assets/images/semillas-front-green.png","/assets/images/semillas-front-limeGreen.png","/assets/images/semillas-front-orange.png","/assets/images/semillas-front-red.png","/assets/images/semillas-front-yellow.png","/assets/images/tortuga-front-green.png","/assets/images/tortuga-front-limeGreen.png","/assets/images/tortuga-front-orange.png","/assets/images/tortuga-front-red.png","/assets/images/tortuga-front-yellow.png"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
