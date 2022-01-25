<template>
    <div v-if="!isMobile()">
      <Navbar/>
      <body>
        <div class ='card'>
          <BasicRender/>
        </div>
        <div class = "savetext">
        </div>
      </body>
      <Footer/>
    </div>
    <div v-else>
      <meta name="viewport" content="width=device-width,initial-scale=0.28,maximum-scale=2"/>
      <NavbarRenderMobile/>
      <div class ="BodyMobile">
        <div class ='MobileCard'>
          <MobileRender/>
        </div>
      </div>
      <FooterRenderMobile/>
    </div>
</template>

<script>
import BasicRender from '@/components/BasicForm/BasicRender.vue'
import MobileRender from '@/components/BasicForm/BasicRender-Mobile.vue'
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';
import NavbarRenderMobile from '../components/CommonPageComponents/NavbarRenderMobile.vue';
import FooterRenderMobile from '../components/CommonPageComponents/FooterRenderMobile.vue';

export default {
  name: 'BasicCardRender',
  components: {
    BasicRender,
    MobileRender,
    Footer,
    Navbar,
    NavbarRenderMobile,
    FooterRenderMobile
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

  
.savetext {
  font-size: 15px;
  font-family: Montserrat, sans-serif;
  color: rgb(24, 24, 24);
  top: 20px;
}

body {
  height: 1000px;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
.MobileCard {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
}
app {
  height:0%
}
canvas {
  width: 500px;
  height: auto;
}
.BodyMobile {
  height: 80vh;
}

</style>