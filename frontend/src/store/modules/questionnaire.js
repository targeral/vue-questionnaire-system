import * as types from '../mutation-types'
import * as _ from 'lodash'
import _http from 'axios'
import QFactory from '../tools/QFactory'

class QModel {
	constructor(type, q) {
		this.type = `question-${ type }`;
		this.q = q;
		this.isEditing  = false;
	}

	update (q) {
		this.q = q;
	}
}

const state = {
	title: '',
	welcome: '',
	over: '',
	questions: [],
	index: -1,
	hasEditingQ: false,
	editingQ: null,
}

const getters = {};

const url = 'http://localhost:5001';

const actions = {
	getQuestionNaire ({ commit }, params) {
		_http.get(`${ url }/questionnaire/get/${ params.id }`)
				 .then( res => {
				 	console.log(res.data.data);
				 	commit('QNAIRE_UPDATE', {value: res.data.data})
				 	commit('LOADING_DATAOVER');
				 })
				 .catch(error => {
				 	console.log(error);
				 })
	},
	addQuestionNaire ({ commit, state }) {
		let body = JSON.stringify(state);
		console.log(body)
		_http.post(`${ url }/questionnaire/add`, body, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
				 .then(res => {
				 	console.log(res)
				 })
				 .catch(err => {
				 	console.log(error)
				 })
	}
};

const mutations = {
	[types.QNAIRE_ADDQ] (state, { type }) {
		let question = QFactory(type);
		console.log('add a question in qn', question);
		state.questions.push(new QModel(type, question));
	},

	[types.QNAIRE_DELETEQ] (state, { index }) {
		console.log('delete a question in qn')
		state.questions.splice(index, 1);
	},

	[types.QNAIRE_UPDATEQ] (state, { index, question }) {
		console.log('update question in qn')
		//state.questions.splice(index, 1, question);
		state.questions[index].update(question)
	},

	[types.QNAIRE_UPDATE] (state, { all, value }) {
		console.log('update qn', all, value)
		if( all === 'title' ) {
			state.title = value;
		} else if( all === 'welcome' ) {
			state.welcome = value;
		} else if( all === 'over' ) {
			state.over = value;
		} else {
			_.assign(state, value);
			console.log(state)
		}
	},

	[types.QNAIRE_EDITQ] (state, { index }) {
		console.log('editq in qn', index)
		state.hasEditingQ = true;
		state.index = index;
		state.questions[index].isEditing = true;
	},

	[types.QNAIRE_UNEDITQ] (state, { index }) {
		console.log('unedit question in qn', state.questions[index])
		state.hasEditingQ = false;
		state.questions[index].isEditing = false;
		state.index = -1;
	},

	[types.QNAIRE_HASEQ] (state) {
		state.questions[state.index].isEditing = false;
		state.index = -1;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}