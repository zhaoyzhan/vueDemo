<template>
	<div class="sidebar-container">
		<ul>
			<li v-for="(item, index) in sidebarList" :key="index">
				<router-link :to="item.path">{{item.path}}</router-link>
			</li>
			<li @click="reback">返回</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sidebarList: [{
					path: 'home',
				}, {
					path: 'childVue',
				}, {
					path: 'secondBar',
				}, {
					path: 'list'
				}]
			}
		},
		beforeMount() {
			console.log('wwww');
		},
		methods: {
			reback() {
				this.$router.push({path:'/login'})
			}
		}
	}
</script>

<style scoped>
	.sidebar-container {
		position: fixed;
		left: -14px;
		top: 20px;
		width: 200px;
	}
	ul{
		list-style-type: none;
	}
	li {
		line-height: 50px;
		height: 50px;
		background: #ccc;
		cursor: pointer;
	}
	a{
		color: #fff;
		text-decoration: none;
	}
</style>