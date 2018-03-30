/**
* 导航器菜单，具有导航功能的菜单
*/

<template>
    <v-ons-navigator
            animation="slide"
            :page-stack="menuStack"
            @pop-page="menuStack.pop()"
            @push-page="menuStack.push($event)">
    </v-ons-navigator>
</template>

<script>
    export default {
        name: 'gs-navigator-menu',
        props: {
            rootPage: {
                type: Object,
                require: true
            }
        },
        provide(){
            return {
                'menuNavigator': this
            }
        },
        data(){
            return {
                menuStack: [ this.rootPage ]
            }
        },
        methods: {
            // 冒泡给更上一层的导航器进行处理
            bubble(page){
                this.$emit('bubble-push', page)
            }
        }
    }
</script>
