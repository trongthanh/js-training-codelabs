import store from './store';
import counter from './components/counter';

store.init(() => {
	counter.init();
});
