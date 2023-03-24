<template>
  <div class="main-div-Resume-comp">
    <NavigationBarComp></NavigationBarComp>
    <img src="@/assets/backgrounds/wallpaper-dis.jpg">

    <div class="content-resume-comp">

      <div class="inner">

        <div class="onesection">

          <div class="title-section">
            <span>SOFTWARE SKILLS</span>
          </div>

          <div class="lst-software-skills">

            <div class="it" v-for="it in list_software_skills" :key="it.id">
              <img :src="require('@/assets/uidesign' + it.icon)">
              <span class="title">{{ it.tit }}</span>
              <div class="progress-it">
                <div class="progress" :style="{'width' : it.count + '%'}"></div>
              </div>
            </div>

          </div>

          <div class="title-section sec2">
            <span>languages</span>
          </div>

          <div class="lst-software-skills">

            <div class="it" style="margin-right: auto;">
              <span class="title">Russian</span>
              <div class="progress-it">
                <div class="progress" :style="{'width' : '100%'}"></div>
              </div>
            </div>

            <div class="it">
              <span class="title">English</span>
              <div class="progress-it">
                <div class="progress" :style="{'width' : '63%'}"></div>
              </div>
            </div>

          </div>

        </div>

        <div class="twosection">

          <div class="wrapper-inner-content">

            <div class="titile-what-cn-i-do" v-for="it in list_do" :key="it.id">
              <span>{{ it.title }}</span>
              <h6>
                {{ it.content }}
              </h6>
            </div>

          </div>

        </div>

        <div class="threesection">

          <div class="title-bo">
            <span>Contact with me</span>
          </div>

          <div class="name-and-email">
            <input type="text" placeholder="name" v-model="nameQuery">
            <input type="text" placeholder="email" v-model="emailQuery">
          </div>

          <div class="textarea-box">
            <textarea name="" id="textarea-id-tx-messs" placeholder="message text" v-model="textQuery"></textarea>
          </div>

          <div class="btn-5" @click="sendToEmail">
            <span>Send</span>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: "ResumeComp",
  data()
  {
    return {
      list_software_skills: [
        {id: 0, icon: '/icons8-graphql-an-open-source-data-query-and-manipulation-language-for-api-96.png', tit: 'GraphQL', count: 70},
        {id: 1, icon: '/icons8-c-plus-plus-100.png', tit: 'C ++', count: 89},
        {id: 2, icon: '/icons8-nodejs-96.png', tit: 'Nodejs', count: 72},
        {id: 3, icon: '/icons8-typescript-96.png', tit: 'Type Script', count: 43},
        {id: 4, icon: '/icons8-python-90.png', tit: 'Python', count: 93},
        {id: 5, icon: '/icons8-firebase-96.png', tit: 'Firebase', count: 94},
        {id: 5, icon: '/icons8-postgresql-100.png', tit: 'Postgresql', count: 81},
        {id: 5, icon: '/icons8-sql-100.png', tit: 'SQL', count: 69},
        {id: 5, icon: '/icons8-tensorflow-96.png', tit: 'Tensorflow', count: 32},
      ],

      list_do: [
        {id: 0, title: 'What can i do', content: 'Web Development & Design || ML & DML & AI || Robotics'},
        {id: 1, title: 'Back-end', content: ' In terms of server development I can develop a server from scratch using various popular tools: python - FastApi, Django & DRF, ORM & CORE SqlAlchemy, Sql native, Nodejs - Express, NextJs, sequalize ORM, SocketIO, WebSockets and others'},
        {id: 2, title: 'Fron-end', content: 'Regarding the client side - I can develop a site from scratch. Core Web Framework : Vue(3 version and all related technologies), TypeScript, JS native, main http-client - Axios, also have some experience with GraphQL.'},
        {id: 3, title: 'Others', content: 'Figma design, Statistics & Analytics, 2D/3D data graphs in applicationsMachine Learning/DSP/AI (under study)Raspberry pi, Renegade Elite,orange pi,and others'},

      ],

      nameQuery: '',
      emailQuery: '',
      textQuery: '',
    }
  },

  computed: {
    ...mapState({
      urlBackend: 'urlBackend',
    })
  },

  methods: {
    async sendToEmail() {
      if(this.nameQuery && this.emailQuery && this.textQuery) {
        await axios.post(this.urlBackend + '/sendToEmail', {data: {user_name: this.nameQuery, email: this.emailQuery, text: this.textQuery}}).then(res => {
          if(res) {
            console.log(res)
          } else {
            console.log('0111 not')
          }
        })
      } else {
        console.log('fields is not defined')
      }
    },
  },
  components: {
    NavigationBarComp,
  }

}
</script>

