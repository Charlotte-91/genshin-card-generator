<template>
  <div className="App">

    <!-- <img :src="require('../assets/card-bgs/' + this.$route.params.charaCard + '.png')" />
    <img :src="require('../assets/teams/' + this.$route.params.team1 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team2 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team3 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team4 + '.png')" height='200px'/> -->
    
    <v-stage ref="stage" :config="stageSize">
        <v-layer ref="layer">
          <v-image :config="{
                image: image
              }"/>
        </v-layer>
      </v-stage>
   

    <button @click="$router.push({name: 'Home'})">Back</button>

    <div class= "footer">
      Genshin Card Generator is not affiliated with or endorsed by miHoYo.
    </div>
  </div>
  
</template>
<script>

//Scripts//
import Vue from 'vue';
import VueKonva from 'vue-konva'

Vue.use(VueKonva)

const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      stageSize: {
        width: width,
        height: height
      },
      image: null
    };
  },
  created() {
    const image = new window.Image();
    image.src = require('../assets/card-bgs/' + this.$route.params.cardChara + '.png');
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  }
};


</script>
