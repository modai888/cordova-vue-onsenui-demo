<template>
    <v-ons-page name="model-async-page">
        <div class="content">
            <model-page></model-page>
        </div>
    </v-ons-page>
</template>

<script>
    export default {
        name: "model-async",
        components: {
            'model-page': () => import('./model/model-page.vue')
        }
    }
</script>
