<template>
	<div class="login-container">
		<button @click="_login">登录</button>
	</div>
</template>
<script>
	export default {
	  name: 'app',
	  methods: {
	  	_login() {
	  		this.$router.push({path:'/home'})
	  	}
	  }
	}
</script>

<style>
	
</style>