<template>
  <div class="main-div-comp">
    <NavigationBarComp></NavigationBarComp>
    <div class="content">

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

          <div class="discuss-deal">
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0 0 24 24"
              style="fill:#dfdfdf;"
            >
              <path d="M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z"></path>
            </svg>
          </a>

          <a href="http://">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0,0,255.98959,255.98959"
              style="fill:#000000;">
              <g fill="#dfdfdf" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M20.30273,2.98438c-0.28897,0.01257 -0.55415,0.09568 -0.78711,0.1875c-0.21522,0.08476 -0.98809,0.4096 -2.21875,0.92578c-1.23066,0.51618 -2.8614,1.20058 -4.59961,1.93164c-3.47642,1.46212 -7.38303,3.10683 -9.38477,3.94922c-0.06874,0.02864 -0.34791,0.11411 -0.65625,0.34961c-0.30905,0.23605 -0.65234,0.74834 -0.65234,1.30859c0,0.45195 0.22561,0.91225 0.49805,1.17578c0.27243,0.26353 0.54854,0.38674 0.7793,0.47852v-0.00195c0.78003,0.31076 3.10944,1.24288 3.66406,1.46484c0.19673,0.58953 1.04128,3.11337 1.24219,3.74805h-0.00195c0.14201,0.44921 0.28043,0.74196 0.47266,0.98633c0.09611,0.12218 0.21084,0.2329 0.35156,0.32031c0.05399,0.03354 0.11378,0.05955 0.17383,0.08398c0.00837,0.00355 0.01699,0.00443 0.02539,0.00781l-0.02344,-0.00586c0.01741,0.007 0.03304,0.01733 0.05078,0.02344c0.02891,0.00996 0.04896,0.00963 0.08789,0.01758c0.137,0.04215 0.27376,0.07031 0.40039,0.07031c0.54361,0 0.87695,-0.29492 0.87695,-0.29492l0.02149,-0.01563l2.34766,-1.98633l2.875,2.66016c0.05251,0.07415 0.4639,0.63086 1.41602,0.63086c0.56813,0 1.01731,-0.28121 1.30469,-0.57617c0.28738,-0.29496 0.4664,-0.59677 0.54688,-1.00586l0.00195,-0.00195c0.06418,-0.33018 2.81641,-14.15039 2.81641,-14.15039l-0.00586,0.02344c0.08566,-0.38235 0.11095,-0.7521 0.00977,-1.12891c-0.10119,-0.37681 -0.37428,-0.74453 -0.70312,-0.9375c-0.32885,-0.19297 -0.64072,-0.25085 -0.92969,-0.23828zM19.9082,5.17383c-0.10876,0.54603 -2.57419,12.93205 -2.72656,13.70898l-4.15234,-3.8418l-2.80664,2.37305l0.77734,-3.03906c0,0 5.36255,-5.42814 5.68555,-5.74414c0.26,-0.253 0.31445,-0.34169 0.31445,-0.42969c0,-0.117 -0.06022,-0.20117 -0.19922,-0.20117c-0.125,0 -0.29477,0.11978 -0.38477,0.17578c-1.14365,0.713 -6.01473,3.4889 -8.41016,4.85156c-0.14416,-0.0578 -2.30846,-0.92689 -3.47461,-1.39258c2.07426,-0.873 5.62991,-2.36896 8.94141,-3.76172c1.73791,-0.73094 3.36817,-1.41595 4.59766,-1.93164c1.03785,-0.43531 1.57923,-0.6607 1.83789,-0.76758zM17.15234,19.02539h0.00195c-0.00005,0.00023 -0.00185,0.00556 -0.00195,0.00586c0.00127,-0.00646 -0.00095,-0.0008 0,-0.00586z"></path></g></g>
            </svg>
          </a>



        </div>

      </div>

    </div>
    
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";
export default {
  name: "HomeComp",

  data() {
    return {
      visible_btn_expand: true,
    }
  },

  mounted() {
    if (document.fullscreenElement) {
        this.visible_btn_expand = false
      } else {
        this.visible_btn_expand = true
    }
  },

  methods: {
    expandScreen() {
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
  
  }

}
</script>

<style scoped lang="scss">
$background-color: rgb(7, 10, 11);


.main-div-comp .title-global
{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
}

.main-div-comp
{
  background: $background-color;
  height: 80vh;
  width: 100%;
}

.main-div-comp .content
{
  background: $background-color;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
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
</style>