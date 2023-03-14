<template>

  <div class="main-comp">
    <div class="assistant0">
      <div class="header-assistant0">

        <div class="w3-bar w3-#263238"
             style="width: 60vh; max-height: 30px; display: flex; align-items: center">
          <a href="#" class="w3-bar-item w3-button"
             style="background: #263238; color: white; border-right: 1px solid white">X</a>
          <a href="#" class="w3-bar-item w3-button"
             style="background: #263238; color: white; border-right: 1px solid white">Tagging</a>
          <div class="w3-dropdown-hover">
            <button class="w3-button"
                    style="background: #263238; color: white">Кличевые команды</button>
            <div class="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" class="w3-bar-item w3-button"
                 style="background: #263238; color: white">Зачем ты нужен?</a>
              <a href="#" class="w3-bar-item w3-button"
                 style="background: #263238; color: white">Спарсить данные</a>
              <a href="#" class="w3-bar-item w3-button"
                 style="background: #263238; color: white">Отправить мне письмо</a>
            </div>
          </div>
        </div>
      </div>

      <div class="content-assistant0">
        <div class="list-messages">
          <div id="jipper" class="item-messages" v-for="mess in messages[0]" v-bind:key="mess.id">
            <h6 id="text-mess">{{`От : ` + user_email}} {{mess.message}}</h6>
          </div>

        </div>
      </div>

      <div class="footer-assistant0">
        <textarea v-focus id="text_content" v-model="inp_text" placeholder="сообщение" class="text-area-mess" name="" cols="28" rows=""></textarea>
        <input id="btn-send-mess" type="button" value="отправить" @click="sendMessageTo">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import axios from "axios";

import axios from "axios";

export default {
  data()
  {
    return{
      inp_text: '',
      message: '',
      messages: [],
      newMessages: [],
      user_email: localStorage.getItem('userEmail')
    }
  },

  watch: {
    messages: {
      handler(newVal, oldVal) {
        // console.log(this.messages[0].message)
        // console.log(val[0].message)
        // console.log(oldVal.slice(-1)[0].message)
        Array.prototype.last = function(){
          return this[this.length - 1]
        }
        console.log(this.messages.last().message)
      },
      deep: true
    }
  },

  directives: {
    focus: {
      mounted: (el) => el.focus()
    },
  },

  mounted() {
    axios.get(this.$store.state.settingsServer.URL + 'allMessages')
    .then(response => {
      if(response.status === 200) {
        this.messages.push(response.data.list_messages)
        console.log(this.messages)
      }else {
        console.log('status code not 2--')
      }
    })
  },

  methods: {
        async sendMessageTo()
        {
          if(this.$store.state.isSubscribe)
          {
            let text = this.inp_text
            if(text !== '')
            {
              const message = {
                'id' : Date.now(),
                'message' : text
              }

              await axios.post(this.$store.state.settingsServer.URL + 'sendMessage', {
                user_mess: message
              }).then(response => {
                if(response.status === 200) {
                  this.messages.push(response.data.list_messages)
                  console.log('success ' + response.data.list_messages)
                }else {
                  console.log('status code not a 2--')
                }
              })
              this.messages[0].push(message)
              this.inp_text = ''
            } else {
              alert('Что то не то с сообщением')
            }
          } else {
            let btn = document.getElementById('btn-send-mess')
            btn.style.visibility = 'hidden'
          }
        },
      },
  components: {}
}
</script>

<style scoped>

.main-comp
{
  width: 100%;
  height: 100%;

  background: white;
}

.assistant0 {
  z-index: 10;
  position: absolute;
  right: 0;
  bottom: 0;

  background: #263238;
  border: 1px solid black;
  width: 400px;
  height: 550px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.assistant0 .header-assistant0 {
  float: right;
  width: 100%;
}

.assistant0 .content-assistant0 {
  background: white;
  margin-top: 10%;
  height: 80%;
  padding: 10px;
  border: 1px solid black;
}

.assistant0 .content-assistant0 .list-messages
{
  background: #2e3137;
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: auto;
  /*display: flex;*/
  /*justify-content: start;*/
  /*align-items: end;*/
  /*flex-direction: column;*/
}

.assistant0 .content-assistant0 .list-messages .item-messages {
  width: auto;
  height: auto;
  background: white;
  padding-left: 5px;
  padding-right: 10px;
  padding-bottom: 1px;
  word-wrap: break-word;

  max-width: 47%;
}

/*.item-messages-0*/
/*{*/
/*  width: auto;*/
/*  height: auto;*/
/*  background: white;*/
/*  padding-left: 5px;*/
/*  padding-right: 5px;*/

/*  margin-top: 10px;*/
/*  margin-right: 5px;*/

/*  max-width: 50%;*/
/*  float: right;*/
/*}*/



.assistant0 .content-assistant0 .list-messages .item-messages h6 {
  font-size: 5px;
  max-width: 168px;
  height: auto;

}

.assistant0 .footer-assistant0 {
  /*background: #009d8c;*/
  height: 14%;
  display: flex;
  align-items: center;
}

.assistant0 .footer-assistant0:hover
{
  border: 1px solid #009d8c;
}

.assistant0 .footer-assistant0 .text-area-mess
{
  font-size: 12px;
  padding: 10px;
  max-height: 60%;
  max-width: 70%;
  margin-left: 5px;

  background: #2e3137;
  border: none;
  color: white;
}


.assistant0 .footer-assistant0 .text-area-mess:hover
{
  border: 1px solid #009d8c;
}

.assistant0 .footer-assistant0 input
{
  margin-left: 4px;
  padding: 6px;
  background: #2e3137;
  border: none;
  color: white;
}

.assistant0 .footer-assistant0 input:hover
{
  cursor: pointer;
  border: 1px solid #009d8c;
}
</style>