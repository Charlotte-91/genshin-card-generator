<template>
  <div class="cardPage">
    <div class='body'>
      <div class="centered">
        <div v-if="!isMobile()">
          <br>
          <div class='top-gap'/>
          <CardGenerator/>
          <div class = "savetext">
            Please right-click  on image and select "Save Image As" to save to your device
          </div>
          <Footer/>
        </div>
        <div v-else>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
          <div class='cardLayout'>
            <mobile-card/>
          </div>
          <MobileFooter/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardGenerator from '@/components/CardGenerator.vue'
import MobileCard from '@/components/MobileCard.vue'
import Footer from '@/components/Footer.vue'
import MobileFooter from '@/components/MobileFooter.vue'

export default {
  name: 'CardPage',
  components: {
    CardGenerator,
    MobileCard,
    Footer,
    MobileFooter
  },
  methods: {
    isMobile() {
      if(/Android|webOS|ipad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
.top-gap {
  height: 200px;

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
  padding: 20px;
  font-family: SuezOne-Regular; 
}
.footer {
  bottom: 0;
  height: 20px;
  font-size: 15px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  position: absolute;
  margin: -200px -5px;
}
.social {
  position: bottom;
  align-items: center;
  position: absolute;
}
.cardLayout {
  margin: 90px 10px;
}
button {
  background-color: #464545;
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
  background-color: #464545;
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

</style>