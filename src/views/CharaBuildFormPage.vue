<template>
  <div className="Home">
    
      <div v-if="!isMobile()">
        <header className="App-header">
        <img src="../assets/genshin-logo.png" height='260px'/>
      </header>
      <body>
        <CharaBuildForm/>
      </body>
        <button @click="$router.push({name: 'Home'})">Back</button>
      </div>
      <div v-else>
        <header className="App-header">
        <img src="../assets/genshin-logo.png" width='80%'/>
      </header>
        <CharaBuildFormMobile/>
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

import CharaBuildForm from "../components/CharaBuildForm.vue";
import CharaBuildFormMobile from "../components/CharaBuildFormMobile.vue";

export default {
  name: 'Character Build form page',
  components: {
    CharaBuildForm,
    CharaBuildFormMobile
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

* {background-color: #464545}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
body {
    justify-content: center;
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