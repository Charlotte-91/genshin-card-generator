<template>
<FormulateForm
    v-model='values'
    :keep-model-data="true"
    @submit="submit">
    <body>

      <div class ="form">
        <div class="row">
        <div class="valid">{{ this.values }}</div>
        
          <div class="col-25">
            <label class="typo__label">Player Name:</label>
          </div>
          <div class="col-75">
            <FormulateInput type="text" name="playerName"  validation="required" validation-name="Player name"/>
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label class="typo__label">AR:</label>
          </div>
            <div class="col-75">
              <FormulateInput
               type='number' name="AR" validation="required|number|between:0,61,value"/> 
            </div>
          </div>

          <div class="row">
          <div class="col-25">
            <label class="typo__label">Spiral Abyss progress:</label>
          </div>
            <div class="col-75">
              <FormulateInput
              type="select" name='SA' :options="['1-1','1-2','1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3','4-1','4-2','4-3','5-1','5-2','5-3','6-1','6-2','6-3','7-1','7-2','7-3','8-1','8-2','8-3','9-1','9-2','9-3','10-1','10-2','10-3','11-1','11-2','11-3','12-1','12-2','12-3']"/> 
            </div>
          </div>
          <vsa-list>
            <vsa-item>
              <vsa-heading>Team member 1</vsa-heading>
              <vsa-content>
                <div class="valid">{{ this.values }}</div>
                <div class="row">
                  <div class="col-25">
                    <label class="typo__label">Character:</label>
                  </div>
                  <div class="col-75">
                    <FormulateInput type="select" name='chara' :options="{ aetherAmeno: 'Aether (Ameno)', aetherGeo: 'Aether (Geo)', albedo: 'Albedo', amber: 'Amber', barbara: 'Barbara', beidou: 'Beidou', bennett: 'Bennett', chongyun: 'Chongyun', diluc: 'Diluc', diona: 'Diona', eula: 'Eula', fishcl: 'Fischl', ganyu: 'Ganyu', hutao: 'Hu tao', jean: 'Jean', kaeya: 'Kaeya',
                    keqing: 'Keqing', klee: 'Klee', lisa: 'Lisa',lumineAmeno: 'Lumine (Ameno)', lumineGeo: 'Lumine (Geo)', mona: 'Mona', ningguang: 'Ningguang', noelle: 'Noelle', qiqi: 'Qiqi', razor: 'Razor', rosaria: 'Rosaria', sucrose: 'Sucrose', tartaglia: 'Tartaglia', venti: 'Venti', xiangling: 'Xiangling', xiao: 'Xiao', xingqiu: 'Xingqiu', xinyan: 'Xinyan', yanfei: 'Yanfei', zhongli: 'Zhongli'}"/>
                  </div>
                </div>

                
                  <div class="row">
                  <div class="col-25">
                    <label class="typo__label">Weapon:</label>
                  </div>
                  <p>`{{ weaponCheck }}`</p>
                  <!-- To be refactored -->
                  <div class="col-75">
                     <FormulateInput key="claymore" name="weapon" type="select" :options="this.weapons"/>
                    <!-- <FormulateInput v-if="values.chara =='beidou'|| values.chara =='chongyun'||values.chara == 'diluc' || values.chara =='eula'|| values.chara =='noelle'|| values.chara =='razor'|| values.chara =='xingyan'" key="claymore" name="weapon" type="select" :options="['Blackcliff Slasher', 'Bloodtainted Greatsword', 'Debate Club','Favonius Greatsword', 'Ferrous Shadow','Lithic Blade','Prototype Archaic', 'Quartz', 'Rainslasher','Royal Greatsword','Sacrificial Greatsword', 'Serpent Spine',
                    'Skyward Pride', 'Snow-Tombed Starsilver', 'Song of Broken Pines', 'The Bell', 'The Unforged', 'White Iron Greatsword', 'Whiteblind', 'Wolfs Gravestone']"/>
                    <FormulateInput v-if="values.chara =='lumineAmeno' || values.chara =='lumineGeo' || values.chara =='aetherAmeno' || values.chara =='aetherGeo' || values.chara =='albedo' || values.chara =='bennett'|| values.chara =='jean'|| values.chara =='kaeya'|| values.chara =='keqing'|| values.chara =='qiqi'|| values.chara =='xingqiu'" key="sword" name="weapon" type="select" :options="['Aquila Favonia', 'Blackcliff Longsword', 'Cool Steel', 'Dark Iron Sword', 'Dull Blade', 'Favonius Sword', 'Festering Desire', 'Fillet Blade', 'Harbinger of Dawn', '	Iron Sting', 'Lions Roar', 'Primordial Jade Cutter', 'Prototype Rancour',
                    'Royal Longsword', 'Sacrificial Sword', 'Silver Sword', 'Skyrider Sword', 'Skyward Blade', 'Summit Shaper', 'Sword of Descension', 'The Alley Flash', 'The Black Sword', 'The Flute', 'Travelers Handy Sword']"/>
                    <FormulateInput v-if="values.chara =='hutao'|| values.chara =='rosaria'|| values.chara =='xiangling'|| values.chara =='xiao'|| values.chara =='zhongli'" key="polearm" name="weapon" type="select" :options="['Black Tassel', 'Blackcliff Pole', 'Crescent Pike', 'Deathmatch', 'Dragons Bane', 'Dragonspine Spear', 'Favonius Lance', '	Halberd', 'Iron Point', 'Lithic Spear', 'Primordial Jade Winged-Spear', 'Prototype Starglitter','Royal Spear','Skyward Spine',
                    'Staff of Homa', 'Vortex Vanquisher','White Tassel']"/>
                    <FormulateInput v-if="values.chara =='barbara'|| values.chara =='klee'|| values.chara =='lisa'|| values.chara =='mona'|| values.chara =='ningguang'|| values.chara =='sucrose'|| values.chara =='yanfei'" key="catalyst" name="weapon" type="select" :options="['Amber Catalyst', 'Apprentices Notes',  'Blackcliff Agate', 'Emerald Orb', 'Favonius Codex', '	Frostbearer', 'Lost Prayer to the Sacred Winds', 'Magic Guide', 'Mappa Mare', 'Memory of Dust', 'Otherworldly Story',
                    'Prototype Amber', '	Royal Grimoire', 'Sacrificial Fragments', 'Skyward Atlas', 'Solar Pearl', 'The Widsith', 'Thrilling Tales of Dragon Slayers', 'Twin Nephrite', 'Wine and Song']"/>
                    <FormulateInput v-if="values.chara =='amber'|| values.chara =='diona'|| values.chara =='fischl'|| values.chara =='ganyu'|| values.chara =='tartaglia'|| values.chara =='venti'" key="bow" name="weapon" type="select" :options="['Alley Hunter', 'Amos Bow', 'Blackcliff Warbow','Compound Bow', 'Ebony Bow', 'Elegy for the End', 'Favonius Warbow','Hunters Bow', 'Messenger', 'Prototype Crescent', 'Raven Bow', 'Recurve Bow', 'Royal Bow','Rust',
                      'Sacrificial Bow', 'Seasoned Hunters Bow', 'Skyward Harp', 'Slingshot', 'The Stringless', 'The Viridescent Hunt', 'Windblume Ode']"/> -->
                  </div>
                </div>
                
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Flower of Life:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='flower1' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                        'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Plume of Death:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='feather1' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                        'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                    </div>
                   </div>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Sands of Eon:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='sands1' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                        'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Goblet of Eonothem:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='goblet1' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                        'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Circlet of Logos:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='circlet1' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                        'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                    </div>
                  </div>
              </vsa-content>
            </vsa-item>
          </vsa-list>
          <FormulateInput
                class="button"
                type="submit"
                label="Submit"
              />
    </div>
  </body>
