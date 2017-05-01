import * as types from './mutation-types.js'

export const mutations =  {
	[types.QN_UPDATE] (state, param) {
		state.questionnaires = param.q;
		state.selectedQuestionnaire = param.q[0];
	},
	[types.QN_SELECT] (state, param) {
		state.selectedQuestionnaire = state.questionnaires[param.index];
	}
}