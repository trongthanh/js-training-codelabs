const store = {
	_data: {
		counter: 0,
	},

	init(done) {
		// NOTE: be careful with empty localStorage item
		Object.assign(this._data, JSON.parse(localStorage.getItem('data')));
		done();
	},

	get data() {
		return this._data;
	},

	set(key, value) {
		this._data[key] = value;
		// make save async
		setTimeout(() => {
			this.save();
		}, 0);
	},

	save() {
		localStorage.setItem('data', JSON.stringify(this._data));
	},
};

export default store;
