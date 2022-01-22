<template>

  <div className="Home">
    <div v-if="!isMobile()">
      <navbartest/>
      <foot-test/>
    </div>

    <div v-else>
      <navbartest/>
      <foot-test/>
    </div>
  </div>

</template>

<script>
import Navbartest from '../components/test/Navbar test.vue';
import FootTest from '../components/test/FootTest.vue';
export default {
  name: 'Navbar test',
  components: {
    Navbartest,
    FootTest

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