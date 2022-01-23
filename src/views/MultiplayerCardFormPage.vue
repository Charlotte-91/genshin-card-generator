<template>
  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      <div v-if="!isMobile()">
        <Navbar/>
        <MultiplayerForm/>
        <Footer/>
      </div>
      <div v-else>
        <Navbar/>
        <MultiplayerFormMobile/>
        <Footer/>
      </div>
  </div>
</template>

<script>

import MultiplayerForm from "../components/multiplayerForm/MultiplayerForm.vue";
import MultiplayerFormMobile from "../components/multiplayerForm/MultiplayerFormMobile.vue";
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';


export default {
  name: 'Multiplayer-form',
  components: {
    MultiplayerForm,
    MultiplayerFormMobile,
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
body {
  justify-content: center;
  font-size: 25px;
  padding: 20px;
}
</style>