import * as types from '../mutation-types'
import * as _ from 'lodash'

const EMOJI = [
	[`█`, `◆`, `▬`, `◇`, `▫`],
	[`1`, `+`, `1`, `=`, `2`],
	[`(`, `￣`, `.`, `￣`, `)`],
	[`(`, `￣`, `▽`, `￣`, `)`],
	[`(`, `￣`, `︶`, `￣`, `)`],
	[`(`, `｀`, `∇`, `´`, `)`],
	[`(`, `￣`, `３`, `￣`, `)`],
	[`(`, `╯`, `▽`, `╰`, `)`],
	[`(`, `▔`, `,`, `▔`, `)`],
	[`(`, `＾`, `－`, `＾`, `)`],
	[`(`, `／`, `_`, `＼`, `)`],
];

const initEmoji = [`•`, `•`, `•`, `•`, `•`];

let emojiIndex = 0;

const state = {
	points: [`•`, `•`, `•`, `•`, `•`],
	emoji: EMOJI[0],
	emojiIndex: 0,
	pointsIndex: 0,
	loadAnimationOver: false,
	dataover: false,
}

const getters = {
	loadingState (state) {
		return !(state.loadAnimationOver && state.dataover);
	}
};

const actions = {
	loadingStart ({ commit, state }, asyncFlag) {
		console.log('start loading', state)
		let count = 0;
		let timer = setInterval(() => {
			commit('LOADING_CHANGE_POINT');
			count++;
			if(count === 5) {
				commit('LOADING_RESET_POINTINDEX');
			}else if(count === 6) {
				clearInterval(timer);
				commit('LOADING_AIMATIONOVER');
				if(!asyncFlag) {
					commit('LOADING_DATAOVER');
				}
			}
		}, 750);
		commit('LOADING_EMOJICHECK');
	}
};

const mutations = {
	[types.LOADING_CHANGE_POINT] (state, param) {
		//state.points.push(state.emoji[state.pointsIndex++]);
		state.points.splice(state.pointsIndex, 1, state.emoji[state.pointsIndex++]);
	},
	[types.LOADING_RESET_POINTINDEX] (state) {
		state.pointsIndex = 0;
	},
	[types.LOADING_CHANGE_STATE] (state) {
		state.loadingState = !state.loadingState;
	},
	[types.LOADING_DATAOVER] (state) {
		state.dataover = true;
	},
	[types.LOADING_AIMATIONOVER] (state) {
		state.loadAnimationOver = true;
	},
	[types.LOADING_INITSTATE] (state) {
		state.loadAnimationOver = false;
		state.dataover = false;
		state.pointsIndex = 0;
		state.points.splice(0, 5, `•`, `•`, `•`, `•`, `•`);
	},
	[types.LOADING_EMOJICHECK] (state) {
		state.emoji = EMOJI[state.emojiIndex];
		state.emojiIndex++;
		if(state.emojiIndex >= EMOJI.length) {
			state.emojiIndex = 0;
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}