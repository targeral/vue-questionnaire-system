import * as types from '../mutation-types'
import * as _ from 'lodash'

const state = {
	isEditing: false,
	question: {
		title: '',
		goal: 50,
	},
	oldQuestion: {},
}

const getters = {

}

const actions = {}

const mutations = {
	[types.QGOAL_SAVE] (state) {
		state.oldQuestion = _.cloneDeep(state.question);
	},
	[types.QGOAL_CANCEL] (state) {
		state.question = state.oldQuestion;
	},
	[types.QGOAL_UPDATE] (state, param) {
		let all = param.all;
		let value = param.value;
		if(all === 'title') {
			state.question.title = value;
		} else if(all === 'goal') {
			state.question.goal = value;
		} else {
			state.question = value;
		}
	},
	[types.QGOAL_EDIT] (state) {
		state.isEditing = true;
	},
	[types.QGOAL_UNEDIT] (state) {
		state.isEditing = false;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}