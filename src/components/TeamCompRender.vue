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
        <v-image :config="{image: weapon, x: 200, y:350}"/>
        <v-image :config="{image: weapon2, x: 400, y:350}"/>
        <v-image :config="{image: weapon3, x: 600, y:350}"/>
        <v-image :config="{image: weapon4, x: 800, y:350}"/>
        <v-image :config="{image: circlet1, x: 750, y:200}"/>
        <v-image :config="{image: circlet2, x: 750, y:200}"/>
        <v-image :config="{image: circlet3, x: 750, y:200}"/>
        <v-image :config="{image: circlet4, x: 750, y:200}"/>
        <v-image :config="{image: feather1, x: 750, y:200}"/>
        <v-image :config="{image: feather2, x: 750, y:200}"/>
        <v-image :config="{image: feather3, x: 750, y:200}"/>
        <v-image :config="{image: feather4, x: 750, y:200}"/>
        <v-image :config="{image: flower1, x: 750, y:200}"/>
        <v-image :config="{image: flower2, x: 750, y:200}"/>
        <v-image :config="{image: flower3, x: 750, y:200}"/>
        <v-image :config="{image: flower4, x: 750, y:200}"/>
        <v-image :config="{image: goblet1, x: 750, y:200}"/>
        <v-image :config="{image: goblet2, x: 750, y:200}"/>
        <v-image :config="{image: goblet3, x: 750, y:200}"/>
        <v-image :config="{image: goblet4, x: 750, y:200}"/>
        <v-image :config="{image: sands1, x: 750, y:200}"/>
        <v-image :config="{image: sands2, x: 750, y:200}"/>
        <v-image :config="{image: sands3, x: 750, y:200}"/>
        <v-image :config="{image: sands4, x: 750, y:200}"/>
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
      team4: null,
      weapon: null,
      weapon2: null,
      weapon3: null,
      weapon4: null,
      circlet1: null,
      circlet2: null,
      circlet3: null,
      circlet4: null,
      feather1: null,
      feather2: null,
      feather3: null,
      feather4: null,
      flower1: null,
      flower2: null,
      flower3: null,
      flower4: null,
      goblet1: null,
      goblet2: null,
      goblet3: null,
      goblet4: null,
      sands1: null,
      sands2: null,
      sands3: null,
      sands4: null
    };
  },
  
  created() {
  
      const image = new window.Image();
      image.src = require('../assets/team-loadout/card/Liyue.png');
      image.onload = () => {
        this.image = image;
        };
      const team1 = new window.Image();
      team1.src = require('../assets/team-loadout/portraits/' + this.$route.params.chara + '-banner.png');
      team1.onload = () => {
        this.team1 = team1;
      };
      const team2 = new window.Image();
      team2.src = require('../assets/team-loadout/portraits/' + this.$route.params.chara2 + '-banner.png');
      team2.onload = () => {
        this.team2 = team2;
      };
      const team3 = new window.Image();
      team3.src = require('../assets/team-loadout/portraits/' + this.$route.params.chara3 + '-banner.png');
      team3.onload = () => {
        this.team3 = team3;
      };
      const team4 = new window.Image();
      team4.src = require('../assets/team-loadout/portraits/' + this.$route.params.chara4 + '-banner.png');
      team4.onload = () => {
        this.team4 = team4;
      };
       const weapon = new window.Image();
      weapon.src = require('../assets/Weapons/' + this.$route.params.weapon.split(" ").join("") + '.png');
      weapon.onload = () => {
        this.weapon = weapon;
      };
      const weapon2 = new window.Image();
      weapon2.src = require('../assets/Weapons/' + this.$route.params.weapon2.split(" ").join("") + '.png');
      weapon2.onload = () => {
        this.weapon2 = weapon2;
      };
      const weapon3 = new window.Image();
      weapon3.src = require('../assets/Weapons/' + this.$route.params.weapon3.split(" ").join("") + '.png');
      weapon3.onload = () => {
        this.weapon3 = weapon3;
      };
      const weapon4 = new window.Image();
      weapon4.src = require('../assets/Weapons/' + this.$route.params.weapon4.split(" ").join("") + '.png');
      weapon4.onload = () => {
        this.weapon4 = weapon4;
      };

      const circlet1 = new window.Image();
      circlet1.src = require('../assets/Artifacts/Circlet/' + this.$route.params.circlet1.split(" ").join("") + '.png');
      circlet1.onload = () => {
        this.circlet1 = circlet1;
      };
      const circlet2 = new window.Image();
      circlet2.src = require('../assets/Artifacts/Circlet/' + this.$route.params.circlet2.split(" ").join("") + '.png');
      circlet2.onload = () => {
        this.circlet2 = circlet2;
      };
      const circlet3 = new window.Image();
      circlet3.src = require('../assets/Artifacts/Circlet/' + this.$route.params.circlet3.split(" ").join("") + '.png');
      circlet3.onload = () => {
        this.circlet3 = circlet3;
      };
      const circlet4 = new window.Image();
      circlet4.src = require('../assets/Artifacts/Circlet/' + this.$route.params.circlet4.split(" ").join("") + '.png');
      circlet4.onload = () => {
        this.circlet4 = circlet4;
      };

      const feather1 = new window.Image();
      feather1.src = require('../assets/Artifacts/Feather/' + this.$route.params.feather1.split(" ").join("") + '.png');
      feather1.onload = () => {
        this.feather1 = feather1;
      };
      const feather2 = new window.Image();
      feather2.src = require('../assets/Artifacts/Feather/' + this.$route.params.feather2.split(" ").join("") + '.png');
      feather2.onload = () => {
        this.feather2 = feather2;
      };
      const feather3 = new window.Image();
      feather3.src = require('../assets/Artifacts/Feather/' + this.$route.params.feather3.split(" ").join("") + '.png');
      feather3.onload = () => {
        this.feather3 = feather3;
      };
      const feather4 = new window.Image();
      feather4.src = require('../assets/Artifacts/Feather/' + this.$route.params.feather4.split(" ").join("") + '.png');
      feather4.onload = () => {
        this.feather4 = feather4;
      };

      const flower1 = new window.Image();
      flower1.src = require('../assets/Artifacts/Flower/' + this.$route.params.flower1.split(" ").join("") + '.png');
      flower1.onload = () => {
        this.flower1 = flower1;
      };
      const flower2 = new window.Image();
      flower2.src = require('../assets/Artifacts/Flower/' + this.$route.params.flower2.split(" ").join("") + '.png');
      flower2.onload = () => {
        this.flower2 = flower2;
      };
      const flower3 = new window.Image();
      flower3.src = require('../assets/Artifacts/Flower/' + this.$route.params.flower3.split(" ").join("") + '.png');
      flower3.onload = () => {
        this.flower3 = flower3;
      };
      const flower4 = new window.Image();
      flower4.src = require('../assets/Artifacts/Flower/' + this.$route.params.flower4.split(" ").join("") + '.png');
      flower4.onload = () => {
        this.flower4 = flower4;
      };

       const goblet1 = new window.Image();
      goblet1.src = require('../assets/Artifacts/Goblet/' + this.$route.params.goblet1.split(" ").join("") + '.png');
      goblet1.onload = () => {
        this.goblet1 = goblet1;
      };
      const goblet2 = new window.Image();
      goblet2.src = require('../assets/Artifacts/Goblet/' + this.$route.params.goblet2.split(" ").join("") + '.png');
      goblet2.onload = () => {
        this.goblet2 = goblet2;
      };
      const goblet3 = new window.Image();
      goblet3.src = require('../assets/Artifacts/Goblet/' + this.$route.params.goblet3.split(" ").join("") + '.png');
      goblet3.onload = () => {
        this.goblet3 = goblet3;
      };
      const goblet4 = new window.Image();
      goblet4.src = require('../assets/Artifacts/Goblet/' + this.$route.params.goblet4.split(" ").join("") + '.png');
      goblet4.onload = () => {
        this.goblet4 = goblet4;
      };

        const sands1 = new window.Image();
      sands1.src = require('../assets/Artifacts/Sands/' + this.$route.params.sands1.split(" ").join("") + '.png');
      sands1.onload = () => {
        this.sands1 = sands1;
      };
      const sands2 = new window.Image();
      sands2.src = require('../assets/Artifacts/Sands/' + this.$route.params.sands2.split(" ").join("") + '.png');
      sands2.onload = () => {
        this.sands2 = sands2;
      };
      const sands3 = new window.Image();
      sands3.src = require('../assets/Artifacts/Sands/' + this.$route.params.sands3.split(" ").join("") + '.png');
      sands3.onload = () => {
        this.sands3 = sands3;
      };
      const sands4 = new window.Image();
      sands4.src = require('../assets/Artifacts/Sands/' + this.$route.params.sands4.split(" ").join("") + '.png');
      sands4.onload = () => {
        this.sands4 = sands4;
      };
    }
}
</script>
