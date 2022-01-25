<template>
  <div className="Home">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
    <div v-if="!isMobile()">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <Navbar/>
        <body>
        <div class="block">
          <p>Please choose a card template</p>
        </div>
        <SplashSelection/>
        </body>
        <Footer/>
    </div>
    <div v-else>
        <Navbar/>
        <body>
        <div class="block-mobile">
            <p>Please choose a card template</p>
        </div>
        <SplashSelectionMobile/>
        </body>
        <Footer/>
    </div>
  </div>
</template>

<script>
import SplashSelection from "../components/SplashSelection.vue";
import SplashSelectionMobile from "../components/SplashSelectionMobile.vue";
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';

export default {
  name: 'Home',
  components: {
    SplashSelection,
    SplashSelectionMobile,
    Navbar,
    Footer
  },
  methods: {
    isMobile() {
      if(/Android|webOS|ipad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|iOS/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

body {
  justify-content: center;
  font-size: 25px;
  padding: 20px;
  font-family: Montserrat, sans-serif; 
  height: auto;
}
.block {
    margin: 25px;
    color: rgb(36, 34, 34);
    font-family: Montserrat, sans-serif; 
    font-size: 90%;
    position: relative
}
.block-mobile {
    margin: 15px;
    color: rgb(36, 34, 34);
    font-family: Montserrat, sans-serif; 
    font-size: 20px;
    position: relative
}
</style>