import Router from '@/Router';
import {Store} from '@/Store';
import Functions from '@/Functions';
import {AUTH_ROUTES, AUTH_DEFAULT_ROUTE} from '@/Config';

export const beforeRoute = Router.beforeEach((to, from, next) => {
	Store.watch(state => {
		/*
		* If an authentication handshake has occured, check if
		* user is authenticated or not. If yes, continue to page.
		* And if no, go to login page.
		*/
		if (state.auth.requestedHandshake == true) {
			if (state.auth.authenticated == false) {
				Functions.log('Authentication failed....');
				if (to.name !== 'auth.login') {
					Router.push('/login');
				}
			}else{				
				/*
				* If route is an authentication route, go to homepage instead.
				*/
				Functions.log('Authentication passed....');
				if (AUTH_ROUTES.indexOf(to.name) > -1) {
					Router.push(AUTH_DEFAULT_ROUTE);
				}

				next();
			}
		}
		
		next();
	});
});