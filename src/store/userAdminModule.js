const userAdmin = {
    state: () => ({
        isAuthAdmin: false,
        userAdmin: null,
        token: null,
        refresh_token: null,
    }),



    namespaced : true
}

export default userAdmin