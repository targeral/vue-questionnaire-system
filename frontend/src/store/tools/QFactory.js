import { Qtext, Qgoal, Qradio } from '../model'

export default function(type) {
	let question;
	switch (type) {
		case 'text':
			question = new Qtext();
			break;
		case 'goal':
			question = new Qradio();
			break;
		case 'radio':
			question = new Qradio();
			break;
	}

	return question;
}