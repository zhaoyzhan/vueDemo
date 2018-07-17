<template>
	<div class="listone list-container" id="listone">
		<div style="z-index: 1; position: absolute; top: 0px; padding: 10px;">
	</div>
	</div>
</template>
<script>
	export default {
		mounted() {
			// console.log(this.map(), '33');
			// try {
			// 	this.map()
			// } catch(e) {
			// 	// G.ready(this.map)
			// 	console.log(e);
			// }
			this.map();
		},
		beforeDestroy() {
			// console.log('er');
		},
		methods: {
			map() {
				// G.ready(function() {
					let map = new G.Map('listone', {
						minRes: 0.298582, //地图最小分辨率
						maxRes: 156543.033928, //地图最大分辨率
						maxExtent: [-20037508.342784, -20037508.342784, 20037508.342784, 20037508.342784],
						zoomAnim: true, //缩放时是否支持动画效果
						panAnim: true, //拖拽时是否支持惯性移动
						hideLogo: true, //是否隐藏Logo
						recordStatus: true, //是否在浏览器历史中记录每一次更新的状态
						wrap: true, //是否显示环绕地图
						continuouslyZoom: false, //是否允许无极缩放
						initStatus: { //地图初始状态
							center: [12673975, 4079823],  //地图中心
							res: 4891.9698105, //分辨率
							rotate: 0 //旋转角度
						}
					});
					let tileLayer = new G.Layer.Tile('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
						cluster: ['a', 'b', 'c']
					});
					tileLayer.addTo(map);
				// })
			}
		}
	}
</script>

<style scoped>
	.listone{
		position: absolute;
    	bottom: 0;
    	top: 0;
    	right: 0;
    	left: 200px;
	}
	.list-container {
		margin-top: 60px;
	}
</style>