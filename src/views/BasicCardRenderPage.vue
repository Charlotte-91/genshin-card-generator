<template>
  <div class="BasicCardRender">
    <div class='body'>
      <div class="center">
        <div v-if="!isMobile()">
          <br>
          <div class='top-gap'/>
            <div class ='card'>
              <BasicRender/>
            </div>
          <div class = "savetext">
            Please right-click  on image and select "Save Image As" to save to your device.
            <br>
            Please save the image and upload it to twitter manually. We have not yet implemented auto upload! Thank you!
          </div>
          <Footer/>
        </div>
        <div v-else>
          <meta name="viewport" content="width=device-width,initial-scale=0.28,maximum-scale=2" />
          <div class='mobile-top-gap'/>
          <MobileRender/>
          <br>
          <div class='social'>
            <MobileFooter/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicRender from '@/components/BasicRender.vue'
import MobileRender from '@/components/BasicRender-Mobile.vue'
import Footer from '@/components/Footer.vue'
import MobileFooter from '@/components/MobileFooter.vue'

export default {
  name: 'BasicCardRender',
  components: {
    BasicRender,
    MobileRender,
    Footer,
    MobileFooter
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
  
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 30px;
}
.card {
  padding-top: 50px;
}
.top-gap {
  margin: 200px;
}
.mobile-top-gap {
  height: 100px;
}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
.savetext {
  font-size: 15px;
  padding: 30px;
  font-family: SuezOne-Regular; 
  color: grey;
  top: 20px;
}

.body {
  font-size: 25px;
  padding: 40px;
  font-family: SuezOne-Regular; 

}
.footer {

  height: 20px;
  font-size: 15px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  position: fixed;
  left: 0;
  bottom: 0;
  margin: -200px -5px;
}
button {
  background-color: #3b3b3b;
  color: white;
  padding: 10px 150px;
  text-align: center;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  align-items: center;
}
.mobile-button {
  background-color: #3b3b3b;
  color: white;
  padding: 10px 50px;
  text-align: center;
  font-size: 25px;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  margin: 10px 10px;
}
app {
  height:0%
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
.social {
  position: relative;
  top: 10px;
}

@media screen and (max-width: 399px) {
    .social {
    position: relative;
    top: 0px;
  }
}
@media screen and (min-width: 399px) {
    .social {
    position: relative;
    top: 20px;
  }
}
@media screen and (min-width: 700px) {
    .social {
    position: relative;
    top: -230px;
  }
}
@media screen and (min-width: 1000px) {
    .social {
    position: relative;
    top: -440px;
  }
}
</style>