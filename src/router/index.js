import Vue from 'vue'
import Router from 'vue-router'

//import GoodsList from '@/views/GoodsList'//两种方法都可以
import GoodsList from './../views/GoodsList'
import Cart from './../views/Cart'

import Title from '@/views/Title'
import Image from '@/views/Image'

Vue.use(Router)

export default new Router({
  //mode:'hash',默认是这种http://localhost:8080/#/goods/1999999999999/user/qqq
  mode:'history',//http://localhost:8080/goods/1999999999999/user/qqq
  routes: [
    /*{
      path: '/goods/:goodsId',//必须http://localhost:8080/#/goods/199999这样访问
      path: '/goods/:goodsId/user/:name',//必须http://localhost:8080/#/goods/19aa/user/me这样访问
      name: 'GoodsList',
      component: GoodsList
    }*/
    {
      // path: '/goods',
      path:'/',
      name: 'GoodsList',
      // component: GoodsList,
      // children:[
      //   {
      //     path:'title',//访问方法/goods/title
      //     name:'title',
      //     component:Title
      //   },
      //   {
      //     path:'img',//访问方法/goods/img
      //     name:'img',
      //     component:Image
      //   }
      // ]

      components:{
        default:GoodsList,
        title:Title,
        img:Image
      }
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart,
    }
  ]
})