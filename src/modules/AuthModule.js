export const AuthModule = {
	namespaced: true,
	state: {
		requestedHandshake: false,
		authenticated: false
	},

	actions: {
		/**
		* Calls `UPDATE_HANDSHAKE_STATUS` mutator.
		*/
		updateHandshakeStatus({commit}, status) {
			commit('UPDATE_HANDSHAKE_STATUS', status);
		},

		/**
		* Calls `UPDATE_AUTHENTICATED_STATUS` mutator.
		*/
		updateAuthenticatedStatus({commit}, status) {
			commit('UPDATE_AUTHENTICATED_STATUS', status);
		}
	},

	mutations: {
		UPDATE_HANDSHAKE_STATUS(state, status) {
			state.requestedHandshake = status;
		},

		UPDATE_AUTHENTICATED_STATUS(state, status) {
			state.authenticated = status;
		}
	}
};