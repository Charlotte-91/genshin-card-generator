<template>
  <div className="App">
    <v-stage ref="stage" :config="stageSize">
      <v-layer v-if="this.$route.params.playerName == undefined" ref="layer">
          <v-text :config="{text: `An Error occurred, please go back to the Home page`, fontSize: 25, x: 300, y:350, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-else-if="this.$route.params.platform == undefined" ref="layer">
        <v-image :config="{image: image}"/>
        <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 30, x: 200, y: 110, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.AR}`, fontSize: 30, x: 560, y:110, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.SA}`, fontSize: 30, x: 900, y:110, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `genshin-card-generator.com`, fontSize: 16, x: 38, y:655, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
        <v-image :config="{image: team1, x: 170, y:200}"/>
        <v-image :config="{image: team2, x: 450, y:200}"/>
        <v-image :config="{image: team3, x: 650, y:200}"/>
        <v-image :config="{image: team4, x: 750, y:200}"/>
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
      cardBg: null,
      team1: null,
      team2: null,
      team3: null,
      team4: null,
    };
  },
  
  created() {
    if (this.$route.params.UID == undefined) {
      const cardBg = new window.Image();
      cardBg.src = require('@/assets/Cards/TeamLoadoutCard.png');
      cardBg.onload = () => {
      this.cardBg = cardBg;
      };
      const team1 = new window.Image();
      team1.src = require('@/assets/SquarePortraits' + this.$route.params.team1 + '.png');
      team1.onload = () => {
        this.team1 = team1;
      };
      const team2 = new window.Image();
      team2.src = require('@/assets/SquarePortraits/' + this.$route.params.team2 + '.png');
      team2.onload = () => {
        this.team2 = team2;
      };
      const team3 = new window.Image();
      team3.src = require('@/assets/SquarePortraits' + this.$route.params.team3 + '.png');
      team3.onload = () => {
        this.team3 = team3;
      };
      const team4 = new window.Image();
      team4.src = require('@/assets/SquarePortraits' + this.$route.params.team4 + '.png');
      team4.onload = () => {
        this.team4 = team4;
      };
    }else{
      const cardBg = new window.Image();
      cardBg.src = require('@/assets/Cards/TeamLoadoutCard.png');
      cardBg.onload = () => {
        this.cardBg = cardBg;
      };
      const team1 = new window.Image();
      team1.src = require('@/assets/SquarePortraits' + this.$route.params.team1 + '.png');
      team1.onload = () => {
        this.team1 = team1;
      };
      const team2 = new window.Image();
      team2.src = require('@/assets/SquarePortraits' + this.$route.params.team2 + '.png');
      team2.onload = () => {
        this.team2 = team2;
      };
      const team3 = new window.Image();
      team3.src = require('@/assets/SquarePortraits' + this.$route.params.team3 + '.png');
      team3.onload = () => {
        this.team3 = team3;
      };
      const team4 = new window.Image();
      team4.src = require('@/assets/SquarePortraits' + this.$route.params.team4 + '.png');
      team4.onload = () => {
        this.team4 = team4;
      };
    }
  }
};
</script>
