<template>
  <div className="App">
    <v-stage ref="stage" :config="stageSize">
      <v-layer v-if="this.$route.params.platform == undefined" ref="layer">
        <v-image :config="{image: image}"/>
        <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 25, x: 180, y: 115, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.AR}`, fontSize: 25, x: 550, y:115, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `genshin-impact-card-generator.herokuapp.com`, fontSize: 16, x: 38, y:655, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
        <v-image :config="{image: team1, x: 170, y:200}"/>
        <v-image :config="{image: team2, x: 170, y:390}"/>
        <v-image :config="{image: team3, x: 400, y:390}"/>
        <v-image :config="{image: team4, x: 400, y:200}"/>
      </v-layer>
      <v-layer v-else>
        <v-image :config="{image: image}"/>
        <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 25, x: 180, y: 115, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.UID}`, fontSize: 25, x: 180, y: 206, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.AR}`, fontSize: 25, x: 552, y:115, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.platform}`, fontSize: 25, x: 552, y:206, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.server}`, fontSize: 25, x: 552, y:293, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.twitter}`, fontSize: 25, x: 180, y:293, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `genshin-impact-card-generator.herokuapp.com`, fontSize: 16, x: 38, y:655, fill:'black', opacity: 0.7, fontFamily:'SuezOne-Regular'}"></v-text>
        <v-image :config="{image: team1, x: 90, y:390}"/>
        <v-image :config="{image: team2, x: 240, y:390}"/>
        <v-image :config="{image: team3, x: 390, y:390}"/>
        <v-image :config="{image: team4, x: 540, y:390}"/>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
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
    if (this.$route.params.UID == undefined) {
      const image = new window.Image();
      image.src = require('../assets/alt-card-bgs/' + this.$route.params.cardChara + '.png');
      image.onload = () => {
      this.image = image;
      };
      const team1 = new window.Image();
      team1.src = require('../assets/alt-teams/' + this.$route.params.team1 + '.png');
      team1.onload = () => {
        this.team1 = team1;
      };
      const team2 = new window.Image();
      team2.src = require('../assets/alt-teams/' + this.$route.params.team2 + '.png');
      team2.onload = () => {
        this.team2 = team2;
      };
      const team3 = new window.Image();
      team3.src = require('../assets/alt-teams/' + this.$route.params.team3 + '.png');
      team3.onload = () => {
        this.team3 = team3;
      };
      const team4 = new window.Image();
      team4.src = require('../assets/alt-teams/' + this.$route.params.team4 + '.png');
      team4.onload = () => {
        this.team4 = team4;
      };
    }else{
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
  }
};
</script>
