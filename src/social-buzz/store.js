import { addDay } from "../core/utils";

export default {
    strict: true,
    namespaced: true,
    state: {
        currentCar: {},
        startDate: addDay(-6),
        untilDate: new Date()
    },
    mutations: {
        switchProj(state, proj = {}) {
            state.currentCar = proj;
        },
        setStartDate(state, date = addDay(-6)) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
            state.startDate = date;
        },
        setUntilDate(state, date = Date.now()) {
            date.setHours(23);
            date.setMinutes(59);
            date.setSeconds(59);
            date.setMilliseconds(0);
            state.untilDate = date;
        }
    }
}