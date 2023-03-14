<template>
  <div class="main-div-comp">
    <div class="content-portfolio-comp"></div>
  </div>
  <div class="global-block">
    <div class="helper-block">
      <img src="@/assets/logo.png" alt="myPhoto" style="margin-top: 80px">
      <div class="text-bout-me" style="
           margin-top: 80px;
           height: auto;
           display: flex;
           flex-direction: column;
           align-items: center">
        <h1 style="color: white">Эрик Леонхард Сергеевич</h1>
        <h6 style="color: white; opacity: 0.8; margin-top: 10px">Разработка информационных систем</h6>
        <div class="social-links">
          <ul class="list-social-links">
            <li class="social-item"><i class="bi bi-git"></i></li>
            <li class="social-item"><i class="bi bi-twitter"></i></li>
            <li class="social-item"><i class="bi bi-telegram"></i></li>
            <li class="social-item"><i class="bi bi-whatsapp"></i></li>
            <li class="social-item"><i class="bi bi-instagram"></i></li>
            <li class="social-item"><i class="bi bi-linkedin"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioComp"
}
</script>

<style scoped>
.main-div-comp
{
  background: #2e3137;
  height: 100vh;
  width: 100%;
}

.main-div-comp .content-portfolio-comp
{
  background: #2e3137;
  height: 100vh;
  width: 100%;
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
}

.main-div-comp .content .global-block
{
  height: 100%;
  width: 60%;
  background: #2e3137;
  /*box-sizing: border-box;*/
  display: flex;
  justify-content: center;
  align-items: start;

}

.main-div-comp .content .global-block .helper-block img
{
  max-width: 150px;
  max-height: 150px;
  width: auto;
  height: auto;
  border-radius: 100%;
}

.main-div-comp .content .global-block .helper-block
{
  background: #2e3137;
  width: 500px;
  height: 60vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.main-div-comp .content .global-block .social-item
{
  display: inline;
  color: white;
  padding-left: 10px;
  font-size: 20px;
  margin-top: 10px;
}

.main-div-comp .content .global-block .social-item:hover
{
  cursor: pointer;
  opacity: 0.9;
}

.main-div-comp .content .global-block .list-social-links
{
  margin-top: 10px;
}
</style>