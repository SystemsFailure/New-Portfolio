<template>
  <ul class="w3-ul w3-card-4">
    <li class="w3-bar">
      <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
      <img src="@/assets/logo.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px" alt="eee">
      <div class="w3-bar-item">
        <span class="w3-large">Mike</span><br>
        <span>Web Designer</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "messFromOtherUserComp"
}
</script>

<style scoped>

</style>