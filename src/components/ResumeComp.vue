<template>
  <div class="main-div-Resume-comp">
    <NavigationBarComp></NavigationBarComp>

    <div class="content-resume-comp">


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
}

.content-resume-comp
{
  width: 100%;
  height: auto;
  padding-top: 50px;
}


</style>