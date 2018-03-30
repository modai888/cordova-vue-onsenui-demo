/**
* 品牌列表页面
*/

<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">品牌选择</div>
            <div class="right">
                <v-ons-toolbar-button @click="pop">
                    完成
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <p style="text-align: center">这里是品牌选择页</p>
    </v-ons-page>
</template>

<script>
    export default {
        // 导航选项，控制当前页面的导航方式
        navigatorOptions: {
            animation: 'lift-gs'
        },
        name: 'brands-page',

        methods: {
            pop(){
                this.$emit('pop-page');
            }
        },

        mounted(){

        }
    }
</script>

<style>

</style>