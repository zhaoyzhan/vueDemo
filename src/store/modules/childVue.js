export default {
	namespaced: true,
	state: {
		num: 1
	},
	mutations: {
		addnum(state, num) {
			state.num = state.num + num;
		}
	},
	actions: {
		addNum(contxt, num) {
			// console.log(num, 'nummm');
			contxt.commit("addnum", num)
		}
	}
}