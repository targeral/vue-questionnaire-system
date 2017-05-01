import * as types from '../mutation-types'
import * as _ from 'lodash';

const state = {
	isEditing: false,
	question: {
		title: '',
		options: [{value: '', key: 1}],
		key: 1,
		answer: '',
	},
	oldQuestion: {},
}

const getters = {}

const actions = {}

const mutations = {
	[types.QRADIO_SAVE] (state, param) {
		state.question.options = _.cloneDeep(param.options);
		state.oldQuestion = _.cloneDeep(state.question);
	},
	[types.QRADIO_CANCEL] (state) {
		state.question = _.cloneDeep(state.oldQuestion);
		console.log('store radio cancel', state.oldQuestion.options)
	},
	[types.QRADIO_UPDATE] (state, param) {
		let all = param.all;
		let value = param.value;
		if(all === 'title') {
			state.question.title = value;
		} else if(all === 'options') {
			state.question.options = value;
		} else {
			state.question = value;
		}
	},
	[types.QRADIO_EDIT] (state) {
		state.isEditing = true;
	},
	[types.QRADIO_UNEDIT] (state) {
		state.isEditing = false;
	},
	[types.QRADIO_ADD_OPTION] (state) {
		state.question.options.push({value: '', key: ++state.question.key});
	},
	[types.QRADIO_DELETE_OPTION] (state, param) {
		if(state.question.options.length <= 1) {
			return ;
		}
		state.question.options.splice(param.index, 1);
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}