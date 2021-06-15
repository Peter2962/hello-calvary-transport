import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home
		},
		{
			name: 'auth.login',
			path: '/login',
			component: Login
		},
		{
			name: 'auth.register',
			path: '/register',
			component: Register
		}
	]
});