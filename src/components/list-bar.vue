<template>
	<div class="listbar-con">
		<ul>
			<li v-for="(item, index) in listbarlist" :key="index">
				<router-link :to="item.path">{{item.path}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listbarlist: [{
					path: 'listone'
				}, {
					path: 'listtwo'
				}, {
					path: 'listthree'
				}]
			}
		}
	}
</script>

<style scoped>
	ul {
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 200px;
	}
	li{
		float: left;
		list-style-type: none;
		padding: 0 30px;
		line-height: 40px;
		background: #ccc;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
</style>