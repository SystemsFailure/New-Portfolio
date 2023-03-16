<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div class="div-main-container">
      <ModalSearchComp v-show="$store.state.show_ModalSearchComp"></ModalSearchComp>
      <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import ModalSearchComp from "@/components/ModalIcons/ModalSearchComp";
// import axios from "axios";
export default {
  name: 'App',

  data()
  {
    return{

    }
  },

  mounted() {

    this.checkIsSubscribe()
    if(this.$store.state.isSubscribe)
    {
      // eslint-disable-next-line no-undef
      Push.create(`Вы подписаны как...`, {
        body: `${window.localStorage.getItem('userEmail')}`,
        timeout: 3000,
        onClick: function() {
          console.log(this);
        }
      });
    }else {
      // eslint-disable-next-line no-undef
      Push.create('Вы не подписаны')
    }
  },

  methods: {
    checkIsSubscribe()
    {
      this.$store.commit('checkUserIsExist')
    },
  },

  components: {
    ModalSearchComp
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

.div-main-container
{
  background-color: #263238;
}

.slide-fade-enter-active {
  transition: all .6s ease-out;
}

.slide-fade-leave-active {
  transition: all .14s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(250px);
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #808080; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(68, 68, 68); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #333; 
}

</style>
