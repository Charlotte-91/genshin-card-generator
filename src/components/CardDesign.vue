<template>
  <div className="App">

    <!-- <img :src="require('../assets/card-bgs/' + this.$route.params.charaCard + '.png')" />
    <img :src="require('../assets/teams/' + this.$route.params.team1 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team2 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team3 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team4 + '.png')" height='200px'/> -->
    <div class="centered">
      <v-stage ref="stage" :config="stageSize">
        <v-layer ref="layer">
          <v-image :config="{image: image}"/>
          <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 40, x: 180, y: 105, fill:'#7b7166'}"></v-text>
          <v-text :config="{text: `${this.$route.params.UID}`, fontSize: 40, x: 180, y: 200, fill:'#7b7166'}"></v-text>
          <v-text :config="{text: `${this.$route.params.AR}`, fontSize: 40, x: 550, y:110, fill:'#7b7166'}"></v-text>
          <v-text :config="{text: `${this.$route.params.platform}`, fontSize: 40, x: 550, y:200, fill:'#7b7166'}"></v-text>
          <v-text :config="{text: `${this.$route.params.server}`, fontSize: 40, x: 550, y:285, fill:'#7b7166'}"></v-text>
          <v-text :config="{text: `${this.$route.params.twitter}`, fontSize: 40, x: 180, y:285, fill:'#7b7166'}"></v-text>
          <v-image :config="{image: team1, x: 90, y:390}"/>
          <v-image :config="{image: team2, x: 240, y:390}"/>
          <v-image :config="{image: team3, x: 390, y:390}"/>
          <v-image :config="{image: team4, x: 540, y:390}"/>
        </v-layer>
      </v-stage>
      <button @click="$router.push({name: 'Home'})">Back</button>
      <div class= "footer">
        Genshin Card Generator is not affiliated with or endorsed by miHoYo.
      </div>
    </div>
  </div>
</template>
<script>

//Scripts//
import Vue from 'vue';
import VueKonva from 'vue-konva'

Vue.use(VueKonva)


export default {
  data() {
    return {
      stageSize: {
        width: 1200,
        height: 674
      },
      image: null,
      team1: null,
      team2: null,
      team3: null,
      team4: null
    };
  },
  created() {
    const image = new window.Image();
    image.src = require('../assets/card-bgs/' + this.$route.params.cardChara + '.png');
    image.onload = () => {
      this.image = image;
      };
    const team1 = new window.Image();
    team1.src = require('../assets/teams/' + this.$route.params.team1 + '.png');
    team1.onload = () => {
      this.team1 = team1;
    };
    const team2 = new window.Image();
    team2.src = require('../assets/teams/' + this.$route.params.team2 + '.png');
    team2.onload = () => {
      this.team2 = team2;
    };
    const team3 = new window.Image();
    team3.src = require('../assets/teams/' + this.$route.params.team3 + '.png');
    team3.onload = () => {
      this.team3 = team3;
    };
    const team4 = new window.Image();
    team4.src = require('../assets/teams/' + this.$route.params.team4 + '.png');
    team4.onload = () => {
      this.team4 = team4;
    };

  }
};
</script>
