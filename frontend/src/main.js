import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import accordion from './common/directives/accordion/accordion.directive'
import questionNumberFilter from './common/filters/questionNumber'

Vue.directive('accordion', accordion);
Vue.filter('questionNumber', questionNumberFilter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
});

