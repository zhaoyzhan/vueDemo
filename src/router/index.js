import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login'
// import Home from '@/components/home'
// import HelloWorld from '@/components/HelloWorld'
// import ChildVue from '@/components/ChildVue'
// import SecondBar from '@/components/SecondBar'

// import List from '@/components/list'
// import ListOne from '@/components/listone'
// import ListTwo from '@/components/listtwo'
// import ListThree from '@/components/listthree'

// let ListThree = require('../components/listthree')

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
		path: '/login',
		name: 'login',
		component: resolve => require(['@/components/login'], resolve),
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
		// component: Home,
		component: resolve => require(['@/components/home'], resolve),
		children: [{
			path: '',
			// meta: {
			// 	requireAuth: true
			// },
			component: resolve => require(['@/components/HelloWorld'], resolve),
			// component: HelloWorld,
		}, {
			path: '/childVue',
			// meta: {
			// 	requireAuth: true
			// },
			component: resolve => require(['@/components/ChildVue'], resolve),
			// component: ChildVue,
			meta: {
				keepAlive: false
			}
		}, {
			path: '/secondBar',
			// meta: {
			// 	requireAuth: true
			// },
			// component: SecondBar,
			component: resolve => require(['@/components/SecondBar'], resolve),
			meta: {
				keepAlive: false
			}
		}, {
			path: '/list',
			// component: List,
			component: resolve => require(['@/components/List'], resolve),
			children: [{
				path: '',
				component: resolve => require(['@/components/listone'], resolve),
				// component: ListOne,
				meta: {
					keepAlive: true
				}
			}, {
				path: '/listone',
				// component: ListOne,
				component: resolve => require(['@/components/listone'], resolve),
				meta: {
					keepAlive: true
				}
			}, {
				path: '/listtwo',
				// component: ListTwo,
				component: resolve => require(['@/components/listtwo'], resolve),
				meta: {
					keepAlive: false
				}
			}, {
				path: '/listthree',
				// component: ListThree,
				component: resolve => require(['@/components/listthree'], resolve),
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