<template>
    <div v-if="!isMobile()">
      <Navbar/>
      <body>
        <div class ='card'>
          <BasicRender/>
        </div>
        <div class = "savetext">
          Please right-click  on image and select "Save Image As" to save to your device.
          Please save the image and upload it to twitter manually. We have not yet implemented auto upload! Thank you!
        </div>
      </body>
      <Footer/>
    </div>
    <div v-else>
      <meta name="viewport" content="width=device-width,initial-scale=0.28,maximum-scale=2" />
      <Navbar/>
      <MobileRender/>
      <Footer/>
    </div>
</template>

<script>
import BasicRender from '@/components/BasicForm/BasicRender.vue'
import MobileRender from '@/components/BasicForm/BasicRender-Mobile.vue'
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';

export default {
  name: 'BasicCardRender',
  components: {
    BasicRender,
    MobileRender,
    Footer,
    Navbar
  },
  methods: {
    isMobile() {
     if(/Android|webOS|ipad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|iOS/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
   data() {
    return {
      share: {
        twitter: {
          size: "2x",
        },
        facebook: {
          size: "2x"
        }
      } 
    }
   }
}
</script>

<style scoped>

@font-face { font-family: roboto-regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
.savetext {
  font-size: 15px;
  font-family: SuezOne-Regular; 
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

app {
  height:0%
}

</style>