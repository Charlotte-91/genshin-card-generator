<template>
  <div className="Contact">
    <div v-if="!isMobile()">
      <Navbar/>
      <ContactForm/>
      <Footer/>
    </div>    
    <div v-else>
      <Navbar/>
      <MobileContactForm/>
      <Footer/>
    </div>
  </div>
</template>

<script>

import ContactForm from "../components/ContactForm.vue";
import MobileContactForm from "../components/MobileContactForm.vue";
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';


export default {
  name: 'Contact',
  components: {
    ContactForm,
    MobileContactForm,
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

</style>