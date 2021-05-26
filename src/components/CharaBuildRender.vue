<template>
  <div className="App">
    <v-stage ref="stage" :config="stageSize">
      <v-layer v-if="this.$route.params.playerName == undefined" ref="layer">
          <v-text :config="{text: `An Error occurred, please go back to the Home page`, fontSize: 25, x: 300, y:350, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer>
        <v-image :config="{image: image}"/>
        <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 30, x: 180, y: 95, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.level}`, fontSize: 30, x: 300, y:155, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `HP - ${this.$route.params.flowermain} `, fontSize: 25, x: 540, y:128, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.flower1type} - ${this.$route.params.flower1}`, fontSize: 20, x: 540, y:155, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>

        <v-text :config="{text: `genshin-card-generator.com`, fontSize: 16, x: 38, y:655, fill:'black', opacity: 0.7, fontFamily:'SuezOne-Regular'}"></v-text>
        <v-image :config="{image: weapon, x: 90, y:390}"/>
        <v-image :config="{image: flower, x: 440, y:110}"/>
        <v-image :config="{image: feather, x: 440, y:200}"/>
        <v-image :config="{image: sands, x: 440, y:290}"/>
        <v-image :config="{image: goblet, x: 440, y:390}"/>
        <v-image :config="{image: circlet, x: 440, y:490}"/>
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
      flower: null,
      feather: null,
      sands: null,
      goblet: null,
      circlet: null,
      weapon: null
    };
  },
  
  created() {
      const image = new window.Image();
      image.src = require('../assets/chara-build/' + this.$route.params.chara + '.png');
      image.onload = () => {
        this.image = image;
        };
      const flower = new window.Image();
      flower.src = require('../assets/Artifacts/Flower/' + (this.$route.params.flower).split(" ").join("") + '.png');
      flower.onload = () => {
        this.flower = flower;
      };
      const feather = new window.Image();
      feather.src = require('../assets/Artifacts/Feather/' + (this.$route.params.feather).split(" ").join("") + '.png');
      feather.onload = () => {
        this.feather = feather;
      };
      const sands = new window.Image();
      sands.src = require('../assets/Artifacts/Sands/' + (this.$route.params.sands).split(" ").join("") + '.png');
     sands.onload = () => {
        this.sands = sands;
      };
      const goblet = new window.Image();
      goblet.src = require('../assets/Artifacts/Goblet/' + (this.$route.params.goblet).split(" ").join("") + '.png');
      goblet.onload = () => {
        this.goblet = goblet;
      };
      const circlet = new window.Image();
      circlet.src = require('../assets/Artifacts/Circlet/' + (this.$route.params.circlet).split(" ").join("") + '.png');
      circlet.onload = () => {
      this.circlet = circlet;
      };
      const weapon = new window.Image();
      weapon.src = require('../assets/Weapons/' + (this.$route.params.weapon).split(" ").join("") + '.png');
      weapon.onload = () => {
      this.weapon = weapon;
      };
    }
  }
</script>
