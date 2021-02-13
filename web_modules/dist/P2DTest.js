/* src/P2DTest.svelte generated by Svelte v3.31.1 */
import {
	SvelteComponent,
	create_component,
	destroy_component,
	init,
	mount_component,
	noop,
	safe_not_equal,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import Canvas from "./Canvas.js";

function create_fragment(ctx) {
	let canvas;
	let current;
	canvas = new Canvas({ props: { sketch: /*sketch*/ ctx[0] } });

	return {
		c() {
			create_component(canvas.$$.fragment);
		},
		m(target, anchor) {
			mount_component(canvas, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(canvas.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(canvas.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(canvas, detaching);
		}
	};
}

function instance($$self) {
	const sketch = p => {
		let x = 100;
		let y = 100;
		let w = p.random(50, 100);
		let h = p.random(50, 100);
		h = p.random(50, 100);

		p.setup = () => {
			p.createCanvas(p.windowWidth, 410);
		};

		p.draw = () => {
			p.background(0);
			p.fill(255);
			p.rect(x, y, w, h);
		};
	};

	return [sketch];
}

class P2DTest extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default P2DTest;