/**
* Components - Blur
*/

<template>
    <div class="gs-blur">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             baseProfile="full" class="gs-blur__svg" v-if="!supportFilter">
            <defs>
                <filter id="blur-4AD76924">
                    <feGaussianBlur in="SourceGraphic" edgeMode="duplicate" :stdDeviation="blurMount"/>
                </filter>
            </defs>
            <image :xlink:href="imageUrl"
                   externalResourcesRequired="true"
                   x="-5%" y="-5%"
                   width="110%" height="110%"
                   preserveAspectRatio="xMidYMid slice"
                   style="filter:url(#blur-4AD76924)"/>
        </svg>
        <div class="gs-blur__image" :style="blurStyle" v-else>
            <img :src="imageUrl">
        </div>
        <div class="gs-blur__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { supportCss } from '../core/utils'

    export default {
        name: 'gs-blur',
        props: {
            url: String,
            defaultImage: String,
            blurMount: {
                type: Number,
                default: 5
            }
        },
        data() {
            return {
                supportFilter: supportCss('filter'),
                imageUrl: this.url
            }
        },
        computed: {
            blurStyle: function () {
                var blurVal = `blur(${this.blurMount}px)`;
                return {
                    '-ms-filter': blurVal,
                    '-o-filter': blurVal,
                    '-ms-filter': blurVal,
                    '-webkit-filter': blurVal,
                    'filter': blurVal
                }
            }
        },
        methods: {
            _loadError() {
                this.imageUrl = this.defaultImage || require('./default-blur.jpg');
            },
//            _support(css){
//                var div = document.createElement('div');
//                if ( css in div.style ) return true;
//
//                var prefixes = 'Ms O Moz Webkit'.split(' ');
//                css = css.replace(/^[a-z]]/, (cha)=> {
//                    return cha.toUpperCase();
//                });
//                for ( var i = 0, len = prefixes.length; i < len; i++ ) {
//                    if ( prefixes[ i ] + css in div.style ) return;
//                }
//                return false;
//            }
        },
        watch: {
            url: function (n, o) {
                if ( n ) {
                    this._image.src = n;
                }
            }
        },
        created() {
            this._image = new Image();
            this._image.onerror = this._loadError
        },
        destroyed() {
            this._image = null;
        }
    }
</script>

<style scoped>
    .gs-blur {
        position: relative;
        overflow: hidden;
    }

    .gs-blur__svg {
        height: 100%;
        width: 100%;
    }

    /*.gs-blur__svg > image {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*}*/

    .gs-blur__image {
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        /* 边缘模糊效果减弱问题修复 */
        margin: -30px;
    }

    .gs-blur__image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .gs-blur__content {
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
</style>