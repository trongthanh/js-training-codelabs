import get from 'lodash/get';
import store from '../store/index.js';
import { $ } from '../utils/index.js';

const counter = {
	init() {
		console.log('Counter started');
		const now = new Date();

		$('#plus-btn').addEventListener('click', () => {
			let counter = get(store, 'data.counter');
			store.set('counter', ++counter); // synchronous
			this.render();
		});

		$('#minus-btn').addEventListener('click', () => {
			let counter = get(store, 'data.counter');
			store.set('counter', --counter); // synchronous
			this.render();
		});

		this.render();
	},

	render() {
		$('.counter').textContent = `Counter: ${store.data.counter}`;
	},
};

export default counter;
