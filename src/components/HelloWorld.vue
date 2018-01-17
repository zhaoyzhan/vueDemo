<template>
  <div class="hello">
    <p class="link" @click="choseScroll" v-for="item in dataList">{{item}}</p>
    <router-link to="childVue" @click.native="showScroll" v-for="item in dataList" class="active">{{item}}</router-link>
    <router-link to="secondBar" class="active">点击哈哈</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: ['点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击','点击',]
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll)
    // window.onscroll = function() {
    //   let scroll = window.scrollTop
    //   console.log(this.scrollTop)
    //   localStorage.setItem('scroll', scroll)
    //   localStorage.scrollTop = scroll
    // }
  },
  methods: {
    // handleScroll () {
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   localStorage.setItem('scroll', scrollTop)
    // }
    showScroll() {
      // console.log()
      console.log(window.scrollY)
      localStorage.scroll = window.scrollY
    },
    choseScroll() {
      window.scrollTop = 1000
      console.log("22")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.link{
  background: #ccc;
  line-height: 20px;
}
.active{
  display: block;
}
</style>
