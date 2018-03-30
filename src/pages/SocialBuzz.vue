<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button>首页</v-ons-back-button>
            </div>
            <div class="center">{{title}}</div>
        </v-ons-toolbar>
        <p style="text-align: center">This is the second page</p>
        <v-ons-button modifier="large" @click="push">入栈</v-ons-button>
    </v-ons-page>
</template>

<script>
    import DrawerNavigatorPage from '../navigator/DrawerNavigatorPage.vue'
    import SocialBuzzFilters from '../social-buzz/FiltersPage'

    export default {
        name: "social-buzz",
        components: { DrawerNavigatorPage },

        data() {
            return {
                title: '社交媒体'
            }
        },
        methods: {
            push() {
                this.$store.commit('navigator/push', SocialBuzzFilters)
            }
        }
    }
</script>

<style>

</style>