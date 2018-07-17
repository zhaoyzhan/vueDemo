<template>
	<div class="home-container">
		<SideBarList/>	
		  <keep-alive>
      		<router-view v-if="$route.meta.keepAlive"></router-view>
    	</keep-alive>
    	<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>
<script>
	import SideBarList from './sidebar.vue'
	export default {
	  name: 'app',
	  components: {
	  	SideBarList
    },
    mounted() {
      let script = document.createElement('script');
      script.type="text/javascript";
      script.src="http://dist.geohey.com/g-js/latest/lib/g.min.js";　
      document.body.appendChild(script);
    },
    watch: {
      $route (val,val1) {
      }
    }
	}
</script>

<style scoped>
	.home-container {
		padding-left: 200px;
	}
</style>