<template>
	<div class="login-container">
		<button @click="_login">登录</button>
	</div>
</template>
<script>
	export default {
	  name: 'app',
	  mounted() {
	  	let script = document.getElementsByTagName('script');
	  	for(let i= 0; i< script.length; i++) {
	  		if(script[i].src === 'http://dist.geohey.com/g-js/latest/lib/g.min.js') {
	  			document.getElementsByTagName('body')[0].removeChild(script[i]);
	  		}
	  	}
	  },
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