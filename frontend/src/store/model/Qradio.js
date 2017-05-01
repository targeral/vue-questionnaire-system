import { QradioOption } from './QradioOption'

export class Qradio {
	constructor() {
		this.title = '';
		this.options = [
			new QradioOption()
		];
		this.key = 1;
		this.answer = null;
	}

	addOption () {
		let o = new QradioOption(this.key);
		this.options.push(o);
		this.key++;
	}

	deleteOption (index) {
		if(this.key <= 1) {
			return ;
		}

		this.options.splice(index, 1);
		this.key--;
	}

	update (key, value) {
		if(key === 'options') {
			this.options = value.map( v => {
				return new QradioOption(this.key++, v.value);
			})
			//this.options[index].update(value);
		} else if(key === 'add') {
			this.addOption();
		} else if(key === 'delete') {
			this.deleteOption(value);
		} else {
			this[key] = value;
		}
	}

	answerIs (answer) {
		this.answer = answer;
	}
}