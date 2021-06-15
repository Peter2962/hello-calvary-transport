export const LoaderModule = {
	namespaced: true,

	state: {
		show: false
	},

	actions: {
		/**
		* Calls `SHOW_LOADER` mutator.
		*/
		show({commit}, params) {
			commit('SHOW_LOADER', true);
		},

		/**
		* Calls `HIDE_LOADER` mutator.
		*/
		hide({commit}, params) {
			commit('HIDE_LOADER', false);
		}
	},

	mutations: {
		SHOW_LOADER(state) {
			state.show = true;
		},

		HIDE_LOADER(state) {
			state.show = false;
		}
	}
};