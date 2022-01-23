<template>
  <div className="Home">
    
      <div v-if="!isMobile()">
        <header className="App-header">
        <img src="../assets/genshin-logo.png" height='260px'/>
      </header>
        <character-build-box/>
        <button @click="$router.push({name: 'Home'})">Back</button>
      </div>
      
      <div v-else>
        <header className="App-header">
        <img src="../assets/genshin-logo.png" width='80%'/>
      </header>
        <character-build-box/>
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

import CharacterBuildBox from "../components/CommonPageComponents/CharacterBuildBox.vue";

export default {
  name: 'CharacterBuildBox Page',
  components: {
    CharacterBuildBox,
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
* {background-image: "@/assets/bgs/StartScreen.png";}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
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