<template>
	<div class="list-container">
		<Listbarlist />
		<router-view/>
	</div>
</template>

<script>
	import Listbarlist from './list-bar.vue'
 	export default {
		components: {
			Listbarlist
		}
	}
</script>

<style scoped>
	
</style>