</FormulateForm>
</template>

<script>
export default {
  data () {
    return {
      values: {
      },
      claymorelist: ['Blackcliff Slasher', 'Bloodtainted Greatsword', 'Debate Club','Favonius Greatsword', 'Ferrous Shadow','Lithic Blade','Prototype Archaic', 'Quartz', 'Rainslasher','Royal Greatsword','Sacrificial Greatsword', 'Serpent Spine',
                    'Skyward Pride', 'Snow-Tombed Starsilver', 'Song of Broken Pines', 'The Bell', 'The Unforged', 'White Iron Greatsword', 'Whiteblind', 'Wolfs Gravestone'],
      weapons: []
    }
  },
  props: {
    validation: String
  },
  computed: { 
    weaponCheck: function () {
      var weapon = ''
      if (this.values.chara =='beidou'|| this.values.chara =='chongyun'||this.values.chara == 'diluc' || this.values.chara =='eula'|| this.values.chara =='noelle'|| this.values.chara =='razor'|| this.values.chara =='xingyan') {
        weapon = 'claymore'
      } else {
        weapon = ''
      }
      this.weaponset(weapon)
    }
  },
  methods: {
      submit() {
        this.$router.push({name: 'TeamCardRender', 
        params: this.values
        })
      },
      weaponset(weapon) {
        if (weapon == 'claymore') {
          this.weapons = this.claymorelist
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
  align-self: center;
}
.button{
  margin: 10px 120px;
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
.col-85 {
  float: right;
  width: 25%;
  margin-bottom: 10px;
}
.col-90 {
  float: right;
  width: 20%;
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
  width: 600px;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
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
.vsa-item__trigger:focus, .vsa-item__trigger:hover{
  color:black
}
.vsa-list{
--vsa-max-width: 720px;
--vsa-min-width: 300px;
--vsa-text-color: #464545;
--vsa-highlight-color: #DBCBBD;
--vsa-bg-color:#F9F6F2;
--vsa-border-color: #F9F6F2;
--vsa-border-width: 1px;
--vsa-border-style: solid;
--vsa-heading-padding: 1rem 1rem;
--vsa-content-padding: 1rem 1rem;
--vsa-default-icon-size: 1;
}
@media (min-width: 650px) {
  .substat {
    display: flex;
    font-family: SuezOne-Regular; 
  }
}

@media (min-width: 720px) {
  .substat {
    display: block;
    font-family: SuezOne-Regular; 

  }
}

@media (min-width: 850px) {
  .substat {
    display: flex;
    font-family: SuezOne-Regular; 
  }
  .substat .formulate-input {
    margin-right: 1.5em;
  }
}
.substat .formulate-input {
  margin-right: 2em;
  margin-bottom: 0;
}
</style>