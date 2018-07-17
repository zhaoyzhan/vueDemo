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
	  		sessionStorage.setItem('token', '123')
	  		this.$router.push({path:'/home'})
	  	}
	  }
	}
</script>

<style>
	
</style>