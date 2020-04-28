<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="title"></router-view>
    <router-view name="img"></router-view>
    <p>默认值：<strong>{{num}}</strong></p>
    <hr>
    <tongxun v-bind:num="num" @creatplus="creatplus" @creatminus="creatminus"></tongxun>
    <hr>
  </div>
</template>

<script>
import tongxun from './components/test/tongxun'
export default {
  name: 'App',
  data(){
    return {
      num:10
    }
  },
  components:{
    tongxun
  },
  methods:{
    creatplus(){
      this.num++
    },
    creatminus(){
      this.num--
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
