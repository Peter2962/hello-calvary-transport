export const ProcessModule = {
	namespaced: true,

	state: {
		running: false,
		processes: {}
	},

	actions: {
		/**
		* Calls `DISPATCH_PROCESS` mutator.
		*/
		dispatchProcess({commit}, params) {
			commit('DISPATCH_PROCESS', params);
		},

		/**
		* Calls `REWORK_PROCESS` mutator.
		*/
		reworkProcess({commit}, params) {
			commit('REWORK_PROCESS', params);
		}
	},

	mutations: {
		/**
		* Registers and dispatches a process with an id.
		*/
		DISPATCH_PROCESS(state, params) {
			let id = params.processId;
			let action = params.action;
			let debug = params.debug ? true : false;

			if (state.processes[id] != undefined) {
				if (state.processes[id].running) {
					if (debug) {
						console.log('Process: [' + id + '] busy.');
					}
					return;
				}
				return action(state.processes[id].reset);
			}

			if (state.processes[id] == undefined) {
				state.processes[id] = {
					running: true,
					action: action,
					reset: (clearRetries = false) => {
						state.processes[id].running = false;
					},
					retries: 0,
					retryThread: null
				};

				return state.processes[id].action(state.processes[id].reset);
			}
		},

		/**
		* Re-runs a process with the processId only if the provided
		* condition is true.
		*/
		REWORK_PROCESS(state, params) {
			let waitTime = (params.time * 1000),
			id = params.processId,
			retry = params.retry;

			if (state.processes[id] != undefined) {
				let process = state.processes[id];
				if (retry == true) {
					// Let's just make the retry stop at 1 for now.
					if (process.retries == 1) {
						process.reset();
						return;
					}

					process.retries++;
					process.action(process.reset);
				}
			}
		}
	}
};