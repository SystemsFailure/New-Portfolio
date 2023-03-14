<template>
  <div class="content-modal-block" @click="$store.commit('change_value_ModalSearchComp')" >
    <div class="content-modal" @click="$event.stopPropagation()">
      <div class="inp-search">
        <input type="text" placeholder="search">
      </div>

      <div class="list-to-found">
        <div class="item-to-found" v-for="item in list_found" v-bind:key="item.id">
          <h2 class="title-item" style="color: white; font-size: 14px">{{ item.title }}</h2>
          <h3 class="description-item" style="color: white; font-size: 12px">{{ item.description }}</h3>
        </div>
      </div>

      <div class="statistics-choice">
        <h5 class="how" style="color: white; margin-right: 10px">Did the search help you?</h5>
        <button class="btn">Да</button>
        <button class="btn">Нет</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSearchComp",
  data()
  {
    return{
      // list_found : [[{ tags : {id : 1, title : 'settings', description : 'Our desc is very blow'}}]]
      list_found : [
        {
          id: 1, title : 'Привет', description: 'Пока что поиск не работает, он впринцепе не нужен особо, но еще мне лень...'
        },
        {
          id: 2, title: '????????????????????????????????????', description: '????????????????????????????????????'
        }
      ]
    }
  }
}
</script>

<style scoped>

.content-modal-block
{
  height: 100vh;
  background: rgba(0, 76, 77, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 9999;
  /*border-radius: 25px;*/
}

.content-modal
{
  margin-bottom: 50vh;
  width: 600px;
  height: 30vh;
  display: inline-block;
}

.content-modal .inp-search
{
  background: #263238;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-modal .inp-search input
{
  margin-top: 0px;
  width: 333px;
  height: 30px;
  background: #2e3137;
  border: 1px solid aqua;
  padding-left: 5px;
  color: white;
}

.content-modal .statistics-choice
{
  margin-top: 10px;
  background: #263238;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-to-found
{
  background: #263238;
  margin-top: 10px;
  padding: 10px;
}

.list-to-found .item-to-found
{
  margin-top: 10px;
  border-radius: 5px;
  background: #00612c;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 60px;
  height: 60px;
}
</style>