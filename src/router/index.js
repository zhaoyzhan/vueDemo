import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChildVue from '@/components/ChildVue'
import SecondBar from '@/components/SecondBar'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: HelloWorld
	}, {
		path: '/helloWorld',
		component: HelloWorld
	}, {
		path: '/childVue',
		component: ChildVue
	}, {
		path: '/secondBar',
		component: SecondBar
	}]
})