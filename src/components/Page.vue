/**
* Created by wxbo on 17/12/14.
*/

<template>
    <div :class="platform">
        <slot name="header"></slot>
        <div class="page-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page',
        data(){
            return {
                platform: "page"
            }
        },
        beforeCreate(){
            this.platformReady.then(function ({ device }) {
                // this.platform += 'cordova ' + device.platform.os;
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .page {
        background-color: #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;

        &-content {
            padding: 8px;
        }
    }
</style>