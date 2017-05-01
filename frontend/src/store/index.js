import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import * as getters from './getters'
import { mutations } from './mutations'
import { state } from './state'
import test from './modules/test'
import questionText from './modules/question-text'
import questionGoal from './modules/question-goal'
import questionRadio from './modules/question-radio'
import EQ from './modules/editing-question'
import questionNaire from './modules/questionnaire'
import loading from './modules/loading.js';
/*import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../../../src/plugins/logger'*/

Vue.use(Vuex)

console.log('store', actions, getters, state, mutations)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  	questionText,
  	questionGoal,
  	questionRadio,
    EQ,
  	questionNaire,
  	loading,
  },
  strict: debug
})
