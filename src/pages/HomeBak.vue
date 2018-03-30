/**
* 首页，展示所选品牌和车型的总体信息
*/

<template>
    <drawer-navigator-page
            title="XC60" ref="drawer"
            toolbar-modifier="noshadow transparent cover-content home"
            @switch-brand="selectBrand">

        <div slot="side">
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
        </div>

        <blur :blur-mount="20" :url="url">
            <gs-circle :opacity="1" modifier="logo" :size="120">
                <img :src="url">
            </gs-circle>
        </blur>

        <p style="text-align: center">
            <v-ons-button @click="push" modifier="large">Push Social-Buzz</v-ons-button>
            <br/>
            <v-ons-button @click="selectBrand" modifier="large">选择品牌</v-ons-button>
        </p>
    </drawer-navigator-page>
</template>

<script>
    import DrawerNavigatorPage from '../navigator/DrawerNavigatorPage.vue';
    import SocialBuzzPage from '../pages/SocialBuzz.vue'
    import BrandsPage from '../pages/Brands.vue'
    import Blur from '../components/Blur.vue'
    import GsCircle from '../components/GsCircle.vue'

    export default {
        name: "home",
        components: { DrawerNavigatorPage, Blur, GsCircle },
        data(){
            return {
                url: require('../assets/xc60.jpeg')
            }
        },
        inject: [ 'navigator' ],
        methods: {
            push() {
                // const { drawer } = this.$refs;
                // drawer.isOpen() && drawer.toggleSide();
                this.$emit('push-page', SocialBuzzPage)
            },
            selectBrand(){
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