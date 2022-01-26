<template>
  <div v-if="!isMobile()">
     <Navbar/>
    <team-comp-form/>
      <div class ="block"/>
      <Footer/>
  </div>
  <div v-else>
    <Navbar/>
    <team-comp-form-mobile/>
    <Footer/>
  </div>
</template>

<script>

import TeamCompForm from "../components/TeamComp/TeamCompForm.vue";
import TeamCompFormMobile from '../components/TeamComp/TeamCompFormMobile.vue';
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';

export default {
  name: 'Team Form Page',
  components: {
    TeamCompForm,
    TeamCompFormMobile,
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
  font-family: Montserrat, sans-serif;
}

.block {
  height: 200px;
}
</style>