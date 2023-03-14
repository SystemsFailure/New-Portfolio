<template>
  <div class="main-div-Blog-comp">
    <NavigationBarComp></NavigationBarComp>
<!--    Use bombAssistant by comp-->
    <BombAssistentComp></BombAssistentComp>
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";
import BombAssistentComp from "@/components/globalComp/BombAssistentComp";
export default {
  name: "BlogComp",
  components: {NavigationBarComp, BombAssistentComp}

}
</script>

<style scoped>
.main-div-Blog-comp{
  background: #2e3137;
  height: 100vh;
  width: 100%;
}
</style>