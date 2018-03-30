<template>
    <div id="app">
        <transition :name="orientation">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import animate from './styles/animate.css'
    import StatusBar from './components/StatusBar';

    import Home from './components/HomePage';

    export default {
        name: 'app',
        components: { StatusBar },
        data(){
            return {
                navStack: [],
                orientation: 'forward'
            }
        },

        beforeCreate(){
            var h = Home;
            var router = this.$router;
            router.push('/')
        },

        created(){
            this.navStack.push(this.$route);
            this.$router.afterEach((to, from) => {
                const { navStack } = this;
                var back = navStack.some(route=> {
                    return route.name === to.name && route.fullPath === to.fullPath;
                });
                this.orientation = back ? 'back' : 'forward'
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./styles/vars";
    @import "./styles/base";
    @import "./styles/reset-mint-ui";
</style>
