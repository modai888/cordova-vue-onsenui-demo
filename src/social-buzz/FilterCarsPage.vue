<template>
    <v-ons-page class="filter-cars-page">
        <v-ons-toolbar>
            <div class="center">选择项目</div>
            <div class="right">
                <v-ons-toolbar-button @click="select">
                    确定
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <v-ons-list>
            <v-ons-list-item v-for="(proj, $index) in projs" :key="proj.id" tappable>
                <label class="center" :for="'radio-' + $index">
                    {{proj.label}}
                </label>
                <label class="right">
                    <v-ons-radio
                            :input-id="'radio-' + $index"
                            :value="proj.id"
                            v-model="selectedProj"
                    ></v-ons-radio>
                </label>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
    export default {
        name: "filter-cars-page",
        data() {
            return {
                selectedProj: null,
                projs: [ {
                    id: 1,
                    label: 'VOLVO XC90',
                }, {
                    id: 2,
                    label: 'VOLVO XC60',
                }, {
                    id: 3,
                    label: 'VOLVO S90',
                }, {
                    id: 4,
                    label: 'VOLVO S60L',
                }, {
                    id: 5,
                    label: 'VOLVO S60',
                }, {
                    id: 6,
                    label: 'VOLVO V60',
                }, {
                    id: 7,
                    label: 'VOLVO V60 R-DESIGN',
                }, {
                    id: 8,
                    label: 'VOLVO V40',
                }, {
                    id: 9,
                    label: 'VOLVO V90 CROSS COUNTRY',
                }, {
                    id: 10,
                    label: 'VOLVO V60 CROSS COUNTRY',
                }, {
                    id: 11,
                    label: 'VOLVO V40 CROSS COUNTRY',
                } ]
            }
        },
        methods: {
            select() {
                this.$store.commit('socialbuzz/switchProj', this.projs.filter(proj=>proj.id == this.selectedProj)[0])
                this.$store.commit('navigator/pop');
            }
        }
    }
</script>
