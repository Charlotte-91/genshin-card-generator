<template>
  <div class="Chara Build Render Page">
    <div class='body'>
      <div class="center">
        <div v-if="!isMobile()">
          <br>
          <div class='top-gap'/>
            <div class ='card'>
              <CharaBuildRender/>
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
          <CharaBuildRender/>
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
import CharaBuildRender from "../components/CharaBuildRender.vue";
import Footer from '@/components/Footer.vue'
import MobileFooter from '@/components/MobileFooter.vue'



export default {
  name: 'Chara Build Render Page',
  components: {
    CharaBuildRender,
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
  font-family: SuezOne-Regular; 
}
.footer {
  position: bottom;
  padding: 30px;
  bottom: 0;
  height: 20px;
  font-size: 15px;
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
</style>