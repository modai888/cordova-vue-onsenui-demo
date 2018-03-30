/**
* Created by wxbo on 17/12/28.
*/

<template>
    <div class="gs-circle" :style="styles" :class="modifiers">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'gs-circle',
        props: {
            background: {
                type: String,
                default: '#ffffff'
            },
            opacity: {
                type: Number,
                default: 0.4
            },
            size: {
                type: Number,
                default: 100
            },
            modifier: String
        },
        data(){
            return {
                prefix: 'gs-circle--'
            }
        },
        computed: {
            styles: function () {
                var size = `${this.size}px`;
                var opacity = Math.min(Math.max(0, this.opacity), 1);

                return {
                    'width': size,
                    'height': size,
                    'background-color': this.background,
                    'opacity': opacity,
                }
            },
            modifiers: function () {
                if ( !this.modifier ) return;
                var modifiers = this.modifier.replace(/^\s+|\s+$/, '').split(/\s+/);
                // 添加修饰符
                if ( modifiers.length ) {
                    modifiers = modifiers.map(m => this.prefix + m);
                }

                return modifiers.join(' ');
            }
        }
    }
</script>

<style scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(359deg);
        }
    }

    .gs-circle {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
    }

    .gs-circle--spin {
        animation: spin infinite;
        animation-duration: 10s;
        animation-timing-function: linear;
    }
</style>