import Vue from 'vue';
import Vuex from 'vuex';
import {UserModule} from './modules/UserModule';
import {AppModule} from './modules/AppModule';
import {AuthModule} from './modules/AuthModule';
import {ProcessModule} from './modules/ProcessModule';
import {LoaderModule} from './modules/LoaderModule';

Vue.use(Vuex);

export const Store = new Vuex.Store({
	modules:  {
		user: UserModule,
		app: AppModule,
		auth: AuthModule,
		process: ProcessModule,
		loader: LoaderModule
	}
});