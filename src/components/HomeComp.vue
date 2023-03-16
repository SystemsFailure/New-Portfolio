<template>
  <div class="main-div-comp">
    <NavigationBarComp></NavigationBarComp>

    <div class="watch" >
      {{ curr_time }}
    </div>
    
    <div class="content">
      <Transition name="slide-fade-chat">
        <OneWayChat v-if="visibleChat" @closeWindow="this.visibleChat = false"></OneWayChat>
      </Transition>

      <div class="wrap-image">
        
        <img src="@/assets/backgrounds/design-91.jpeg">

      </div>

      <div class="wrapper-bl">
        <div class="title-name-box">
          
          <div class="name">
            <span id="my-name">Vlad Avary</span>
          </div>

          <div class="speciality">
            <span>Developer and just handsome</span>
          </div>

          <div class="discuss-deal" @click="this.visibleChat = true">
            <span>negotiate a deal</span>
          </div>

        </div>

        <div class="btn-fullscreen">
          <img v-if="visible_btn_expand" @click="expandScreen" src="@/assets/uidesign/icons8-expand-64.png">
          <img v-else @click="expandScreen" src="@/assets/uidesign/icons8-minimize-keep-down-reduce-button-decrease-screen-size-shrink-96.png">
        </div>

        <div class="social-links">
          
          <a href="http://">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dfdfdf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>

          <a href="http://">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0,0,255.98959,255.98959"
              style="fill:#000000;">
              <g fill="#dfdfdf" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M20.30273,2.98438c-0.28897,0.01257 -0.55415,0.09568 -0.78711,0.1875c-0.21522,0.08476 -0.98809,0.4096 -2.21875,0.92578c-1.23066,0.51618 -2.8614,1.20058 -4.59961,1.93164c-3.47642,1.46212 -7.38303,3.10683 -9.38477,3.94922c-0.06874,0.02864 -0.34791,0.11411 -0.65625,0.34961c-0.30905,0.23605 -0.65234,0.74834 -0.65234,1.30859c0,0.45195 0.22561,0.91225 0.49805,1.17578c0.27243,0.26353 0.54854,0.38674 0.7793,0.47852v-0.00195c0.78003,0.31076 3.10944,1.24288 3.66406,1.46484c0.19673,0.58953 1.04128,3.11337 1.24219,3.74805h-0.00195c0.14201,0.44921 0.28043,0.74196 0.47266,0.98633c0.09611,0.12218 0.21084,0.2329 0.35156,0.32031c0.05399,0.03354 0.11378,0.05955 0.17383,0.08398c0.00837,0.00355 0.01699,0.00443 0.02539,0.00781l-0.02344,-0.00586c0.01741,0.007 0.03304,0.01733 0.05078,0.02344c0.02891,0.00996 0.04896,0.00963 0.08789,0.01758c0.137,0.04215 0.27376,0.07031 0.40039,0.07031c0.54361,0 0.87695,-0.29492 0.87695,-0.29492l0.02149,-0.01563l2.34766,-1.98633l2.875,2.66016c0.05251,0.07415 0.4639,0.63086 1.41602,0.63086c0.56813,0 1.01731,-0.28121 1.30469,-0.57617c0.28738,-0.29496 0.4664,-0.59677 0.54688,-1.00586l0.00195,-0.00195c0.06418,-0.33018 2.81641,-14.15039 2.81641,-14.15039l-0.00586,0.02344c0.08566,-0.38235 0.11095,-0.7521 0.00977,-1.12891c-0.10119,-0.37681 -0.37428,-0.74453 -0.70312,-0.9375c-0.32885,-0.19297 -0.64072,-0.25085 -0.92969,-0.23828zM19.9082,5.17383c-0.10876,0.54603 -2.57419,12.93205 -2.72656,13.70898l-4.15234,-3.8418l-2.80664,2.37305l0.77734,-3.03906c0,0 5.36255,-5.42814 5.68555,-5.74414c0.26,-0.253 0.31445,-0.34169 0.31445,-0.42969c0,-0.117 -0.06022,-0.20117 -0.19922,-0.20117c-0.125,0 -0.29477,0.11978 -0.38477,0.17578c-1.14365,0.713 -6.01473,3.4889 -8.41016,4.85156c-0.14416,-0.0578 -2.30846,-0.92689 -3.47461,-1.39258c2.07426,-0.873 5.62991,-2.36896 8.94141,-3.76172c1.73791,-0.73094 3.36817,-1.41595 4.59766,-1.93164c1.03785,-0.43531 1.57923,-0.6607 1.83789,-0.76758zM17.15234,19.02539h0.00195c-0.00005,0.00023 -0.00185,0.00556 -0.00195,0.00586c0.00127,-0.00646 -0.00095,-0.0008 0,-0.00586z"></path></g></g>
            </svg>
          </a>

          <div class="con">
            <span>
              
              <h6 style="color: rgb(78, 146, 255);" class="anim-typewriter">const</h6>
              <h6 style="color: #999; margin-left: 10px;">githubLink</h6>
              <h6 style="color: #fff; margin-left: 10px;">=</h6>
              <a href="https://github.com/SystemsFailure">
                <h6 style="color: rgb(0, 195, 133); margin-left: 10px; text-decoration: underline;">" https://github.com/SystemsFailure "</h6>
              </a>
              
            </span>
          </div>

        </div>

      </div>

    </div>
    
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";
import OneWayChat from '@/components/OneWayChat.vue'
export default {
  name: "HomeComp",

  data() {
    return {
      visible_btn_expand: true,
      visibleChat: false,
      curr_time: '',
    }
  },

  mounted() {
    if (document.fullscreenElement) {
        this.visible_btn_expand = false
      } else {
        this.visible_btn_expand = true
    }
    setInterval(() => {
      const date = new Date();
      const currentTime = date.toLocaleTimeString();
      this.curr_time = currentTime;
    }, 1000);
  },

  methods: {
    expandScreen() {
      // const a = 'https'
      this.visible_btn_expand = !this.visible_btn_expand
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    },
  },

  components: {
    NavigationBarComp,
    OneWayChat,
  
  }

}
</script>

