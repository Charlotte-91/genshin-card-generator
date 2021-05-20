<template>
   <FormulateForm
    v-model='values'
    :keep-model-data="true">
    <body>

      <div class ="form">
        <div class="row">
          <div class="col-25">
            <label class="typo__label">Player Name:</label>
          </div>
          <div class="col-75">
            <FormulateInput type="text" name="playerName"/>
          </div>
        </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Character:</label>
        </div>
        <div class="col-75">
          <FormulateInput type="select" name='chara' :options="{ aether: 'Aether', albedo: 'Albedo', amber: 'Amber', barbara: 'Barbara', beidou: 'Beidou', bennett: 'Bennett', chongyun: 'Chongyun', diluc: 'Diluc', diona: 'Diona', eula: 'Eula', fishcl: 'Fischl', ganyu: 'Ganyu', hutao: 'Hu tao', jean: 'Jean', kaeya: 'Kaeya',
          keqing: 'Keqing', klee: 'Klee', lisa: 'Lisa', lumine: 'Lumine', mona: 'Mona', ningguang: 'Ningguang', noelle: 'Noelle', qiqi: 'Qiqi', razor: 'Razor', rosaria: 'Rosaria', sucrose: 'Sucrose', tartaglia: 'Tartaglia', venti: 'Venti', xiangling: 'Xiangling', xiao: 'Xiao', xingqiu: 'Xingqiu', xinyan: 'Xinyan', yanfei: 'Yanfei', zhongli: 'Zhongli'}"/>
        </div>
      </div>

        

        <div class="row">
        <div class="col-25">
          <label class="typo__label">Weapon:</label>
        </div>
        <div class="col-75">
          <FormulateInput v-if="values.chara =='beidou'|| values.chara =='chongyun'||values.chara == 'diluc' || values.chara =='eula'|| values.chara =='noelle'|| values.chara =='razor'|| values.chara =='xingyan'" key="claymore" name="claymore" type="select" :options="['Blackcliff Slasher', 'Bloodtainted Greatsword', 'Debate Club','Favonius Greatsword', 'Ferrous Shadow','Lithic Blade','Prototype Archaic', 'Quartz', 'Rainslasher','Royal Greatsword','Sacrificial Greatsword', 'Serpent Spine',
           'Skyward Pride', 'Snow-Tombed Starsilver', 'Song of Broken Pines', 'The Bell', 'The Unforged', 'White Iron Greatsword', 'Whiteblind', 'Wolfs Gravestone']"/>
          <FormulateInput v-if="values.chara =='aether' || values.chara =='albedo' || values.chara =='bennett'|| values.chara =='jean'|| values.chara =='kaeya'|| values.chara =='keqing'|| values.chara =='qiqi'|| values.chara =='xingqiu'" key="sword" name="sword" type="select" :options="['Aquila Favonia', 'Blackcliff Longsword', 'Cool Steel', 'Dark Iron Sword', 'Dull Blade', 'Favonius Sword', 'Festering Desire', 'Fillet Blade', 'Harbinger of Dawn', '	Iron Sting', 'Lions Roar', 'Primordial Jade Cutter', 'Prototype Rancour',
           'Royal Longsword', 'Sacrificial Sword', 'Silver Sword', 'Skyrider Sword', 'Skyward Blade', 'Summit Shaper', 'Sword of Descension', 'The Alley Flash', 'The Black Sword', 'The Flute', 'Travelers Handy Sword']"/>
          <FormulateInput v-if="values.chara =='hutao'|| values.chara =='rosaria'|| values.chara =='xiangling'|| values.chara =='xiao'|| values.chara =='zhongli'" key="polearm" name="polearm" type="select" :options="['Black Tassel', 'Blackcliff Pole', 'Crescent Pike', 'Deathmatch', 'Dragons Bane', 'Dragonspine Spear', 'Favonius Lance', '	Halberd', 'Iron Point', 'Lithic Spear', 'Primordial Jade Winged-Spear', 'Prototype Starglitter','Royal Spear','Skyward Spine',
           'Staff of Homa', 'Vortex Vanquisher','White Tassel']"/>
          <FormulateInput v-if="values.chara =='barbara'|| values.chara =='klee'|| values.chara =='lisa'|| values.chara =='mona'|| values.chara =='ningguang'|| values.chara =='sucrose'|| values.chara =='yanfei'" key="catalyst" name="catalyst" type="select" :options="['Amber Catalyst', 'Apprentices Notes',  'Blackcliff Agate', 'Emerald Orb', 'Favonius Codex', '	Frostbearer', 'Lost Prayer to the Sacred Winds', 'Magic Guide', 'Mappa Mare', 'Memory of Dust', 'Otherworldly Story',
          'Prototype Amber', '	Royal Grimoire', 'Sacrificial Fragments', 'Skyward Atlas', 'Solar Pearl', 'The Widsith', 'Thrilling Tales of Dragon Slayers', 'Twin Nephrite', 'Wine and Song']"/>
          <FormulateInput v-if="values.chara =='amber'|| values.chara =='diona'|| values.chara =='fischl'|| values.chara =='ganyu'|| values.chara =='tartaglia'|| values.chara =='venti'" key="bow" name="bow" type="select" :options="['Alley Hunter', 'Amos Bow', 'Blackcliff Warbow','Compound Bow', 'Ebony Bow', 'Elegy for the End', 'Favonius Warbow','Hunters Bow', 'Messenger', 'Prototype Crescent', 'Raven Bow', 'Recurve Bow', 'Royal Bow','Rust',
            'Sacrificial Bow', 'Seasoned Hunters Bow', 'Skyward Harp', 'Slingshot', 'The Stringless', 'The Viridescent Hunt', 'Windblume Ode']"/>
        </div>
      </div>

      <div class="row">
          <div class="col-25">
            <label class="typo__label">Character level:</label>
          </div>
            <div class="col-75">
              <FormulateInput
               type='number' name="charaLvl" validation="required|number|between:0,60" /> 
            </div>
          </div>


      <button class='mobile-button' v-on:click=validate()>Submit</button>
    </div>
    
  </body>
   </FormulateForm> 

