<template>
  <div className="Contact">
            <div v-if="!isMobile()">
                <header className="App-header">
                    <img src="../assets/genshin-logo.png" height='260px'/>
                </header>
                <FAQ/>
            </div>
            <div v-else>
                <header className="App-header">
                    <img src="../assets/genshin-logo.png" width='80%'/>
                </header>
                <MobileFAQ/>
            </div>
    <div class= "footer">
        Genshin Card Generator is not affiliated with or endorsed by miHoYo. 
        <br>
        © All rights Resevered by miHoYo. Other properies belong to their respective owners. |
        <router-link :to="`contact`"><a>Contact Us</a></router-link> 
    </div>
  </div>
</template>

<script>

import MobileFAQ from "../components/MobileFAQ.vue";
import FAQ from "../components/FAQ.vue"

export default {
  name: 'Home',
  components: {
    MobileFAQ,
    FAQ
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

<style lang="scss" scoped>
.app{
    width: 100%
}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
.body {
  background-color:#464545;
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
button {
  background-color: #464545;
  color: white;
  padding: 10px 120px;
  text-align: center;
  font-size: 25px;
  margin: 30px 100px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 

}
 a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}
</style>