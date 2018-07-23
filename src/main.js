// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'node_modules/geohey-javascript-sdk/dist/lib/g.css' // 样式
// import G from 'geohey-javascript-sdk'
// import 'geohey-javascript-sdk/dist/lib/g-canvas.js' // canvas模块
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


// 引入vue-amap
import AMap from 'vue-amap';
// var GAPI = require('GAPI');

Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
	// 申请的高德key
	key: 'ffc273390f3acbe2d5737809319d4dbd',
	// 插件集合
	plugin: ['']
});

// import 'node_modules/geohey-javascript-sdk/dist/lib/g.css' // 样式
// // import G from 'geohey-javascript-sdk'
// import 'geohey-javascript-sdk/dist/lib/g-canvas.js' // canvas模块

Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})