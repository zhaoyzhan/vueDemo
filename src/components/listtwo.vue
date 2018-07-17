<template>
	<div class="listtwo list-container">
		listtwo
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		mounted() {
			Vue.prototype.$http.post('/RMSClient/useradmin/login?password=d90b21c4a61992ff330bade33e84633d&userName=444',
			).then(
				function(res){
					console.log(res)
				}
			).catch(function(err) {
				console.log(err)
			})
		},
	}
</script>

<style scoped>
	.listtwo{
		color: green;
	}
	.list-container {
		margin-top: 60px;
	}
</style>