<template>
  <div className="App">
    <v-stage ref="stage" :config="stageSize">
      <v-layer v-if="this.$route.params.playerName == undefined" ref="layer">
          <v-text :config="{text: `An Error occurred, please go back to the Home page`, fontSize: 25, x: 300, y:350, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-else>
        <v-image :config="{image: cardBg}"/>
        <v-image :config="{image: chara}"/>
        <v-image :config="{image: card}"/>
        <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 25, x: 180, y: 115, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.AR}`, fontSize: 25, x: 550, y:115, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `genshin-card-generator.com`, fontSize: 16, x: 38, y:655, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
        <v-image :config="{image: team1, x: 170, y:200}"/>
        <v-image :config="{image: team2, x: 170, y:390}"/>
        <v-image :config="{image: team3, x: 400, y:390}"/>
        <v-image :config="{image: team4, x: 400, y:200}"/>
        <v-image :config="{image: pet, x: 660, y:50}"/>
      </v-layer>
    </v-stage>
    <div class="space"/>
    <div class="save-button">
      <button class='mobile-button' v-on:click=save()>Save image</button>
    </div>
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
      chara: null,
      card: null,
      team1: null,
      team2: null,
      team3: null,
      team4: null,
      pet: null
    };
  },
  methods: {
      downloadURI: function (uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // delete link;
      },
      save: function () {
        console.log('clidk')
        console.log(this.$refs)
        var dataURL = (this.$refs.stage.getStage()).toDataURL({ pixelRatio: 3 });
        this.downloadURI(dataURL, 'genshincard.png');
      },
  },
  created() {
      const cardBg = new window.Image();
      cardBg.src = require('../../assets/bgs/' + (this.$route.params.cardBg).split(" ").join("") + '.png');
      cardBg.onload = () => {
      this.cardBg = cardBg;
      };
      const chara = new window.Image();
      chara.src = require('../../assets/Characters/' + (this.$route.params.cardChara).split(" ").join("") + '.png');
      chara.onload = () => {
      this.chara = chara;
      };
      const card = new window.Image();
      card.src = require('../../assets/Cards/BasicCard.png');
      card.onload = () => {
      this.card = card;
      };
      const team1 = new window.Image();
      team1.src = require('../../assets/basicPortraits/' + (this.$route.params.team1).split(" ").join("") + '-small.png');
      team1.onload = () => {
        this.team1 = team1;
      };
      const team2 = new window.Image();
      team2.src = require('../../assets/basicPortraits/' + (this.$route.params.team2).split(" ").join("") + '-small.png');
      team2.onload = () => {
        this.team2 = team2;
      };
      const team3 = new window.Image();
      team3.src = require('../../assets/basicPortraits/' + (this.$route.params.team3).split(" ").join("") + '-small.png');
      team3.onload = () => {
        this.team3 = team3;
      };
      const team4 = new window.Image();
      team4.src = require('../../assets/basicPortraits/' + (this.$route.params.team4).split(" ").join("") + '-small.png');
      team4.onload = () => {
        this.team4 = team4;
      };
      const pet = new window.Image();
      pet.src = require('../../assets/pet/' + this.$route.params.pet + '.png');
      pet.onload = () => {
      this.pet = pet;
      };
  }
};
</script>
<style scoped>
@font-face { font-family: roboto-regular; 
  src: url('../../assets/SuezOne-Regular.ttf'); } 

.mobile-button {
  background-color: rgb(28, 34, 58);
  color: white;
  padding: 50px 280px;
  text-align: center;
  font-size: 60px;
  font-family: Montserrat, sans-serif; 
  cursor: pointer;
  border-radius: 15px;
}
.save-button {
    top: 20px;
    bottom: 0px;
    position: inherit;
    height: 30px;
}
.mobilesavetext {
  font-size: 45px;
  position: relative;
  padding: 50px;
  font-family: Montserrat, sans-serif; 
  color: grey;
}
.space {
  height: 100px;
}
</style>