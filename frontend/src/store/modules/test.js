import * as types from '../mutation-types'

const state = {
	test: 'test',
	oldtest: '',
}

const getters = {
	test: state => {
		return state.test;
	}
}

const actions = {
	test ({ commit }) {
		console.log('this is test action')
		commit('test');
	}
}

const mutations = {
	[types.TEST] (state) {
		console.log('this is test mutation', state.test)
		state.test += state.test;
		console.log(state.childtest)
		console.log(state.test)
	},
	save (state) {
		state.oldtest = state.test;
		state.test += state.test;
		console.log(state)
	},
	cancel () {
		state.test = state.oldtest;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}