<style scoped lang="scss">
$background-color: rgb(7, 10, 11);
$example-color: rgb(78, 146, 255);

.main-div-comp .title-global
{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
  position: relative;
  overflow: hidden;
}

.main-div-comp
{
  background: $background-color;
  height: 80vh;
  width: 100%;
  position: relative;

  .watch {
    position: absolute;
    width: 150px;
    height: 60px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0px;
    top: 50px;
    background: rgba($color: #0b0b0c, $alpha: .5);
    z-index: 5;
    color: #fff;
  }

}

.main-div-comp .content
{
  background: $background-color;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  .wrapper-bl {
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    background-color: rgba($color: #000000, $alpha: .7);
    background-origin: border-box;
    z-index: 3;
    bottom: 0;

    .social-links {
      position: absolute;
      left: 70px;
      bottom: 70px;
      width: fit-content;
      height: auto;
      padding: 10px;
      display: flex;
      align-items: center;

      .con {
        margin-left: 20px;
        display: flex;
        align-items: center;
        overflow: hidden;
        font-family: monospace;
        white-space: nowrap;
        letter-spacing: .15em;
        padding-bottom: 4px;
        height: 30px;
        
        span {
          height: 40px;
          display: flex;
          width: 61ch;
          color: white;
          font-family: monospace;
          font-size: 15px;
          white-space: nowrap;
          overflow: hidden;
          border-right: 1px solid white;
          animation: cursor 1.25s step-end infinite,
          printed_text 1.25s steps(29);
        }
      }

      a {
        svg {
          margin-left: 15px;
          cursor: pointer;
          &:hover {
            opacity: .6;
            transition: .3s;
          }
        }
      }
    }

    .btn-fullscreen {
      position: absolute;
      right: 70px;
      bottom: 70px;

      &:hover {
        cursor: pointer;
        opacity: .5;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }

    .title-name-box {
      position: absolute;
      width: 100%;
      height: auto;
      padding: 10px;
      top: 30%;
      left: 200px;
      display: flex;
      flex-direction: column;
      // align-items: center;
        .name {
          width: auto;
          height: auto;

          span {
            font-size: 55px;
            font-family: 'Times New Roman', Times, serif;
            font-weight: bolder;
            text-decoration: dotted;
            text-decoration:double;
            text-transform: uppercase;
            color: #fff;
          }

        }

        .speciality {

          span {
            font-size: 35px;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 400;
            text-transform: uppercase;
            color: #999;
          }
        }

        .discuss-deal {
          margin-top: 20px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: rgba($color: #000000, $alpha: .8);
          width:fit-content;
          border-radius: 5px;

          &:hover {
            cursor: pointer;
            opacity: .5;
            transition: .3s;
          }
          
          span {
            font-size: 18px;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 400;
            text-transform: uppercase;
            color: #fff;
          }
        }

      }
  }

  .wrap-image {
    width: 100%;
    height: calc(100% - 50px);
    bottom: 0;

    position: absolute;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      z-index: 1;
      object-fit: cover;
    }
  }


}

@keyframes cursor {
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

@keyframes printed_text {
    from{
        width: 0;
    }
}


.slide-fade-chat-enter-active {
  transition: all .2s ease-out;
}

.slide-fade-chat-leave-active {
  transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-chat-enter-from,
.slide-fade-chat-leave-to {
  transform: translateY(30px);
  opacity: 1;
}

</style>