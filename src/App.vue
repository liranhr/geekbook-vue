<template>
  <div class="app-container">
    <div>
      <p class="pragraph-header">צעד {{step}} מתוך 6</p>
      <v-btn variant="text" class="button-header" size="large">יציאה</v-btn>
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
  margin: 6px;
  font-family: initial;
}
.button-header{
  float: right;
  font-family: initial;
  }
</style>
