export class Qtext {
	constructor() {
		this.title = '';
		this.answer = '';
	}

	update(key, value) {
		this[key] = value;
	}

	answerIs (answer) {
		this.answer = answer;
	}
}