<template>
    <v-ons-page name="social-buzz-page">
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button></v-ons-back-button>
            </div>
            <div class="center">{{title}}</div>
            <div class="right">
                <v-ons-toolbar-button @click="showFilter">
                    <v-ons-icon icon="ion-ios-settings"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <div class="background" style="background-color: #efeff4;"></div>
        <div class="content">
            <v-ons-tabbar modifier="primary social" position="top" tab-border="true"
                          :ignore-edge-width="0"
                          :tabs="tabs"
                          :index.sync="activeTab"
            >
            </v-ons-tabbar>
        </div>
    </v-ons-page>
</template>

<script>
    import ModelPage from './model-async'
    import VersitePage from './versite/Versite'
    import FiltersPage from './FiltersPage'

    import { disableNavigatorSwipe } from '../core/mixins'

    export default {
        name: "social-buzz-page",
        mixins: [ disableNavigatorSwipe ],

        data() {
            return {
                title: '社交媒体',
                activeTab: 0,
                tabs: [ {
                    icon: 'fa-car',
                    label: '车型',
                    page: ModelPage,
                    key: 'ModelPage'
                }, {
                    icon: 'fa-sitemap',
                    label: '垂直媒体',
                    page: VersitePage,
                    key: 'VersitePage'
                } ]
            }
        },
        mounted() {

        },
        methods: {
            showFilter() {
                // this.$store.commit('navigator/options', {
                //     animation: 'fade',
                //     callback: () => this.$store.commit('navigator/options')
                // });
                this.$store.commit('navigator/push', FiltersPage)
            }
        }
    }
</script>

<style>

</style>