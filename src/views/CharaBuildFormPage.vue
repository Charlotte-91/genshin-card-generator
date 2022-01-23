<template>
  <div className="CharaBuildFormPage">
    <div v-if="!isMobile()">
      <Navbar/>
      <CharaBuildForm/>
      <Footer/>
    </div>
    <div v-else>
      <Navbar/>
      <CharaBuildFormMobile/>
      <Footer/>
    </div>
  </div>
</template>

<script>

import CharaBuildForm from "../components/CharacterBuildForm/CharaBuildForm.vue";
import CharaBuildFormMobile from "../components/CharacterBuildForm/CharaBuildFormMobile.vue";
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';

export default {
  name: 'Character Build form page',
  components: {
    CharaBuildForm,
    CharaBuildFormMobile,
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
  font-family: SuezOne-Regular; 
}

</style>