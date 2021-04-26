<template>
  <div className="Home">
    <div v-if="!isMobile()">
        <header className="App-header">
            <img src="../assets/genshin-logo.png" height='260px'/>
        </header>
        <div class="block">
            <p>Please choose a card template</p>
        </div>
        <SplashSelection></SplashSelection>
        <div class= "footer">
          Genshin Card Generator is not affiliated with or endorsed by miHoYo. 
          <br>
          © All rights Reserved by miHoYo. Other properies belong to their respective owners. |    
          <router-link :to="`contact`"><a>Contact Us</a></router-link> | <router-link :to="`FAQ`"><a>FAQ</a></router-link>
        </div>
    </div>
    <div v-else>
        <header className="App-header">
            <img src="../assets/genshin-logo.png" width='80%'/>
        </header>
        <SplashSelectionMobile></SplashSelectionMobile>
        <div class= "mobile-footer">
          Genshin Card Generator is not affiliated with or endorsed by miHoYo. 
          <br>
          © All rights Reserved by miHoYo. Other properies belong to their respective owners. |    
          <router-link :to="`contact`"><a>Contact Us</a></router-link> | <router-link :to="`FAQ`"><a>FAQ</a></router-link>
        </div>
    </div>
  </div>
</template>

<script>
import SplashSelection from "../components/SplashSelection.vue";
import SplashSelectionMobile from "../components/SplashSelectionMobile.vue";

export default {
  name: 'Home',
  components: {
    SplashSelection,
    SplashSelectionMobile
  },
  methods: {
    isMobile() {
      if(/Android|webOS|ipad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
@font-face { font-family: roboto-regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
* {background-color: #464545}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
.body {
  font-size: 25px;
  padding: 20px;
  font-family: roboto-regular;
}
.mobile-footer {
  position: bottom;
  padding: 30px;
  bottom: 0;
  height: 20px;
  font-size: 16px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
}
.footer {
  position: bottom;
  padding: 30px;
  bottom: 0;
  height: 20px;
  font-size: 16px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
}
.routerlink {
  display: block;
  color: rgb(240, 20, 20)
}
 a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}
.block {
    margin: 25px;

    color: white;
    font-family: roboto-regular;
    font-size: 30px;
    position: relative
}
</style>