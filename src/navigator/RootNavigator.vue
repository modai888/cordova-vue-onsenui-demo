<template>
    <v-ons-navigator swipeable swipe-target-width="150px"
                     animation="gs-slide-md"
                     :options="navigatorOptions"
                     :page-stack="pageStack"
                     @pop-page="popPage">
    </v-ons-navigator>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import HomePage from '../home/Home.vue'

    export default {
        data() {
            return {
                // pageStack: [ HomePage ],
                // navigatorOptions: {
                //     animation: 'default'
                // }
            }
        },

        computed: {
            ...mapState('navigator', {
                pageStack: 'stack',
                navigatorOptions: 'options'
            })
        },

        methods: {
            popPage() {
                this.$store.commit('navigator/pop');
            },

            push($event) {
                if ( $event.navigatorOptions ) {
                    this.navigatorOptions = Object.assign(this.navigatorOptions, $event.navigatorOptions);
                } else {
                    this.navigatorOptions = {}
                }

                this.pageStack.push($event)
            }
        },

        beforeCreate() {
            this.$store.commit('navigator/push', HomePage);
            // 获取用户个人设定的首选品牌，如果没有，则跳转到品牌选择也没
            //            this.navigatorOptions = {
            //                animation: 'lift-ios'
            //            }
            //            this.pageStack.push(Brands);
        }
    }
</script>

<style>

</style>