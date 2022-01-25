<template>
  <div className="FaqPage">
    <div v-if="!isMobile()">
      <Navbar/>
      <FAQ/>
      <Footer/>
    </div>    
    <div v-else>
      <Navbar/>
      <MobileFAQ/>
      <Footer/>
    </div>
  </div>
</template>

<script>

import MobileFAQ from "../components/MobileFAQ.vue";
import FAQ from "../components/FAQ.vue"
import Navbar from '../components/CommonPageComponents/Navbar.vue';
import Footer from '../components/CommonPageComponents/Footer.vue';

export default {
  name: 'FaqPage',
  components: {
    MobileFAQ,
    FAQ,
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

<style lang="scss" scoped>

</style>