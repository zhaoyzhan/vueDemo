<template>
	<div class="searchBar" id="searchBar">
	  <ul class="top" :class="searchBarFixed == true ? 'isFixed' :''">
	    <li>区域<i class="iconfont icon-jiantouxia"></i></li>
	    <li>价格<i class="iconfont icon-jiantouxia"></i></li>
	    <li>房型<i class="iconfont icon-jiantouxia"></i></li>
	    <li>更多<i class="iconfont icon-jiantouxia"></i></li>
	  </ul>
	  <div class="txt" v-for="item in dataList">
			{{item}}	
	  </div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				dataList: ['123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123','123',],
				searchBarFixed: false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll () {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					var offsetTop = document.querySelector('#searchBar').offsetTop
					if (scrollTop > offsetTop) {
					  this.searchBarFixed = true
					} else {
					  this.searchBarFixed = false
					}
			}
		},
		destroyed () {
		  window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style scoped lang='less'>
	*{
		margin: 0;
		padding: 0;
	}
	.searchBar {
	 	.isFixed{
	    	position:fixed;
	    	background-color:#Fff;
	    	top:0;
	    	z-index:999;
	  	}
		ul {
		    width:100%;
		    height: 40px;
		    line-height: 40px;
		    display: flex;
		    li {
		      font-size: 0.8rem;
		      text-align: center;
		      flex: 1;
		      i {
		        font-size: 0.9rem;
		        padding-left: 5px;
		        color: #ccc;
		      }
		    }
		    border-bottom: 1px solid #ddd;
		}
	}
</style>