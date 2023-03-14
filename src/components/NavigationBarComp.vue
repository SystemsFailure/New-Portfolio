<template>
<div class="nav-menu">

  <div class="header-photo">
    <img src="@/assets/logo-tech.png" alt="logo main">
  </div>

  <div class="content">
    <ul class="classic-menu main-menu">
      <li class="menu-item menu-item-type">
        <router-link to="/home" style="text-decoration: none">
          <span class="menu-icon-home"></span>
          <span class="title-link">Home</span>
        </router-link>
      </li>

      <li class="menu-item menu-item-type">
        <router-link to="/about" style="text-decoration: none">
          <span class="menu-icon-home"></span>
          <span class="title-link">About Me</span>
        </router-link>
      </li>

      <li class="menu-item menu-item-type">
        <router-link to="/cv" style="text-decoration: none">
          <span class="menu-icon-home"></span>
          <span class="title-link">Resume</span>
        </router-link>
      </li>

    </ul>

    <div class="number">
      <h3><a href="tel:+79996370816">+79996370816</a></h3>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "NavigationBarComp"
}
</script>

<style scoped lang="scss">
.nav-menu
{
  width: 100%;
  height: 50px;
  background: rgba($color: #0b0b0c, $alpha: .5);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 3;

  .content {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    .number {
      margin-left: auto;
      margin-right: 15px;      

      h3 {
        color: #fff;
        font-size: 18px;

        a {
          text-decoration: none;
        }
      }
    }

  }
}
.nav-menu ul .menu-item
{
  display: inline;
}

.nav-menu ul .menu-item .title-link
{
  color: white;
  margin-left: 50px;
  cursor: default;
  font-size: 14px;
  text-transform: uppercase;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
}

.nav-menu ul .menu-item .title-link:hover
{
  opacity: .6;
  cursor: pointer;
  transition: .6s;
  border-bottom: 1px solid white;
}

.header-photo img
{
  width: 40px;
  height: 40px;
  padding-left: 15px;
  object-fit: cover;

}

.header-photo img:hover
{
  opacity: .6;
  cursor: pointer;
  transition: .4s;
}

</style>