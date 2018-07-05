<template>
	<div class="home-container">
		<SideBarList/>	
		<router-view/>
	</div>
</template>
<script>
	import SideBarList from './sidebar.vue'
	export default {
	  name: 'app',
	  components: {
	  	SideBarList
	  }
	}
</script>

<style scoped>
	.home-container {
		padding-left: 200px;
	}
</style>