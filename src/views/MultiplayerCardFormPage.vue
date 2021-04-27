<template>
  <div className="MultiplayerForm">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      <div v-if="!isMobile()">
        <header className="App-header">
        <img src="../assets/genshin-logo.png" height='260px'/>
      </header>
        <MultiplayerForm/>
        <button @click="$router.push({name: 'Home'})">Back</button>
      </div>
      <div v-else>
        <header className="App-header">
        <img src="../assets/genshin-logo.png" width='80%'/>
      </header>
        <MultiplayerFormMobile/>
        <button @click="$router.push({name: 'Home'})">Back</button>
      </div>
      <div class= "footer">
      Genshin Card Generator is not affiliated with or endorsed by miHoYo. 
      <br>
      © All rights Reserved by miHoYo. Other properies belong to their respective owners. |    
      <router-link :to="`contact`"><a>Contact Us</a></router-link> | <router-link :to="`FAQ`"><a>FAQ</a></router-link>
    </div>
  </div>
</template>

<script>

import MultiplayerForm from "../components/MultiplayerForm.vue";
import MultiplayerFormMobile from "../components/MultiplayerFormMobile.vue";


export default {
  name: 'Multiplayer-form',
  components: {
    MultiplayerForm,
    MultiplayerFormMobile
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