/**
* 首页左侧导航菜单
*/
<template>
    <v-ons-page modifier="with-banner">
        <div class="left-side__banner"
             @click="push('SideBrandsMenu')">
            <img src="../assets/volvo-logo.png">
        </div>

        <div class="content">
            <v-ons-list modifier="noborder">
                <v-ons-list-header>功能导航</v-ons-list-header>
                <v-ons-list-item modifier="chevron" tappable
                                 @click="bubble('SocialBuzzPage')">
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
                                 @click="bubble('SocialBuzzPage')">
                    <div class="left">
                        <v-ons-icon icon="fa-newspaper-o" fixed-width class="list-item__icon"></v-ons-icon>
                    </div>
                    <div class="center">
                        我的消息
                    </div>
                </v-ons-list-item>
                <v-ons-list-item modifier="chevron" tappable
                                 @click="bubble('SocialBuzzPage')">
                    <div class="left">
                        <v-ons-icon icon="fa-star-o" fixed-width class="list-item__icon"></v-ons-icon>
                    </div>
                    <div class="center">
                        我的收藏
                    </div>
                </v-ons-list-item>
                <v-ons-list-item modifier="chevron" tappable
                                 @click="bubble('SocialBuzzPage')">
                    <div class="left">
                        <v-ons-icon icon="fa-trash-o" fixed-width class="list-item__icon"></v-ons-icon>
                    </div>
                    <div class="center">
                        回收站
                    </div>
                </v-ons-list-item>
            </v-ons-list>
        </div>

        <v-ons-bottom-toolbar modifier="aligned transparent">
            <v-ons-icon icon="fa-sign-out" size="24px"></v-ons-icon>
            <!--<v-ons-button modifier="quiet">-->
            <!--<v-ons-icon icon="fa-sign-out" size="24px"></v-ons-icon>-->
            <!--</v-ons-button>-->
        </v-ons-bottom-toolbar>
    </v-ons-page>
</template>

<script>
    import SideBrandsMenu from './SideBrandsMenu.vue'
    // import SocialBuzzPage from '../social-buzz/social-buzz-page.vue'

    export default {
        name: "home-side-root-menu",
        data() {
            return {
                routes: {
                    SideBrandsMenu,
                    SocialBuzzPage: () => import('../social-buzz/social-buzz-page')
                }
            }
        },
        inject: [ 'menuNavigator' ],
        methods: {
            push(page) {
                this.$emit('push-page', this.routes[ page ])
            },
            bubble(page) {
                this.menuNavigator.bubble(this.routes[ page ]);
            }
        }
    }
</script>

<style>
    @import "../css/home.css";
</style>