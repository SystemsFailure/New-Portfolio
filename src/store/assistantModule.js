const AssistantModule = {
    state: () => ({
        // Метка для отображения ассистента
        show_Assistant : false,
    //    Функционал работы Ассистента
    }),
    mutations: {
        changeVisible(state)
        {
            state.show_Assistant = !state.show_Assistant
        }
    },

    getters: {

    },

    actions: {

    },
    namespaced: true,
}

export default AssistantModule