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
	mode: 'history',
	routes: [{
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/',
		redirect: '/home',
		meta: {
			requireAuth: true
		},
		beforeEnter(from, to, next) {
			next()
		}
	}, {
		path: '/home',
		name: 'home',
		meta: {
			requireAuth: true
		},
		beforeEnter(from, to, next) {
			next()
		},
		component: Home,
		children: [{
			path: '',
			// meta: {
			// 	requireAuth: true
			// },
			component: HelloWorld,
		}, {
			path: '/childVue',
			// meta: {
			// 	requireAuth: true
			// },
			component: ChildVue,
			meta: {
				keepAlive: false
			}
		}, {
			path: '/secondBar',
			// meta: {
			// 	requireAuth: true
			// },
			component: SecondBar,
			meta: {
				keepAlive: false
			}
		}, {
			path: '/list',
			component: List,
			children: [{
				path: '',
				component: ListOne,
				meta: {
					keepAlive: true
				}
			}, {
				path: '/listone',
				component: ListOne,
				meta: {
					keepAlive: true
				}
			}, {
				path: '/listtwo',
				component: ListTwo,
				meta: {
					keepAlive: false
				}
			}, {
				path: '/listthree',
				component: ListThree,
				meta: {
					keepAlive: false
				}
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
				path: "/login"
			})
		}
	} else {
		next()
	}
})

export default router;