<template>
	<div class="listtwo list-container">
		<div>
			<button @click="BDD()">编辑点</button>
			<button @click="JBD()">取消点</button>
			<input type="button" class="button" value="开始编辑圆" @click="startEditCircle()"/>
    		<input type="button" class="button" value="结束编辑圆" @click="closeEditCircle()"/>
			<input v-model="inputVal" type="text"></input>
			<button @click="_search()">搜索</button>
		</div>
		<div id="listtwocon" style="width:500px; height:300px"></div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import AMap from 'AMap'
	// import AMapGeoHey from 'AMapGeoHey'
	var map;
	export default {
		data() {
			return {
				map: null,
				circleEditor: {},
				circle: null,
				pointArr: [],
				circleArr: [],
				inputVal: '',
				placeSearch: null
			}
		},
		mounted() {
			// console.log(AMapGeoHey);
			// this.editor = {};
			this.init();
		},
		created() {
			/* eslint-disable */
			// var GAPI = require('GAPI');
			// GAPI.init('NjM5OWQwMGJhN2YyNDg2MmFhOTViYzdiOTExMGFiZTQ'); // 浏览器访问凭证
	  //       GAPI.geocoding.geocode('鼓楼', {
	  //           admin: '北京'
	  //       }, function(data) {
	  //           console.log(data);
	  //       }, function(error) {
	  //           console.error(error);
	  //       });
		},
		beforeDestroy() {
			// 销毁地图，并清空地图容器
			if(this.map) {
				this.map.destroy();
				this.map = null;
			}
		},
		methods: {
			init() {
				map = new AMap.Map('listtwocon', {
					center: [116.397428, 39.90923],
					resizeEnable: true,
					zoom: 13
				});
				// map.plugin( [ "AMap.Heatmap" ], function() {
				//     AMapGeoHey.MapViz.get( '4229f22d186a456781ba4873db04e14c', {
				//         host: 'http://geohey.com',                          // 数据请求地址
				//         ak: 'OTJlMGUxMGNkYTUzNGZhY2FlN2I2M2UzOGQ5ZWVhMTU',  // API Key
				//         tileHost: 'http://{s}.geohey.com',                  // 瓦片请求地址
				//         cluster: [ 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8' ] // 瓦片服务器集群
				//     }, null, function(data) {
				//     	console.log(data);
				//     })
				// });
			    map.setFitView();
			    this.map = map;
			},
			//绑定点
			BDD(e) {
				this.map.on('click', this._pointer);
			},
			//取消点
			JBD(e) {
				// console.log(this.pointArr[0]);
				this.map.off('click', this._pointer);
				this.map.remove(this.pointArr);
				this.pointArr = [];
			},
			_pointer(e) {
				let map = this.map;
				let marker = new AMap.Marker({
		            position: e.lnglat,
		            map: map,
		        });
		        this.pointArr.push(marker);
			},
			_mapClick(e) {
				// console.log(e.lnglat.lng, e.lnglat.lat);
				let map = this.map;
				this.map.plugin(["AMap.CircleEditor"], () => {   
			    	let circle = new AMap.Circle({
			        	center: [e.lnglat.lng, e.lnglat.lat],// 圆心位置
		      			radius: 1000, //半径
			        	strokeColor: "#F33", //线颜色
			        	strokeOpacity: 1, //线透明度
			       		strokeWeight: 3, //线粗细度
			       	 	fillColor: "#ee2200", //填充颜色
			        	fillOpacity: 0.35//填充透明度
			    	});
			    	this.circleArr.push(circle);
			    	this.circle = circle;
			        circle.setMap(map);
			        let circleEditor = new AMap.CircleEditor(this.map, circle);   //创建圆形编辑器对象
			        // circleEditor.

			        this.circleEditor = circleEditor;
			        circleEditor.open();    //打开圆形编辑器
			    });
			},
			//画圆
			startEditCircle() {
				this.map.off('click', this._pointer);
				this.map.remove(this.pointArr);
				this.pointArr = [];
				this.map.on('click', this._mapClick);
			},
			closeEditCircle() {
				this.map.off('click', this._mapClick);
				if(this.circleEditor) {
					alert('圆心坐标' + this.circle.getCenter() + '-' + '半径' + this.circle.getRadius());
					this.circleEditor.close();
					this.circleEditor = null;
					// this.map.remove(this.circleArr);
					this.circleArr = [];
				}
			},
			//搜索
			_search() {
				if(this.placeSearch) {
					this.init();
				}
				let inputVal = this.inputVal;
				let map = this.map
				AMap.service(["AMap.PlaceSearch"], () => {
			        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
			            pageSize: 5,
			            pageIndex: 1,
			            city: "010", //城市
			            map: map,
			            // panel: "panel"
			        });
			        this.placeSearch =  placeSearch;
			        //关键字查询
			        placeSearch.search(inputVal);
			    });
			}
		}
	}
</script>

<style scoped>
	.listtwo{
		color: green;
	}
	.list-container {
		margin-top: 60px;
	}
</style>