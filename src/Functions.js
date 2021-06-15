import {Store} from './Store';

export default {
	log: (info) => {
		if (Store.state.app.allowLogging) {
			console.log(info);
		}
	}
};