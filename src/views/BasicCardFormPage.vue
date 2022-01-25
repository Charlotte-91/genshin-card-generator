<template>
  <div className="BasicCard">
      <div v-if="!isMobile()">
        <Navbar/>
        <BasicForm/>
        <Footer/>
      </div>
      <div v-else>
        <Navbar/>
        <BasicFormMobile/>
        <Footer/>
      </div>
  </div>
</template>

<script>

import BasicForm from "../components/BasicForm/BasicForm.vue";
import BasicFormMobile from "../components/BasicForm/BasicForm-Mobile.vue"
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';


export default {
  name: 'BasicCard',
  components: {
    BasicForm,
    BasicFormMobile,
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

</style>