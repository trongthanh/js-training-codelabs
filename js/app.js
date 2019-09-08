import store from './store/index.js';
import counter from './components/counter.js';

store.init(() => {
	counter.init();
});
