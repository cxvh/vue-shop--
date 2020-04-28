<template>
    <div>
        这是商品列表页面
        <!-- <p><strong>{{$route.params.goodsId}}</strong></p>
        <p><strong>{{$route.params.name}}</strong></p> -->
        <!-- <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/img">显示商品图片</router-link>
        <div>
            展示子组件内容
            <router-view></router-view>
        </div> -->
        <hr>
        
        <router-link v-bind:to="{name:'cart',params:{cartId:123333}}">显示购物车页面</router-link>
        <button @click="jump">btn=显示购物车页面</button>
    </div>
</template>

<script>
    export default {
        props:['num'],
        data () {
            return {
                //num:0不注释会报错
            }
        },
        methods:{
            jump(){
                //this.$router.push({path:'/cart?goodsId=123'})
                this.$router.push('/cart?goodsId=12311')
            }
        }
    }
</script>

<style>
    
</style>