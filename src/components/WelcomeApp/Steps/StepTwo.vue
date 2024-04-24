<template>
  <div>
    <div class="welcome-page-container">
      <!-- <img style="margin-bottom: 22px;" src="../../../assets/Group.png" alt=""> -->
      <p style="margin-bottom: 22px;" class="welcome-header">GeekBook</p>
      <p style="margin-bottom: 22px;" class="description-app">הוסף ביקורת ועזור לקהילת</p>
      <p style="margin-bottom: 22px;" class="description-app">החנונים למצוא את הספר</p>
      <p style="margin-bottom: 22px;" class="description-app">הבא שלהם!</p>
      <div class="welcome-continue-button">
        <v-btn
          class="text-none mb-4"
          color="black"
          size="x-large"
          variant="flat"
          block
          @click="clickContinue"
        >
          המשך
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    clickContinue(){
      this.$emit("stepUpDown",true)
    }
  }
}
</script>

<style>
.welcome-page-container{
    position: fixed;
    text-align: center;
    width: 100%;
    top: 40%;
    margin-top: -161.5px;
}

.welcome-page-container .welcome-header{
    font-size: 34px;
    text-shadow: 0px 1px 5px rgb(138,138,138);
    direction: rtl;
}
.welcome-page-container .description-app{
    font-size: 24px;
    text-shadow: 0px 1px 5px rgb(138,138,138);
    direction: rtl;
}

.welcome-continue-button{
    width: 88%;
    margin: auto;
}

.welcome-existing-user{
  direction: rtl;
  display: inline;
}

.welcome-signin-link{
    font-weight: bold;
    color: black;
    margin-right: 5px;
}

.welcome-guest-link{
  font-weight: bold;
  color: black;
  margin-right: 5px;
}
</style>