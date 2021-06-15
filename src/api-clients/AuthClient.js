import {CLIENT_ID, CLIENT_SECRET} from '@/Config';
import {ApiClientFactory} from '@/ApiClientFactory';

let clientFactory = new ApiClientFactory('https://identity.whereismytransport.com/connect/token');

export const AuthClient = {

	login() {
		//
	},

	/**
	 * Retrieves a token using client_id and client_secret.
	 */
	getToken() {
		let data = {
			client_id: CLIENT_ID,
			clieint_secret: CLIENT_SECRET,
			grant_type: 'client_credentials',
			scope: 'transportapi:all'
		};
		return clientFactory.post(`/`, data, {'Content-Type': ' application/x-www-form-urlencoded'});
	}

}