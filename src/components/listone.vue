<template>
	<div class="list-container">
		<div class="listone" id="listone"></div>
		<div style="z-index: 1; position: absolute; top: 70px; padding: 10px;">
			<button style="position: absolute, top: 0, left: 0" @click="showFun()">点击</button>
				<div class="btn-group-vertical">
				<button type="button" class="btn btn-default" @click="zoomIn()">+</button>
				<button type="button" class="btn btn-default" @click="zoomOut()">-</button>
				<button type="button" class="btn btn-default" @click="_circle()">圆</button>
				<button type="button" class="btn btn-default" @click="_point()">点</button>
				<button type="button" class="btn btn-default" @click="_polyline()">线</button>
				<button type="button" class="btn btn-default" @click="_freepolyline()">手绘线</button>
				<button type="button" class="btn btn-default" @click="_polygon()">多边形</button>
				<button type="button" class="btn btn-default" @click="_freepolygon()">手绘多边形</button>
				<button type="button" class="btn btn-default" @click="_rect()">矩形</button>
				<button type="button" class="btn btn-default" @click="_normalrect()">垂直矩形</button>
				<button type="button" class="btn btn-default" @click="_arrow()">箭头</button>
				<button type="button" class="btn btn-default" @click="_russ()">取消</button>
				<button type="button" class="btn btn-default" @click="_drawClear()">清除</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				mapCon: null,
				drawLayer: null,
				drawArr: []
			}
		},
		beforeMount() {
		},
		mounted() {
			let timer = setInterval(()=> {
				if(G) {
					// console.log(G.MapViz, '44');
					this.map();
					clearInterval(timer);
				}
			}, 200);
		},
		beforeDestroy() {
			if(this.mapCon) {
				this.mapCon.destroy();
				this.mapCon = null;
			}
		},
		methods: {
			map() {
				G.ready(() => {
					let map = new G.Map('listone', {
						minRes: 0.298582, //地图最小分辨率
						maxRes: 156543.033928, //地图最大分辨率
						maxExtent: [-20037508.342784, -20037508.342784, 20037508.342784, 20037508.342784],
						zoomAnim: true, //缩放时是否支持动画效果
						// dragPan: false,  
						panAnim: false, //拖拽时是否支持惯性移动
						hideLogo: true, //是否隐藏Logo
						recordStatus: true, //是否在浏览器历史中记录每一次更新的状态
						wrap: true, //是否显示环绕地图
						continuouslyZoom: false, //是否允许无极缩放
						// mask: true,
						// maskColor: '#000',
						// maskOpacity: 0.5,
						// topZIndex: 9999,
						// allowPan: true,
						initStatus: { //地图初始状态
							center: [215830.02046008888, 99328.4805741838],  //地图中心
							res: 4891.9698105, //分辨率
							rotate: 0 //旋转角度
						}
					});

					let tileLayer = new G.Layer.Tile('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
						cluster: ['a', 'b', 'c']
					});

					// G.loadModules( [ 'heat', 'maps', 'fluid', 'mapviz' ], function() {
					//     G.MapViz.get( '4229f22d186a456781ba4873db04e14c', {
					//         host: 'http://geohey.com',                          // 数据请求地址
					//         ak: 'OTJlMGUxMGNkYTUzNGZhY2FlN2I2M2UzOGQ5ZWVhMTU',  // API Key
					//         tileHost: 'http://{s}.geohey.com',                  // 瓦片请求地址
					//         cluster: [ 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8' ] // 瓦片服务器集群
					//     }, map )

					// } );
					// let graphicLayer = new G.Layer.Graphic(); 
					// graphicLayer.addTo(map); 
					// var g = new G.Graphic.Point([116.39, 39.9], null, { 
					// 	shape: 'image', //图片类型的标识，也可以是text类型 
					// 	size: [25, 40], //图片大小 
					// 	offset: [-12, -40], //图片在X和Y方向上的偏移 
					// 	image: 'images/pin{i}.png', //图片路径 
					// 	clickable: true //可点击的标识 
					// }); 
					// g.addTo(graphicLayer); //将创建的点标识添加到图层里 

					map.bind('click', this.mapClick);
					map.bind('layerAdded', this._layerAdded);
					// map.bind('mousemove', this._mousemove);
					map.bind('mouseleave', this._mouseleave);
					//给地图绑定鼠标移动事件
					map.addListener('mousemove', this._showPopup);
					this.mapCon = map;
					tileLayer.addTo(map);
				});
			},
			_layerAdded(e) {
				// console.log(e, '444');
			},
			showFun() {
			},
			//放大
			zoomIn() {
				this.mapCon.zoomIn();
			},
			//缩小
			zoomOut() {
				this.mapCon.zoomOut();
			},
			//点击地图
			mapClick(e) {
				this.mapCon.hidePopup();
			},
			//显示气泡
			_showPopup(e) {
				this.mapCon.showPopup([e.mapX, e.mapY], [e.mapX, e.mapY]);
			},
			//鼠标离开地图
			_mouseleave(e) {
				// this.mapCon.removeListener('mousemove');
				if(this.mapCon) {
					this.mapCon.hidePopup();
				}
			},
			_draw() {
				//给地图解绑鼠标移动事件
				this.mapCon.removeListener('mousemove');
				if(this.drawLayer) {
					this.drawLayer.endDraw();
				}
				let drawLayer = new G.Layer.Draw();
				//将图例添加到地图上
				drawLayer.addTo(this.mapCon);
				//绑定画图的方法
				drawLayer.bind('drawStart', (e) => {
					// console.log(e.type, e);
					console.log(e, 'start');
				}).bind('draw', (e) => {
					// console.log(e.type, e);
				}).bind('drawEnd', (e) => {
					// console.log(drawLayer);
					// console.log(e.fillColor())
					console.log(drawLayer);
					console.log(e, 'end');
				});
				this.drawLayer = drawLayer;
			},
			//画圆
			_circle() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('circle', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//画点
			_point() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('point', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//线
			_polyline() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('polyline', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//手绘线
			_freepolyline() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('freepolyline', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//多边形
			_polygon() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('polygon', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//手绘多边形
			_freepolygon() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('freepolygon', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//矩形
			_rect() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('rect', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//垂直矩形
			_normalrect() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('normalrect', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//箭头
			_arrow() {
				G.loadModule('draw', () => {
					this._draw();
					this.drawLayer.startDraw('arrow', {fillColor: '#f00'});
					this.drawArr.push(this.drawLayer);
				});
			},
			//取消
			_russ() {
				this.mapCon.addListener('mousemove', this._showPopup);
				if(this.drawLayer) {
					//结束画图
					this.drawLayer.remove();
					this.drawLayer.endDraw();
					// console.log(this.drawLayer);
				}
			},
			//清除
			_drawClear() {
				this.mapCon.addListener('mousemove', this._showPopup);
				if(this.drawArr !== []) {
					for(let i= 0; i< this.drawArr.length; i++) {
						this.drawArr[i].remove();
					}
				}
				if(this.drawLayer) {
					//将图例从地图中清除
					this.drawLayer.remove();
					//结束
					this.drawLayer.endDraw();
					this.drawArr = [];
				}
			}
		}
	}
</script>

<style scoped>
	.listone{
		margin-top: 60px;
		position: absolute;
    	bottom: 80px;
    	top: 80px;
    	right: 250px;
    	left: 250px;
    	overflow: hidden;
	}
	.list-container {
		
	}
</style>