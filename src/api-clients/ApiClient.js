import {ApiClientFactory} from '@/ApiClientFactory';

let clientFactory = new ApiClientFactory('https://platform.whereismytransport.com/api');

export const ApiClient = {

	/**
	 * Returns information about a journey from route A to route B.
	 * 
	 * param {data}
	 */
	getTrips(data) {
		return clientFactory.post('/journeys', data, {'Accept': 'application/json'});
	}

};