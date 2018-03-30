/**
* 首页
*/
<template>
    <v-ons-page>
        <v-ons-splitter>
            <v-ons-splitter-side swipeable collapse width="320px" side="left"
                                 :open.sync="openSide">

                <gs-navigator-menu :root-page="sideRootMenu"
                                   @bubble-push="push">
                </gs-navigator-menu>

            </v-ons-splitter-side>

            <v-ons-splitter-content>
                <v-ons-page>
                    <v-ons-toolbar modifier="noshadow transparent cover-content home">
                        <div class="left">
                            <v-ons-toolbar-button @click="openSide=true">
                                <v-ons-icon icon="ion-volvo"></v-ons-icon>
                            </v-ons-toolbar-button>
                        </div>
                        <div class="center">{{title}}</div>
                    </v-ons-toolbar>

                    <gs-blur :blur-mount="20" :url="url">
                        <gs-circle :opacity="1" modifier="logo" :size="120">
                            <img :src="url">
                        </gs-circle>
                    </gs-blur>

                    <p style="text-align: center">
                        <v-ons-button @click="push()" modifier="large">Push Social-Buzz</v-ons-button>
                        <br/>
                        <v-ons-button @click="selectBrand" modifier="large">选择品牌</v-ons-button>
                    </p>

                    <gs-section header="异步导航">
                        <v-ons-button @click="navAsync" modifier="large">导航异步组件</v-ons-button>
                    </gs-section>

                </v-ons-page>
            </v-ons-splitter-content>
        </v-ons-splitter>
    </v-ons-page>
</template>

<script>
    import GsNavigatorMenu from '../components/GsNavigatorMenu.vue'
    import GsBlur from '../components/GsBlur.vue'
    import GsCircle from '../components/GsCircle.vue'
    import SideRootMenu from './SideRootMenu.vue'
    import SocialBuzzPage from '../pages/SocialBuzz.vue'
    import BrandsPage from '../pages/Brands.vue'
    import GsSection from "../components/GsSection";

    const BrandsAsyncPage = () => import('../pages/BrandsAsync')

    export default {
        components: {
            GsSection,
            GsNavigatorMenu, GsBlur, GsCircle
        },
        name: "home-page",
        data() {
            return {
                sideRootMenu: SideRootMenu,
                title: '首页',
                url: require('../assets/xc60.jpeg'),
                openSide: false
            }
        },
        inject: [ 'navigator' ],
        methods: {
            push($event) {
                // this.$emit('push-page', $event || SocialBuzzPage)
                this.$store.dispatch('navigator/push', $event || SocialBuzzPage)
            },
            selectBrand() {
                // this.$emit('push-page', BrandsPage);
                this.$store.commit('navigator/options', {
                    animation: 'lift',
                    callback: () => {
                        this.$store.commit('navigator/options');
                    }
                });
                this.$store.commit('navigator/push', BrandsPage);
            },
            navAsync() {
                // this.$store.commit('navigator/push', BrandsAsyncPage);
                this.$store.dispatch('navigator/push', BrandsAsyncPage)
            }
        },
    }
</script>

<style>
    @import "../css/home.css";
</style>