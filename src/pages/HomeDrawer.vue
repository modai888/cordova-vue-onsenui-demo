/**
* 首页，展示所选品牌和车型的总体信息
*/

<template>
    <v-ons-page>
        <div class="left-side__banner"
             @click="selectBrand">
            <img src="../assets/volvo-logo.png">
        </div>
        <v-ons-list modifier="noborder">
            <v-ons-list-header>功能导航</v-ons-list-header>
            <v-ons-list-item modifier="chevron" tappable>
                <div class="left">
                    <v-ons-icon icon="fa-tencent-weibo" fixed-width class="list-item__icon"></v-ons-icon>
                </div>
                <div class="center">
                    社交媒体
                </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="chevron" ripple>
                <div class="left">
                    <v-ons-icon icon="fa-fire" fixed-width class="list-item__icon"></v-ons-icon>
                </div>
                <div class="center">
                    热点事件
                </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="chevron">
                <div class="left">
                    <v-ons-icon icon="fa-bell-o" fixed-width class="list-item__icon"></v-ons-icon>
                </div>
                <div class="center">
                    预警中心
                </div>
            </v-ons-list-item>

            <v-ons-list-header>个人中心</v-ons-list-header>
            <v-ons-list-item modifier="chevron" tappable
                             @click="push">
                <div class="left">
                    <v-ons-icon icon="fa-newspaper-o" fixed-width class="list-item__icon"></v-ons-icon>
                </div>
                <div class="center">
                    我的消息
                </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="chevron" tap-background-color="#000000" tappable
                             @click="push">
                <div class="left">
                    <v-ons-icon icon="fa-star-o" fixed-width class="list-item__icon"></v-ons-icon>
                </div>
                <div class="center">
                    我的收藏
                </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="chevron" tappable
                             @click="push">
                <div class="left">
                    <v-ons-icon icon="fa-trash-o" fixed-width class="list-item__icon"></v-ons-icon>
                </div>
                <div class="center">
                    回收站
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-bottom-toolbar modifier="aligned transparent">
            <v-ons-button modifier="quiet">
                <v-ons-icon icon="fa-sign-out" size="24px"></v-ons-icon>
            </v-ons-button>
        </v-ons-bottom-toolbar>
    </v-ons-page>
</template>

<script>
    import BrandsPage from '../pages/Brands.vue'
    import SocialBuzzPage from '../pages/SocialBuzz.vue'

    export default {
        name: "home-drawer",
        data(){
            return {
                url: require('../assets/xc60.jpeg')
            }
        },
        inject: [ 'navigator' ],
        methods: {
            push() {
                this.$emit('parent-push', SocialBuzzPage)
            },
            selectBrand(){
                // this.navigator.pageStack.push(BrandsPage);
                this.$emit('push-page', BrandsPage)
            }
        },

        mounted(){
        }
    }
</script>

<style>
    @import "../css/home.css";
</style>