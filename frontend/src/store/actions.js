import _http from 'axios'

const url = 'http://localhost:5001';

export const actions = {
	getQuestionnaires ({ commit }) {
		_http.get(`${ url }/questionnaires/get`)
				 .then( res => {
				 	 commit('QN_UPDATE', {q: res.data.data});
				 	 commit('LOADING_DATAOVER');
				 })
				 .catch(error => {
				 	console.log(error);
				 })
	}	
};