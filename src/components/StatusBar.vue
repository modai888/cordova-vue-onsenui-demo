<template>
    <div class="status-bar"></div>
</template>

<script>
    export default {
        name: 'StatusBar'
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .status-bar {
        height: 20px;

        .ios & {
            /*height: 20px;*/
        }
    }
</style>