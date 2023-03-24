import {createStore} from "vuex";
import assistantModule from "@/store/assistantModule";
import userStore from "@/store/userSroreModule";
import settingsServer from "@/store/settingsServer";
import { io } from "socket.io-client";

const store = createStore({
    modules: {
        moduleAssistant : assistantModule,
        userStore: userStore,
        settingsServer: settingsServer,
    },

    state: () => {
        return {
            show_ModalSearchComp : false,
            isSubscribe : false,
            isLogin : false,

            urlBackend: 'http://localhost:3000',
            urlSocket: 'http://localhost:3000',
            socket: io("http://localhost:3000"),
        }
    },
    mutations: {
        setUrlBackend (state) {
            state.urlBackend = 'http://localhost:3000'
        },
        setSocket(st) {
            st.socket = io("http://localhost:3000")
        },
        setUrlSocket() {

        },
        change_value_ModalSearchComp(state)
        {
            state.show_ModalSearchComp = !state.show_ModalSearchComp
        },

        checkUserIsExist(state)
        {
            try {
                let user = localStorage.getItem('userEmail')
                if(user)
                {
                    state.isSubscribe = true
                } else {
                    state.isSubscribe = false
                }
            }catch (e) {
                console.log('user is not define')
            }

        }
    },
    actions: {

    }
})

export default store