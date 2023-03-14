<template>
<div class="loader">
  <div class="loader_">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
    <span style="--i:5;"></span>
    <span style="--i:6;"></span>
    <span style="--i:7;"></span>
    <span style="--i:8;"></span>
    <span style="--i:9;"></span>
    <span style="--i:10;"></span>
  </div>
</div>
</template>

<script>
export default {
  name: "animationCircle"
}
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loader
{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /*overflow: hidden;*/
  background: #263238;
}

.loader_
{
  position: relative;
  width: 300px;
  height: 300px;
}

.loader_ span
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * var(--i)));
}

.loader_ span::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  border: 4px solid aqua;
  box-sizing: border-box;
  box-shadow: 0 0 20px aqua,
  -30px -30px 0 aqua,
  -30px -30px 20px aqua,
  30px 30px 0 aqua,
  30px 30px 20px aqua,
  30px -30px 0 aqua,
  30px -30px 20px aqua,
  -30px 30px 0 aqua,
  -30px 30px 20px aqua;
  animation: animate 5s linear infinite;
  animation-delay: calc(-0.25s * var(--i));
  transform-origin: 15px;
  transition: 1.5s;
}

.loader_:hover span::before {
  transform-origin: 250px;
  box-shadow: 0 0 20px aqua,
  -200px -200px 0 aqua,
  -200px -200px 20px aqua,
  200px 200px 0 aqua,
  200px 200px 20px aqua,
  200px -200px 0 aqua,
  200px -200px 20px aqua,
  -200px 200px 0 aqua,
  -200px 200px 20px aqua;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
    /*filter: hue-rotate(0deg);*/
  }
  100% {
    transform: rotate(360deg);
    /*filter: hue-rotate(360deg);*/
  }
}
</style>