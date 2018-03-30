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
                <v-ons-page>
                    <div class="left-side__banner"
                         @click="selectBrand">
                        <img src="../assets/volvo-logo.png">
                    </div>
                    <slot name="side"></slot>
                    <v-ons-bottom-toolbar modifier="aligned transparent">
                        <v-ons-button modifier="quiet">
                            <v-ons-icon icon="fa-sign-out" size="24px"></v-ons-icon>
                        </v-ons-button>
                    </v-ons-bottom-toolbar>
                </v-ons-page>
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
    import Brands from '../pages/Brands.vue'
    export default {
        name: 'drawer-navigator-page',
        components: { Brands },
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
            toolbarModifier: String
        },
        data(){
            return {
                openSide: this.open
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
                this.$emit('switch-brand', Brands)
            }
        }
    }
</script>

<style>

</style>