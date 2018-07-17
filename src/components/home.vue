<template>
	<div class="home-container">
		<SideBarList/>	
		<!-- <keep-alive>
      		<router-view v-if="$route.meta.keepAlive"></router-view>
    	</keep-alive> -->
    	<!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    	<router-view></router-view>
	</div>
</template>
<script src="http://dist.geohey.com/g-js/latest/lib/g.min.js"></script>
<script>
	import SideBarList from './sidebar.vue'
	export default {
	  name: 'app',
	  components: {
	  	SideBarList
    },
    mounted() {
      // console.log(this.$route.meta.keepAlive, 'home')
    },
    watch: {
      $route (val,val1) {
        // console.log(val.meta.keepAlive, 'home')
        // console.log(val1.meta.keepAlive, 'home')
      }
    }
	}
</script>

<style scoped>
	.home-container {
		padding-left: 200px;
	}
</style>