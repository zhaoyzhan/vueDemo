<template>
	<div class="list-container">
		<Listbarlist />
		<router-view/>
	</div>
</template>

<script>
	import Listbarlist from './list-bar.vue'
 	export default {
 		methods: {
			  // editor._circle=(function(){
			  //   var circle = new AMap.Circle({
			  //       center: [116.433322, 39.900255],// 圆心位置
			  //     	radius: 1000, //半径
			  //       strokeColor: "#F33", //线颜色
			  //       	strokeOpacity: 1, //线透明度
			  //      	 strokeWeight: 3, //线粗细度
			  //      	 fillColor: "#ee2200", //填充颜色
			  //       	fillOpacity: 0.35//填充透明度
			  //   	});
			  //       circle.setMap(map);
			  //       return circle;
			  //   })();
			  //   map.setFitView();
			  //   editor._lineEditor= new AMap.PolyEditor(map, editor._line);
			  //   editor._polygonEditor= new AMap.PolyEditor(map, editor._polygon);
			  //   editor._circleEditor= new AMap.CircleEditor(map, editor._circle);

			  //   editor.startEditLine=function(){
			  //       editor._lineEditor.open();
			  //   }
			  //   editor.closeEditLine=function(){
			  //       editor._lineEditor.close();
			  //   }

			  //   editor.startEditPolygon=function(){
			  //       editor._polygonEditor.open();
			  //   }
			  //   editor.closeEditPolygon=function(){
			  //       editor._polygonEditor.close();
			  //   }

			  //   editor.startEditCircle=function(){
			  //       editor._circleEditor.open();
			  //   }
			  //   editor.closeEditCircle=function(){
			  //       editor._circleEditor.close();
			  //   }
 		},
		components: {
			Listbarlist
		}
	}
</script>

<style scoped>
	
</style>