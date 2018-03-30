/**
* 首页，展示所选品牌和车型的总体信息
*/

<template>
    <drawer-navigator-for-page
            title="XC60" ref="drawer"
            toolbar-modifier="noshadow transparent cover-content home"
            :drawer-root="drawerRoot"
            @push-page="push"
            @switch-brand="selectBrand">

        <blur :blur-mount="20" :url="url">
            <gs-circle :opacity="1" modifier="logo" :size="120">
                <img :src="url">
            </gs-circle>
        </blur>
        <p style="text-align: center">
            <v-ons-button @click="push()" modifier="large">Push Social-Buzz</v-ons-button>
            <br/>
            <v-ons-button @click="selectBrand" modifier="large">选择品牌</v-ons-button>
        </p>

    </drawer-navigator-for-page>
</template>

<script>
    import DrawerNavigatorForPage from '../navigator/DrawerNavigatorForPage.vue';
    import SocialBuzzPage from '../pages/SocialBuzz.vue'
    import BrandsPage from '../pages/Brands.vue'
    import Blur from '../components/GsBlur.vue'
    import GsCircle from '../components/GsCircle.vue'

    import Drawer from '../pages/HomeDrawer.vue'

    export default {
        name: "home",
        components: { DrawerNavigatorForPage, Blur, GsCircle },
        data(){
            return {
                drawerRoot: Drawer,
                url: require('../assets/xc60.jpeg')
            }
        },
        inject: [ 'navigator' ],
        methods: {
            push($event) {
                this.$emit('push-page', $event || SocialBuzzPage)
            },
            selectBrand(){
                // this.$emit('push-page', BrandsPage)
                this.$refs.drawer.pushDrawerPage(BrandsPage);
            }
        },

        mounted(){
            // 初始化Drawer 导航的根组件
            //            this.$refs.drawer.pushDrawerPage(Drawer);
        }
    }
</script>

<style>
    @import "../css/home.css";
</style>