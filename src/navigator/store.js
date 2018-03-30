export default {
    strict: true,
    namespaced: true,
    state: {
        stack: [],
        options: {}
    },
    actions: {
        push(store, page) {
            if ( typeof page === 'function' ) {
                page().then((p) => {
                    store.commit('push', p.__esModule && p.default || p)
                })
            } else if ( page && typeof page === 'object' ) {
                store.commit('push', page)
            }
        }
    },
    mutations: {
        push: (state, page) => {
            state.stack.push(page)
        },
        pop: (state) => {
            if ( state.stack.length > 1 ) {
                state.stack.pop();
            }
        },
        options: (state, options = {}) => {
            state.options = options;
        }
    }
}