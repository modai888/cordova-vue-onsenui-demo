<template>
    <section class="section">
        <div class="section__header">
            <slot name="header">
                <span>{{header}}</span>
            </slot>
        </div>
        <div class="section__content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: "gs-section",
        props: [ 'header' ]
    }
</script>

<style scoped>
    .section__header {
        line-height: 1.5em;
        font-size: 0.8em;
    }
</style>