<template>
	<div class="con">
		<router-link to="/">返回</router-link>
		<p>{{num}}</p>
		<button @click="add(1)">+1</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		mounted() {
			// console.log(this.$store.state);
		},
		methods: {
			add(num) {
				// console.log(num);
				this.$store.dispatch('childVue/addNum', num);
			}
		},
		computed: {
			num () {
				return this.$store.state.childVue.num;
			}
		}
	}
</script>

<style scoped>
	
</style>