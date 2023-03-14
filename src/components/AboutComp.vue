<template>
  <div class="main-div-About-comp">
    <NavigationBarComp></NavigationBarComp>

    <div class="content-about-comp">

      <img src="@/assets/av.png">

      <div class="about-me">
        <h1>About</h1>
        <span>
          I am engaged in the implementation of information systems and services.
          I love my job very much and I want to know all its facets in each of its hypostases.
        </span>
      </div>

      <div class="bio-data">
        <h3><span class="g-title-bio">Date of Birth</span>ХХ.ХХ.2002 (21 yers)</h3>
        <h3><span class="g-title-bio">Country</span>No information</h3>
        <h3><span class="g-title-bio">City</span>Wandering</h3>
        <h3><span class="g-title-bio">Mail</span>VladAvaryOnion@gmail.com</h3>
        <h3><span class="g-title-bio">Work phone</span><a href="tel:+79996370816">+79996370816</a></h3>
      </div>
    
    </div>
  </div>
</template>

<script>
import NavigationBarComp from "@/components/NavigationBarComp";
export default {
  name: "AboutComp",

  data()
  {
    return {
      
      arr_work_numbers: [
        {
          id: (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min,
          path: 'github.svg',
          title: 'Github',
          count: 19
        },
        {
          id: (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min,
          path: 'cpu-fill.svg',
          title: 'pet проекты',
          count: 11
        },
        {
          id: (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min,
          path: 'bar-chart-steps.svg',
          title: 'Опыт в IT',
          count: 'более 2 лет'
        },
        {
          id: (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min,
          path: 'laptop.svg',
          title: 'Freelance',
          count: '0'
        },
      ],
    }
  },

  components: {NavigationBarComp}

}
</script>

<style scoped lang="scss">
// $background-color: rgb(7, 10, 11);
$background-color: rgb(0, 0, 0);
$text-handler-color: #00ccff;


.main-div-About-comp{
  background: $background-color;
  height: 100vh;
  width: 100%;
}

.content-about-comp
{
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

  img {
    width: 1300px;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    z-index: 3;
  }
}

.content-about-comp .about-me
{
  position: absolute;
  top: 25%;
  left: 180px;
  max-width: 500px;
  color: $text-handler-color;

  h1 {
    width: fit-content;
    border-bottom: 1px solid #00ccff;
    
  }

  span {
    color: #666;
  }
}

.content-about-comp .about-me span
{
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  color: white;
}

.content-about-comp .bio-data
{
  position: absolute;
  top: 50%;
  left: 180px;
}

.content-about-comp .bio-data h3
{
  color: white;
  font-size: 18px;
  margin-top: 15px;
}

.content-about-comp .bio-data .g-title-bio
{
  color: $text-handler-color;
  margin-right: 10px;
  font-size: 18px;
}

/*2*/
.content-about-comp .next-section-content
{
  margin-top: 50px;
}

.content-about-comp .next-section-content .block-items
{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*min-width: 1000px;*/
  max-width: 1100px;
  height: auto;
  padding: 30px;
}

</style>