<template>
  <div>
    <p class="pragraph-header">צעד {{step}} מתוך 6</p>
    <div>
      <v-btn v-if="step != 1" variant="text" class="button-header-back" size="large" @click="stepUpDown(false)" >חזרה</v-btn>
      <v-btn variant="text" class="button-header-exit" size="large">יציאה</v-btn>
    </div>
    <div>
      <v-progress-linear
        v-if="step != 1"
        v-model="progress"
        :buffer-value="bufferValue"
        color="purple"
      ></v-progress-linear>
    </div>
    <StepOne @stepUpDown="stepUpDown" v-if="step == 1"/>
    <div class="bottom-class">
        <div>
          <p class="welcome-existing-user">כבר יש לך משתמש?</p> 
          <a class="welcome-signin-link" href="">היכנס</a>
        </div>
        <a class="welcome-guest-link" href="">או היכנס כאורח</a>
      </div>
  </div>
</template>

<script>
import StepOne from './Steps/StepOne'
export default {
  name: 'App',
  data(){
    return{
      step: 1,
      progress: 100/6
    }
  },
  components: {
    StepOne
  },
  methods:{
    stepUpDown(upOrDown){
      if(upOrDown === false){
        this.step--;
      }else{
        this.step++;
      }
    },
    getStep(){
      return this.step
    }
  }
}
</script>

<style>
.bottom-class{
    position: absolute;
    text-align: center;
    bottom: 20px;
    width: 100%;
}
.pragraph-header{
  margin: 6px;
  font-family: initial;
}
.button-header-exit{
  float: right;
  font-family: initial;
}
.button-header-back{
  float: left;
  font-family: initial;
}
</style>