<style scoped lang="scss">
$background-color: rgb(7, 10, 11);
$text-handler-color: #00ccff;

.main-div-Resume-comp{
  background: $background-color;
  height: 100vh;
  width: 100%;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content-resume-comp
{
  position: absolute;
  background-color: rgba($color: #000000, $alpha: .9);
  z-index: 4;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  overflow: hidden;
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    backdrop-filter: blur(7px);

    .threesection {
      position: relative;
      width: 33%;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title-bo {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        font-size: 13px;
        font-weight: bold;
        margin-top: 40px;
        font-family: monospace;
        white-space: nowrap;
        letter-spacing: .15em;
        text-transform: uppercase;
      }

      .btn-5 {
        width: 25%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        min-height: 30px;
        position: absolute;
        bottom: 250px;
        border: 1px solid #222;
        right: 25px;
        cursor: pointer;

        border: 0 solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        outline: 1px solid;
        outline-color: rgba(157, 157, 157, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      } 

      .btn-5:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388; 
      }


      .btn-send {
        width: 25%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        min-height: 30px;
        position: absolute;
        bottom: 250px;
        border: 1px solid #222;
        right: 25px;
        cursor: pointer;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: rgba(255,255,255,0.1);
          transition: all 0.3s;
        }
        &:hover::before {
          opacity: 0 ;
          transform: scale(0.5,0.5);
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          transition: all 0.3s;
          border: 1px solid rgba(255,255,255,0.5);
          transform: scale(1.2,1.2);
        }
        &:hover::after {
          opacity: 1;
          transform: scale(1,1);
        }


        span {
          font-size: 15px;
          text-transform: uppercase;

        }
      }

      .textarea-box {
        position: absolute;
        top: 200px;
        width: 90%;
        height: fit-content;
        padding: 5px;

        textarea {
          width: 250px;
          margin-left: 10px;
          padding: 10px;
          border: 1px solid #222;
          background: none;
          color: #fff;
          font-family: monospace;
          white-space: nowrap;
          letter-spacing: .10em;
          max-width: 100%;
          max-height: 300px;
          min-width: 100%;
          min-height: 300px;

          &:focus {
            outline: 1px solid #00ccff;
          }
        }
      }

      .name-and-email {
        position: absolute;
        top: 100px;
        width: 90%;
        height: fit-content;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          width: 250px;
          margin-left: 15px;
          padding: 10px;
          border: 1px solid #222;
          background: none;
          color: #fff;
          font-family: monospace;
          white-space: nowrap;
          letter-spacing: .10em;
          
          &:focus {
            outline: 1px solid #00ccff;
          }
        }
      }

    }

    .twosection {
      width: 33%;
      height: 100%;
      padding: 10px;

      .wrapper-inner-content {
        width: 100%;
        height: 100%;
        position: relative;
        .titile-what-cn-i-do {
          color: #fff;
          // position: absolute;
          // top: 30px;
          margin-top: 50px;
          margin-left: 50px;
          span {
            width: 350px;
            word-wrap: break-word;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            border-bottom: 1px solid #00ccff;
          }

          h6 {
            width: 350px;
            height: auto;
            word-wrap: break-word;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

          }
        }

      }

      // background-color: rgba($color: #000, $alpha: .7);      
    }

    .onesection {
      width: 33%;
      height: 100%;
      background-color: rgba($color: #000, $alpha: .7);

      .lst-software-skills {
        overflow: auto;
        width: 100%;
        // margin-top: 10px;

        .it {
          width: 100%;
          padding: 10px;
          display: flex;
          align-items: center;
          padding-left: 30px;
          margin-top: 20px;

          img {
            width: 30px;
            height: 30px;
          }

          .title {
            margin-left: 40px;
            color: #fff;
          }

          .progress-it {
            margin-left: auto;
            margin-right: 70px;
            width: 60%;
            background-color: #666;
            height: 2px;
            .progress {
              // width: 34%;
              height: 100%;
              background-color: #00ccff;
              height: 1px;
            }
          }
        }
      }

      .sec2 {
        margin-top: 10px;
      }

      .title-section {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        span {
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          border-bottom: 1px solid #00ccff;
        }
      }
    }
  }
}


</style>