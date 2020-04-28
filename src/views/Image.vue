<template>
    <div>
        这是商品图片的组件
    </div>
</template>

<script>
    export default {
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