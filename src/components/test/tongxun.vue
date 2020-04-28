<template>
    <div>
        <button @click="plus">+</button>
        <button @click="minus">-</button>
        <p><strong>{{num}}</strong></p>
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