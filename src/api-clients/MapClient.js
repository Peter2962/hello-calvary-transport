import {RADAR_PUBLISHABLE_KEY} from '@/Config';
import {ApiClientFactory} from '@/ApiClientFactory';

let clientFactory = new ApiClientFactory('https://api.radar.io/v1/');

export const MapClient = {

	/**
	 * Geocodes an address, converting address to coordinates.
	 * param {location}
	 */
	getLocation(location) {
		return clientFactory.get(`geocode/forward?query=${location}`, {}, {'Authorization': RADAR_PUBLISHABLE_KEY});
	}

}