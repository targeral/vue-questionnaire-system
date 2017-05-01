import * as types from '../mutation-types'
import * as _ from 'lodash'
import QFactory from '../tools/QFactory'

const state = {
	content: {},
	oldContent: {},
}

const getters = {}

const actions = {}

const mutations  = {
	[types.Q_INIT] (state, { type }) {
		console.log('init in eq', type)
		state.content = QFactory(type);
		state.oldContent = _.cloneDeep(state.content);
	},

	[types.Q_UPDATE] (state, {key, value, index}) {
		console.log('update in eq', state.content);
		state.content.update(key, value, index);
	},

	[types.Q_REEDIT] (state, { question }) {
		console.log('reedit in editing question', question)
		state.content = _.cloneDeep(question);
		console.log(state.content);
		state.oldContent = _.cloneDeep(question);
	},

	[types.Q_CANCEL] (state) {
		console.log('cancel in eq')
		state.content = _.cloneDeep(state.oldContent);
	},

	[types.Q_OVER] (state) {
		console.log('over in eq')
		state.content = {};
		state.oldContent = {};
	}
};

export default {
	state,
	getters,
	actions,
	mutations,
}












