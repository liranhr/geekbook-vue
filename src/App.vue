<template>
  <div class="app-container">
    <div>
      <p class="pragraph-header">צעד {{step}} מתוך 6</p>
      <button class="button-header">יציאה</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      step: 1,
    }
  },
  components: {
  }
}
</script>

<style>
.app-container{
  background-color: #E5E6FF;
}
.pragraph-header{
  float: left;
  margin: auto;
}
.button-header{
  float: right;
}
</style>
