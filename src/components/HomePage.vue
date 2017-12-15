<template>
    <page>
        <mt-header title="首页" slot="header"></mt-header>
        <mt-button type="danger" size="large" @click="jump('social-buzz')">danger</mt-button>
    </page>
</template>

<script>
    import Page from '@/components/Page';

    export default {
        name: "homeScreen",

        components: {
            Page,
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>