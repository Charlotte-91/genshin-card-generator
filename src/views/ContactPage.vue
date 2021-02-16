<template>
  <div className="Contact">
        <header className="App-header">
            <img src="../assets/genshin-logo.png" height='260px'/>
        </header>
        <body>
            <ContactForm/>
        </body>
        <button @click="$router.push({name: 'Home'})">Back</button>
        <div class= "footer">
            Genshin Card Generator is not affiliated with or endorsed by miHoYo.
        </div>
  </div>
</template>

<script>

import ContactForm from "../components/ContactForm.vue";

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
  methods: {
    // isMobile() {
    //   if(/Android|webOS|ipad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }
}
</script>

<style>
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
</style>