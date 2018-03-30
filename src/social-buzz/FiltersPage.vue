<template>
    <v-ons-page class="filters-page">
        <v-ons-toolbar>
            <div class="left">
            </div>
            <div class="center">{{title}}</div>
        </v-ons-toolbar>
        <div class="content">
            <v-ons-list>
                <v-ons-list-header></v-ons-list-header>
                <v-ons-list-item modifier="chevron" tappable @click="selectProj">
                    {{car && car.label || noProj}}
                </v-ons-list-item>
                <v-ons-list-header></v-ons-list-header>
                <v-ons-list-item @click="selectDate('startDate')">
                    <div class="center">开始时间</div>
                    <div class="right">
                        {{startDate | gs-filter('yyyy-MM-dd')}}
                    </div>
                </v-ons-list-item>
                <v-ons-list-item @click="selectDate('untilDate')">
                    <div class="center">结束时间</div>
                    <div class="right">{{untilDate | gs-filter('yyyy-MM-dd') }}</div>
                </v-ons-list-item>
            </v-ons-list>

            <section style="margin: 50px 16px 16px">
                <v-ons-button modifier="large danger" @click="$store.commit('navigator/pop')">
                    完 成
                </v-ons-button>
            </section>
        </div>

        <div>
            <mt-datetime-picker ref="startDate"
                                type="date"
                                v-model="startDate"></mt-datetime-picker>
            <mt-datetime-picker ref="untilDate"
                                type="date"
                                v-model="untilDate"></mt-datetime-picker>
        </div>
    </v-ons-page>
</template>

<script>
    import FilterCarsPage from './FilterCarsPage'

    export default {
        name: "filters",
        data() {
            return {
                title: '筛选条件',
                noProj: '请选择项目'
            }
        },

        computed: {
            car() {
                return this.$store.state.socialbuzz.currentCar;
            },
            startDate: {
                get() {
                    return this.$store.state.socialbuzz.startDate;
                },
                set(newVal) {
                    this.$store.commit('socialbuzz/setStartDate', newVal)
                }
            },
            untilDate: {
                get() {
                    return this.$store.state.socialbuzz.untilDate;
                },
                set(newVal) {
                    this.$store.commit('socialbuzz/setUntilDate', newVal)
                }
            }
        },

        methods: {
            selectProj() {
                this.$store.commit('navigator/options', {
                    animation: 'slide',
                    callback: () => this.$store.commit('navigator/options')
                });
                this.$store.commit('navigator/push', FilterCarsPage);
            },
            selectDate(ref) {
                this.$refs[ ref ].open();
            }
        }
    }
</script>

<style scoped>

</style>