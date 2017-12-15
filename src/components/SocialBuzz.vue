<template>
    <page>
        <mt-header title="社交媒体" slot="header">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div>this is social buzz page</div>
    </page>
</template>

<script>
    import Page from '@/components/Page';

    export default {
        name: "homeScreen",

        components: {
            Page
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>