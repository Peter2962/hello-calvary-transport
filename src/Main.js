import Vue from 'vue';
import Router from './Router';
import {Store} from './Store';
import VueCookie from 'vue-cookie';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import {AuthClient} from '@/api-clients/AuthClient';
import {beforeRoute} from './middlewares/AuthMiddleware';
import MapSearchAutocomplete from '@/components/MapSearchAutocomplete';

Vue.use(VueCookie);
Vue.component('map-search-auto-complete', MapSearchAutocomplete);

window.jQuery = window.$ = require('jquery');

new Vue({
	el: '.app-zcirfeu52g',
	store: Store,
	router: Router,
	components: {
		Loader,
		'v-header': Header
	},
	mounted() {
		Store.dispatch('auth/updateAuthenticatedStatus', true);
		Store.dispatch('auth/updateHandshakeStatus', true);

		// AuthClient.getToken().then((response) => {
		// 	// We're setting the authentication status to true here
		// 	// because we don't need security for this web-app.
		// 	Store.dispatch('auth/updateAuthenticatedStatus', true);
		// 	Store.dispatch('auth/updateHandshakeStatus', true);

		// 	console.log(response.data);
		// }).catch((err) => {
		// 	console.log(err);
		// });
		// AuthClient.check().then((response) => {
		// 	Store.dispatch('auth/updateAuthenticatedStatus', true);
		// 	Store.dispatch('auth/updateHandshakeStatus', true);
		// }).catch((error) => {
		// });
	}
});