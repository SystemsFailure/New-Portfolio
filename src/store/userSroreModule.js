const userStore = {
    state: () => ({
        isAuth: false,
        user: null,
        token: null,
        refresh_token: null
    }),

    getters: {
        isLoggedIn(state) {
            return !!state.token
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, tok) {
            state.token = tok
        }
    },
    namespaced: true
}

export default userStore