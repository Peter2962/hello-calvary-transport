import axios from 'axios';
import {ACCESS_TOKEN, API_URL} from './Config';

let client = (baseUrl = null, additionalHeaders = {}) => {
	let accessToken = ACCESS_TOKEN;
	if (ACCESS_TOKEN == null) {
		accessToken = '';
	}

	let defaultHeaders = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'		
	};

	if (accessToken.length > 0) {
		defaultHeaders['Authorization'] = 'Bearer ' + accessToken;
	}

	let axiosOptions = {
		baseURL: baseUrl,
		headers: {...defaultHeaders, ...additionalHeaders}
	};

	return axios.create(axiosOptions);
};

class ApiClientFactory {
	constructor(baseUrl = null) {
		if (baseUrl == null) {
			baseUrl = API_URL;
		}

		this.baseUrl = baseUrl;
	}

	get(url, requestData = {}, headers = {}) {
		return client(this.baseUrl, headers).get(url, requestData);
	}

	post(url, requestData = {}, headers = {}) {
		return client(this.baseUrl, headers).post(url, requestData);
	}

	put(url, requestData = {}, headers = {}) {
		return client(this.baseUrl, headers).put(url, requestData);
	}

	delete(url, requestData = {}, headers = {}) {
		return client(this.baseUrl, headers).delete(url, requestData);
	}
}

export {ApiClientFactory};