</template>



<script>

export default {

  data () {
    return {
      values: {

      }

    }
  },
  // props: {
  //   playerName: String,
  //   chara: String,
  //   charaLvl: Number,
  //   weapon: String
  // },
  methods: {
      weaponChoose(){
        console.log(this.value[0].name)
          if (this.value[0].name == 'Diluc') {
            this.weaponChoice == 'claymore'
          }else if (this.value[0].name == 'Zhongli') {
            this.weaponChoice == 'polearm'
          }
      },
      submit() {
        this.character = this.value[0].id
        this.cardDesign = this.cardValue[0].id
        this.pet = this.PetValue
        // console.log(this.SA)
        // console.log(this.team1)
        // console.log(this.team2)
        // console.log(this.team3)
        // console.log(this.team4)
        // this.$v.form.$touch();
        // if(this.$v.form.$error) return
        this.$router.push({name: 'Basic Card Render', 
        params: {
          cardChara : this.cardDesign, 
          playerName: this.playerName,
          AR: this.AR,
          pet: this.pet,
          team1: this.team1,
          team2: this.team2,
          team3: this.team3,
          team4: this.team4,
        }
      })
    },
    validate() {
        var errors = []
        if (this.playerName == undefined || this.playerName == '' || this.AR == undefined || this.AR == '' || this.value.length == 0 || this.cardValue.length == 0 ) {
            if (this.playerName == undefined || this.playerName == '') {errors.push(' Player name ')}
            if (this.AR == undefined || this.AR == '') {errors.push(' AR ')}
            if (this.value.length == 0) {errors.push(' Team ')}
            if (this.cardValue.length == 0) {errors.push(' Card design ')}
            console.log(this.playerName)
          this.validation = `Please fill out; ${errors} field(s)`
        } else {
          this.submit()
        }
    }
  }
}

</script> 





<style scoped>
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
}
.col-25 {
  float: left;
  width: 45%;
  text-align: right;
  font-family: SuezOne-Regular; 
  margin-bottom: 15px;
}
.col-75 {
  float: right;
  width: 45%;
  margin-bottom: 10px;
}
.row{
  align-items: center;
  width: 80%
}
.row:after {
  content: "";
  display: table;
  clear: both;
  padding: 2px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 600px;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
  margin: 30px;
  padding: 10px;
  
  border-image:
      url("../assets/Form-bg.png")
      70 / 50px    
      round;   
                
}

@media screen and (max-width: 800px) {
  .form {
    width: 80%
  }
}
.valid {
  font-size: 16px;
  color: red;
  margin-bottom: 15px;
}
</style>