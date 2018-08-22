import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ChildVue from './modules/childVue';

const vuex_store = new Vuex.Store({
	modules: {
		childVue: ChildVue
	}
})

export default vuex_store