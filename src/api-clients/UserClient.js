import {ApiClientFactory} from '@/ApiClientFactory';

let clientFactory = new ApiClientFactory();

export const UserClient = {

	/**
	* Gets and returns a user.
	*/
	get() {
		return clientFactory.get('/user');
	}

}