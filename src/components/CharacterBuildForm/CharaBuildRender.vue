<template>
  <div className="App">
    <div class="top-gap"/>
    <v-stage ref="stage" :config="stageSize">
      <v-layer v-if="this.$route.params.playerName == undefined" ref="layer">
          <v-text :config="{text: `An Error occurred, please go back to the Home page`, fontSize: 25, x: 300, y:350, fill:'black', opacity: 0.7,  fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer>
        <v-image :config="{image: image}"/>
        <v-text :config="{text: `${this.$route.params.playerName}`, fontSize: 30, x: 180, y: 95, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.level}`, fontSize: 30, x: 300, y:155, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `HP - ${this.$route.params.flowermain} `, fontSize: 16, x: 530, y:130, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.flowersubstats[0].flowertype} - ${this.$route.params.flowersubstats[0].flowerstat}`, fontSize: 12, x: 530, y:150, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>  
      <v-layer v-if="this.$route.params.flowersubstats[1] != undefined" ref = 'layer'>
        <v-text :config="{text: `${this.$route.params.flowersubstats[1].flowertype} - ${this.$route.params.flowersubstats[1].flowerstat}`, fontSize: 12, x: 530, y:165, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>  
      <v-layer v-if="this.$route.params.flowersubstats[2] != undefined" ref = 'layer'>
        <v-text :config="{text: `${this.$route.params.flowersubstats[2].flowertype} - ${this.$route.params.flowersubstats[2].flowerstat}`, fontSize: 12, x: 530, y:180, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.flowersubstats[3] != undefined" ref = 'layer'>
        <v-text :config="{text: `${this.$route.params.flowersubstats[3].flowertype} - ${this.$route.params.flowersubstats[3].flowerstat}`, fontSize: 12, x: 530, y:195, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer> 

      <v-layer>
        <v-text :config="{text: `ATK - ${this.$route.params.feathermain} `, fontSize: 16, x: 530, y:215, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.feathersubstats[0].feathertype} - ${this.$route.params.feathersubstats[0].featherstat}`, fontSize: 12, x: 530, y:235, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>  
      <v-layer v-if="this.$route.params.feathersubstats[1] != undefined" ref = 'layer'>  
        <v-text :config="{text: `${this.$route.params.feathersubstats[1].feathertype} - ${this.$route.params.feathersubstats[1].featherstat}`, fontSize: 12, x: 530, y:250, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.feathersubstats[2] != undefined" ref = 'layer'>
        <v-text :config="{text: `${this.$route.params.feathersubstats[2].feathertype} - ${this.$route.params.feathersubstats[2].featherstat}`, fontSize: 12, x: 530, y:265, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.feathersubstats[3] != undefined" ref = 'layer'>
        <v-text :config="{text: `${this.$route.params.feathersubstats[3].feathertype} - ${this.$route.params.feathersubstats[3].featherstat}`, fontSize: 12, x: 530, y:280, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer> 

      <v-layer>
        <v-text :config="{text: `${this.$route.params.sandsmaintype} - ${this.$route.params.sandsmain} `, fontSize: 16, x: 530, y:305, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.sandssubstats[0].sandstype} - ${this.$route.params.sandssubstats[0].sandsstat}`, fontSize: 12, x: 530, y:325, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>  
      <v-layer v-if="this.$route.params.sandssubstats[1] != undefined" ref = 'layer'>  
        <v-text :config="{text: `${this.$route.params.sandssubstats[1].sandstype} - ${this.$route.params.sandssubstats[1].sandsstat}`, fontSize: 12, x: 530, y:340, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.sandssubstats[2] != undefined" ref = 'layer'>  
        <v-text :config="{text: `${this.$route.params.sandssubstats[2].sandstype} - ${this.$route.params.sandssubstats[2].sandsstat}`, fontSize: 12, x: 530, y:355, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>      </v-layer>
      <v-layer v-if="this.$route.params.sandssubstats[3] != undefined" ref = 'layer'>  
        <v-text :config="{text: `${this.$route.params.sandssubstats[3].sandstype} - ${this.$route.params.sandssubstats[3].sandsstat}`, fontSize: 12, x: 530, y:370, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>


      <v-layer>
        <v-text :config="{text: `${this.$route.params.gobletmaintype} - ${this.$route.params.gobletmain} `, fontSize: 16, x: 530, y:395, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.gobletsubstats[0].goblettype} - ${this.$route.params.gobletsubstats[0].gobletstat}`, fontSize: 12, x: 530, y:420, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>  
      <v-layer v-if="this.$route.params.gobletsubstats[1] != undefined" ref = 'layer'>    
        <v-text :config="{text: `${this.$route.params.gobletsubstats[1].goblettype} - ${this.$route.params.gobletsubstats[1].gobletstat}`, fontSize: 12, x: 530, y:435, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.gobletsubstats[2] != undefined" ref = 'layer'> 
        <v-text :config="{text: `${this.$route.params.gobletsubstats[2].goblettype} - ${this.$route.params.gobletsubstats[2].gobletstat}`, fontSize: 12, x: 530, y:450, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.gobletsubstats[3] != undefined" ref = 'layer'> 
        <v-text :config="{text: `${this.$route.params.gobletsubstats[3].goblettype} - ${this.$route.params.gobletsubstats[3].gobletstat}`, fontSize: 12, x: 530, y:465, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>

      <v-layer>
        <v-text :config="{text: `${this.$route.params.circletmaintype} - ${this.$route.params.circletmain} `, fontSize: 16, x: 530, y:495, fill:'#7b7166', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `${this.$route.params.circletsubstats[0].circlettype} - ${this.$route.params.circletsubstats[0].circletstat}`, fontSize: 12, x: 530, y:515, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>  
      <v-layer v-if="this.$route.params.circletsubstats[1] != undefined" ref = 'layer'>    
        <v-text :config="{text: `${this.$route.params.circletsubstats[1].circlettype} - ${this.$route.params.circletsubstats[1].circletstat}`, fontSize: 12, x: 530, y:530, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.circletsubstats[2] != undefined" ref = 'layer'> 
        <v-text :config="{text: `${this.$route.params.circletsubstats[2].circlettype} - ${this.$route.params.circletsubstats[2].circletstat}`, fontSize: 12, x: 530, y:545, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
      <v-layer v-if="this.$route.params.circletsubstats[3] != undefined" ref = 'layer'> 
        <v-text :config="{text: `${this.$route.params.circletsubstats[3].circlettype} - ${this.$route.params.circletsubstats[3].circletstat}`, fontSize: 12, x: 530, y:560, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>


      <v-layer>
        <v-text :config="{text: `genshin-card-generator.com`, fontSize: 16, x: 38, y:655, fill:'black', opacity: 0.7, fontFamily:'SuezOne-Regular'}"></v-text>
        <v-image :config="{image: weapon, x: 100, y:260}"/>
        <v-image :config="{image: flower, x: 445, y:125}"/>
        <v-image :config="{image: feather, x: 445, y:215}"/>
        <v-image :config="{image: sands, x: 445, y:305}"/>
        <v-image :config="{image: goblet, x: 445, y:400}"/>
        <v-image :config="{image: circlet, x: 445, y:495}"/>

        <v-image :config="{image: constellation, x: 290, y:265}"/>
        <v-image :config="{image: normal, x: 95, y:445}"/>
        <v-image :config="{image: skill, x: 210, y:445}"/>
        <v-image :config="{image: burst, x: 325, y:445}"/>

        <v-text :config="{text: `${this.$route.params.constellation} `, fontSize: 16, x: 330, y:380, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `Level ${this.$route.params.normal} `, fontSize: 16, x: 120, y:555, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `Level ${this.$route.params.skill} `, fontSize: 16, x: 235, y:555, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
        <v-text :config="{text: `Level ${this.$route.params.burst} `, fontSize: 16, x: 350, y:555, fill:'#93887B', fontFamily:'SuezOne-Regular'}"></v-text>
      </v-layer>
    </v-stage>
    <br>
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
      image: null,
      flower: null,
      feather: null,
      sands: null,
      goblet: null,
      circlet: null,
      weapon: null,
      constellation: null, 
      normal: null,
      skill: null,
      burst: null
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
        var dataURL = (this.$refs.stage.getStage()).toDataURL({ pixelRatio: 3 });
        this.downloadURI(dataURL, 'genshincard.png');
      },
  },
  created() {
      const image = new window.Image();
      image.src = require('@/assets/chara-build/' + this.$route.params.chara + '.png');
      image.onload = () => {
        this.image = image;
        };
      const flower = new window.Image();
      flower.src = require('@/assets/Artifacts/Flower/' + (this.$route.params.flower).split(" ").join("") + '.png');
      flower.onload = () => {
        this.flower = flower;
      };
      const feather = new window.Image();
      feather.src = require('@/assets/Artifacts/Feather/' + (this.$route.params.feather).split(" ").join("") + '.png');
      feather.onload = () => {
        this.feather = feather;
      };
      const sands = new window.Image();
      sands.src = require('@/assets/Artifacts/Sands/' + (this.$route.params.sands).split(" ").join("") + '.png');
     sands.onload = () => {
        this.sands = sands;
      };
      const goblet = new window.Image();
      goblet.src = require('@/assets/Artifacts/Goblet/' + (this.$route.params.goblet).split(" ").join("") + '.png');
      goblet.onload = () => {
        this.goblet = goblet;
      };
      const circlet = new window.Image();
      circlet.src = require('@/assets/Artifacts/Circlet/' + (this.$route.params.circlet).split(" ").join("") + '.png');
      circlet.onload = () => {
      this.circlet = circlet;
      };
      const weapon = new window.Image();
      weapon.src = require('@/assets/Weapons/' + (this.$route.params.weapon).split(" ").join("") + '.png');
      weapon.onload = () => {
      this.weapon = weapon;
      };
      const constellation = new window.Image();
      constellation.src = require('@/assets/skills/' + this.$route.params.chara + '/'+ this.$route.params.constellation + '.png');
      constellation.onload = () => {
      this.constellation = constellation;
        };
      const normal = new window.Image();
      normal.src = require('@/assets/skills/' + this.$route.params.chara + '/normal.png');
      normal.onload = () => {
      this.normal = normal;
      };
      const skill = new window.Image();
      skill.src = require('@/assets/skills/' + this.$route.params.chara + '/skill.png');
      skill.onload = () => {
      this.skill = skill;
      };
      const burst = new window.Image();
      burst.src = require('@/assets/skills/' + this.$route.params.chara + '/burst.png');
      burst.onload = () => {
      this.burst = burst;
      };
    }
  }
</script>

<style lang="scss" scoped>
.top-gap {
  margin: 200px;
}
</style>