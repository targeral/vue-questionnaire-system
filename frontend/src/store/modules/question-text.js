import * as types from '../mutation-types'
import * as _ from 'lodash';

const state = {
	question: {
		title: '',
		answer: '',
	},
	oldQuestion: {},
}

const getters = {
}

const actions = {}

const mutations = {
	[types.QTEXT_INIT] (state, param) {
		state.question = _.cloneDeep(param);
		state.oldQuestion = _.cloneDeep(param);
	},
	[types.QTEXT_UPDATE] (state, param) {
		let all = param.all;
		let value = param.value;
		if(all === 'title') {
			state.question.title = value;
		} else if(all === 'answer') {
			state.question.answer = value;
		} else {
			state.question = _.cloneDeep(value);
		}
	},
	[types.QTEXT_SAVE] (state) {
		//state.oldQuestion = _.cloneDeep(state.question);
		state.question = {title: '', answer: ''};
		state.oldQuestion = {};
	},
	[types.QTEXT_CANCEL] (state) {
		console.log(state.question, state.oldQuestion)
		state.question = _.cloneDeep(state.oldQuestion);
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}