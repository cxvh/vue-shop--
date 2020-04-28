<template>
    <div>

        <strong>这是购物车页面 {{$route.query.goodsId}}</strong>
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
            plus(){
                //this.num++
                this.$emit('creatplus')
            },
            minus(){
                //this.num--
                this.$emit('creatminus')
            }
        }
    }
</script>

<style>
    
</style>