export class QradioOption {
	constructor (key, value) {
		this.value = value || '';
		this.key = ++key || 1;
	}

	update (value) {
		this.value = value;
	}
}