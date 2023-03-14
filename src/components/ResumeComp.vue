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

        </div>

        <div class="threesection">

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";
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
    }
  },
  methods: {

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
  
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    backdrop-filter: blur(7px);

    .twosection {
      width: 67%;
      height: 100%;
      padding: 10px;

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