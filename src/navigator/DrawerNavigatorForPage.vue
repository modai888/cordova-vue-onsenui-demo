/**
* Created by wxbo on 17/12/22.
*/

<template>
    <v-ons-page>
        <v-ons-splitter>
            <v-ons-splitter-side swipeable collapse
                                 width="320px"
                                 :side="side"
                                 :open.sync="openSide">

                <v-ons-navigator
                        :pageStack="drawerStack"
                        @pop-page="drawerStack.pop()"
                        @push-page="drawerStack.push($event)"
                        @parent-push="parentPush">
                </v-ons-navigator>

            </v-ons-splitter-side>
            <v-ons-splitter-content>
                <v-ons-page>
                    <v-ons-toolbar :modifier="toolbarModifier">
                        <div class="left">
                            <!--<v-ons-back-button></v-ons-back-button>-->
                            <v-ons-toolbar-button @click="toggleSide">
                                <v-ons-icon icon="ion-volvo"></v-ons-icon>
                            </v-ons-toolbar-button>
                        </div>
                        <div class="center">{{title}}</div>
                    </v-ons-toolbar>
                    <slot></slot>
                </v-ons-page>
            </v-ons-splitter-content>
        </v-ons-splitter>
    </v-ons-page>
</template>

<script>
    export default {
        name: 'drawer-navigator-for-page',
        components: {},
        props: {
            title: String,
            side: {
                type: String,
                default: 'left'
            },
            open: {
                type: Boolean,
                default: false
            },
            toolbarModifier: String,
            drawerRoot: Object
        },
        data(){
            return {
                openSide: this.open,
                drawerStack: [ this.drawerRoot ]
            }
        },

        methods: {
            isOpen(){
                return this.openSide;
            },
            toggleSide(){
                this.openSide = !this.openSide;
                this.$emit('update:open', this.openSide);
            },
            selectBrand(){
                this.$emit('switch-brand')
            },
            pushDrawerPage(page){
                this.drawerStack.push(page)
            },
            popDrawerPage(){
                this.drawerStack.pop();
            },
            parentPush($event){

                this.$emit('push-page', $event)
            }
        }
    }
</script>

<style>

</style>