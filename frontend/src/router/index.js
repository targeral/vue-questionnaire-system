import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../home/home'
import Admin from '../admin/admin'
import Help from '../admin/help/help'
import EditQuestionNaire from '../admin/editq/editq'
import Center from '../admin/center/center';
import Login from '../admin/login/login';
import Register from '../admin/register/register';
import Published from '../published/published'
import Preview from '../published/preview/preview'

console.log('this is router')
Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/admin', component: Admin, 
		children: [
			{ path: 'help', component: Help },
			{ path: 'create', component: EditQuestionNaire },
			{ path: 'edit/:id', component: EditQuestionNaire },
			{ path: 'center', component: Center },
			{ path: 'login', component: Login },
			{ path: 'register', component: Register },
		]
	},
	{ path: '/published', component: Published,
		children: [
			{ path: 'preview/:id', component: Preview },
		]
	}
];

export default new VueRouter({
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	},
})