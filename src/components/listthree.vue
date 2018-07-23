<template>
	<div class="listthree list-container">
		<div id="listthreecon" style="width:500px; height:300px"></div>
		<button @click="addItem()">添加</button>
		<button @click="deleteItem()">删除</button>
		<button @click="getData()">获取数据</button>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		mounted() {
			// this.getData();
			// console.log(GAPI);
			this.init();
		},
		methods: {
			init() {
				let map = new AMap.Map('listthreecon', {
					center: [116.397428, 39.90923],
					resizeEnable: true,
					zoom: 13
				});
				map.setFitView();
			},
			addItem() {
				// console.log(AMap);
				// let map = new AMap.Map('listthreecon', {
				// 	// center: [116.397428, 39.90923],
				// 	resizeEnable: true,
				// 	zoom: 13
				// });
				GAPI.geocoding.geocode('鼓楼', {
			        admin: '北京'
			    }, map, function(data) {
			        console.log(data);
			    }, function(error) {
			        console.error(error);
			    });
				// GAPI.data.add(
				//     'e097e38d0a284979a340f061e6d2e2b5',
				//     {
				//         // geom: [116.39, 39.9],
				//         attrs: {
				//             '省会': '天津'
				//         }
				//     },
				//     (data) => {console.log(data)},
				//     (error) => {console.error(error)}
				// );

				// GAPI.geocoding.admin(
				//     '朝阳',
				//     {
				//         parent:'北京'
				//     },
				//     function(data){console.log(data)},
				//     function(error){console.error(error, 'error')}
				// );
				// console.log(GAPI);
			},
			deleteItem() {
				// GAPI.data.delete(
				//     'e097e38d0a284979a340f061e6d2e2b5',
				//     1,
				//     function(data){console.log(data)},
				//     function(error){console.error(error)}
				// );
			},
			getData() {
				// GAPI.data.get(
				//     '48e9f5cfab83472b934a15802b7eb6a4',
				//     '1',
				//     {
				//         returnGeometry: true,
				//         outFields: "['name_chn']"
				//     },
				//     function(data){console.log(data)},
				//     function(error){console.error(error)}
				// );

				// GAPI.data.list(
				//     {
				//         search: '空气',
				//         page: 2,
				//         limit: 10
				//     },
				//     function(data){console.log(data)},
				//     function(error){console.error(error)}
				// );

				// GAPI.mapping.list(
				//     {
				//         search: '空气',
				//         page: 2,
				//         limit: 10
				//     },
				//     function(data){console.log(data)},
				//     function(error){console.error(error)}
				// );

			}
		}
	}
</script>

<style scoped>
	.listthree {
		color: yellow;
	}
	.list-container {
		margin-top: 60px;
	}
</style>