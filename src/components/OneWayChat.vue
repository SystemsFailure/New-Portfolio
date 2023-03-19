<template lang="html">    
    <div class="OneWayChat">
        <div class="list-key-down">
            <div class="list-keys">
                <TransitionGroup name="list" tag="">
                    
                    <div class="it_" v-for="it in listkeydown" :key="it.id">            
                        {{ it.key }}
                    </div>

                </TransitionGroup>
            </div>
        </div>

        <div class="wrapper">
            <div class="inner">
                <div class="inline-">
                    <span id="title-span">Chat with admin</span>
                    <h6 style="margin-left: 15px;"> > </h6>
                    <span id="no-title-span" :style="auth? {'width' : '32ch'} : {'width' :'30ch'}">
                        <h6 v-if="showErrorOrWarning && !auth" style="margin-left: 5px; color: red;"> Error</h6>
                        <h6 v-if="!showErrorOrWarning && !auth" style="color: yellow; margin-left: 10px;"> warning </h6>
                        <h6 v-if="auth" style="color: green;">Ok</h6>
                        <h6 style="margin-left: 10px;"> -- </h6>
                        <h6 style="margin-left: 15px; color: #999;"> {{ auth ? 'you are logged in, you can start' : 'You are not authorized.' }} </h6>
                    </span>

                    <img src="@/assets/icons8-macos-закрыть-30.png" @click="() => {this.$emit('closeWindow')}">
                </div>

                <div class="chat">
                    <div class="list-chat">
                        <div class="it-mess" v-for="it in listMessage" :key="it.id" :style="it.to === 'admin' ? {'border-left' : '1px solid #999'} : undefined">
                            {{ it.content }}
                        </div>
                    </div>
                </div>
            
                <input 
                    id="inp-text" 
                    type="text" 
                    placeholder="type message" 
                    @keydown="addItemToArray($event)" 
                    @focus="actionsBorder(true)"
                    @focusout="actionsBorder(false)"
                    v-model="inputField"
                >

            </div>
        </div>
    </div>
</template>
<script>
import { io } from "socket.io-client";

const arr = () => []
const arr2 = () => [
    {id: 0, content: 'hello', adminId: 3153243423, userEmail: 'alisking@gmail.com', to: 'admin'},
    {id: 1, content: 'what stop in you?', adminId: 3153243423, userEmail: 'alisking@gmail.com', to: 'user'},
]

export default {
    data() {
        return {
            auth: false,
            listkeydown: arr(),
            listMessage: arr2(),
            inputField: '',
            showErrorOrWarning: false,
            
        }
    },

    mounted() {
        // const socket = io("http://localhost:3000");
        const socket = io("https://back-end-portfolio.vercel.app");
        socket.on('hello', () => {
            console.log(socket.id)
        })

        // socket.on("disconnect", () => {
            // console.log(socket.id);
        // });

        if(localStorage.getItem('user-email')) this.auth = true
        else this.auth = false
        const inp = document.getElementById('inp-text')
        inp.focus()
        inp.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' && inp.focus) this.send_message()
            if(!inp.focus) console.log('focus out')
        })


    },

    methods: {
        send_message() {
            const userEmail = localStorage.getItem('user-email') || null
            if(userEmail === null) {console.log('You need to autorized, through dont can to answer!'); this.showErrorOrWarning = true}
            else {
                if
                (
                    this.inputField && this.inputField != '' && this.inputField.length < 3000
                )
                {
                    let message = {id: userEmail, content: this.inputField.trim(), to: 'admin', userEmail: userEmail, adminId: 3153243423}
                    this.listMessage.push(message)
                    this.inputField = ''
                }
                else 
                {
                    console.log('you dont writed nothing')
                }

            }
        },

        addItemToArray(event) {
            if(
                event.shiftKey || event.ctrlKey || event.altKey || event.metaKey || event.repeat || event.capslock || event.key === 'Enter'
                || event.key === 'backspace'
            ) return
            if(
                event.which === 32 || event.which === 20 || event.which === 27 || event.which === 8 || event.which === 44 || event.which === 46
                || event.which === 16 || event.which === 17 || event.which === 18 || event.which === 36
            ) return
            let key_data = {
                id: this.getRandomNumber(10000),
                key: event.key
            }
            if(this.listkeydown.length >= 7) {this.removeItemFromArray(); this.addItemToArray(key_data)}
            else this.listkeydown.push(key_data)
        },
        removeItemFromArray() {
            this.listkeydown.shift()
        },
        getRandomNumber(max) {
            return Math.floor(Math.random() * max)
        },

        actionsBorder(del) {
            if(del) document.querySelector('#no-title-span').style.border = 'none'
            else document.querySelector('#no-title-span').style.borderRight = '1px solid #fff'
        },
    }
}
</script>
<style lang="scss" scoped>

.OneWayChat {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;

    .wrapper {
        width: 50%;
        height: calc(80% - 50px);
        margin-top: auto;
        background-color: rgba($color: #000000, $alpha: .85);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        z-index: 6;
        .inner {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

            .inline- {
                margin-top: 15px;
                width: 100%;
                display: flex;
                align-items: center;
                color: #fff;
                #title-span {
                    text-transform: uppercase;
                    font-size: 15px;
                    font-weight: bold;
                    color: #999;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-left: 25px;
                    
                }

                #no-title-span {
                    height: 20px;
                    width: 32ch;
                    color: white;
                    font-family: monospace;
                    font-size: 15px;
                    white-space: nowrap;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    padding-top: 3px;
                    margin-left: 10px;
                    border-right: 1px solid white;
                    animation: cursor_one_way_chat 1.25s step-end infinite,
                    printed_text_one_way_chat 1.25s steps(29);

                }
                .btn-auth {
                    padding: 4px;
                    background-color: red;
                }

                img {
                    width: 25px;
                    height: 25px;
                    margin-left: auto;
                    margin-right: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        cursor: pointer;
                        // background-color: red;
                        opacity: .5;
                        transition: .3s;
                    }
                }
            }

            .chat {
                width: 100%;
                height: 100%;
                padding-left: 150px;
                padding-right: 150px;
                display: flex;
                overflow: auto;

                .list-chat {
                    width: 100%;
                    height: 99%;
                    margin-top: auto;
                    border-radius: 10px;
                    overflow: auto;
                    

                    .it-mess {
                        width: 100%;
                        height: fit-content;
                        padding: 5px;
                        padding-left: 10px;
                        margin-top: 10px;
                        color: #999;
                    }
                }
            }

            input {
                width: 100%;
                padding: 15px;
                padding-left: 20px;
                background: none;
                border: none;
                outline: none;    
                margin-top: auto;
                color: #fff;
                font-size: 15px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                word-spacing: .10em;
            }
        }

    }

    .list-key-down {
        position: absolute;
        width: 100%;
        height: 10%;
        top:140px;
        // padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
        // background-color: red;
        .list-keys {
            width: 600px;
            min-height: 80px;
            // background-color: red;
            display:flex;
            align-items: center;
            justify-content: center;
            color: #fff;

            .it_ {
                padding: 5px;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #777;
                margin-left: 10px;
                text-transform: uppercase;
            }
            
        }
    }
}

.list-enter-active,
.list-leave-active {
  transition: all .3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@keyframes cursor_one_way_chat {
    0%{
        border-color: white;
    }

    50%{
        border-color: transparent;
    }

    100%{
        border-color: white;
    }
}

@keyframes printed_text_one_way_chat {
    from{
        width: 0;
    }
}

</style>