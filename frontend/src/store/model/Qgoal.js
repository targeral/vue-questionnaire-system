export class Qgoal {
	constructor() {
		this.title = '';
		this.goal = 50;
	}

	update (key, value) {
		this[key] = value;
	}

	answerIs (goal) {
		this.goal = goal;
	}
}