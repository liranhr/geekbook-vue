<template>
  <div>
    <div class="welcome-page-container">
      <img style="margin-bottom: 22px;" src="../../assets/Group.png" alt="">
      <p style="margin-bottom: 22px;" class="welcome-header">מצא את הספר המדויק עבורך.</p>
      <div class="welcome-continue-button">
        <v-btn
          :disabled="loading"
          :loading="loading"
          class="text-none mb-4"
          color="black"
          size="x-large"
          variant="flat"
          block
          @click="loading = !loading"
        >
          המשך
        </v-btn>
      </div>
      <div>
        <div>
          <p class="welcome-existing-user">כבר יש לך משתמש?</p> 
          <a class="welcome-signin-link" href="">היכנס</a>
        </div>
        <a class="welcome-guest-link" href="">או היכנס כאורח</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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