import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'
import ChildVue from '@/components/ChildVue'
import SecondBar from '@/components/SecondBar'

import List from '@/components/list'
import ListOne from '@/components/listone'
import ListTwo from '@/components/listtwo'
import ListThree from '@/components/listthree'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/',
		redirect: '/home',
		beforeEnter(from, to, next) {
			next()
		}
	}, {
		path: '/home',
		name: 'home',
		component: Home,
		children: [{
			path: '',
			component: HelloWorld
		}, {
			path: '/childVue',
			component: ChildVue
		}, {
			path: '/secondBar',
			component: SecondBar
		}, {
			path: '/list',
			component: List,
			children: [{
				path: '',
				component: ListOne
			}, {
				path: '/listone',
				component: ListOne
			}, {
				path: '/listtwo',
				component: ListTwo
			}, {
				path: '/listthree',
				component: ListThree
			}]
		}]
	}],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})

router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) {
		if (sessionStorage.token) {
			next()
		} else {
			next({
				path: "/"
			})
		}
	} else {
		next()
	}
})

export default router;