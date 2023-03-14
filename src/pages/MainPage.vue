<template>
  <div class="main-page">
    <NavigationBarComp></NavigationBarComp>
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";

export default {
  name: "MainPage",
  components: {NavigationBarComp}
}
</script>

<style scoped>
.main-page{
  padding: 0;
  margin: 0;
  background-color: #2e3137;
  height: 110vh;
  width: 100%;
}
</style>