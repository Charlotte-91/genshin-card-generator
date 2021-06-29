<template>

   <FormulateForm
    v-model='values'
    :keep-model-data="true"
    @submit="submit">
    <body>

      <div class ="form">
        <div class="row">
        <div class="valid">{{ this.validation }}</div>
        
          <div class="col-25">
            <label class="typo__label">Player Name:</label>
          </div>
          <div class="col-75">
            <FormulateInput type="text" name="playerName"  validation="required" validation-name="Player name"/>
          </div>
        </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Character:</label>
        </div>
        <div class="col-75">
          <FormulateInput type="select" name='chara' :options="{ aetherAmeno: 'Aether (Ameno)', aetherGeo: 'Aether (Geo)', albedo: 'Albedo', amber: 'Amber', barbara: 'Barbara', beidou: 'Beidou', bennett: 'Bennett', chongyun: 'Chongyun', diluc: 'Diluc', diona: 'Diona', eula: 'Eula', fishcl: 'Fischl', ganyu: 'Ganyu', hutao: 'Hu tao', jean: 'Jean', kaeya: 'Kaeya', kazuha:'Kazuha',
          keqing: 'Keqing', klee: 'Klee', lisa: 'Lisa',lumineAmeno: 'Lumine (Ameno)', lumineGeo: 'Lumine (Geo)', mona: 'Mona', ningguang: 'Ningguang', noelle: 'Noelle', qiqi: 'Qiqi', razor: 'Razor', rosaria: 'Rosaria', sucrose: 'Sucrose', tartaglia: 'Tartaglia', venti: 'Venti', xiangling: 'Xiangling', xiao: 'Xiao', xingqiu: 'Xingqiu', xinyan: 'Xinyan', yanfei: 'Yanfei', zhongli: 'Zhongli'}"/>
        </div>
      </div>

        <div class="row">
          <div class="col-25">
            <label class="typo__label">Character level:</label>
          </div>
            <div class="col-75">
              <FormulateInput
               type='number' name="level" validation="required|number|between:0,91,value"/> 
            </div>
          </div>

         

        <div class="row">
        <div class="col-25">
          <label class="typo__label">Weapon:</label>
        </div>
        <!-- To be refactored -->
        <div class="col-75">
          <FormulateInput v-if="values.chara =='beidou'|| values.chara =='chongyun'||values.chara == 'diluc' || values.chara =='eula'|| values.chara =='noelle'|| values.chara =='razor'|| values.chara =='xingyan'" key="claymore" name="weapon" type="select" :options="['Blackcliff Slasher', 'Bloodtainted Greatsword', 'Debate Club','Favonius Greatsword', 'Ferrous Shadow','Lithic Blade','Prototype Archaic', 'Quartz', 'Rainslasher','Royal Greatsword','Sacrificial Greatsword', 'Serpent Spine',
           'Skyward Pride', 'Snow-Tombed Starsilver', 'Song of Broken Pines', 'The Bell', 'The Unforged', 'White Iron Greatsword', 'Whiteblind', 'Wolfs Gravestone']"/>
          <FormulateInput v-if="values.chara =='lumineAmeno' || values.chara =='lumineGeo' || values.chara =='aetherAmeno' || values.chara =='aetherGeo' || values.chara =='albedo' || values.chara =='bennett'|| values.chara =='jean'|| values.chara =='kaeya'|| values.chara =='keqing'|| values.chara =='qiqi'|| values.chara =='xingqiu' || values.chara =='kazuha'" key="sword" name="weapon" type="select" :options="['Aquila Favonia', 'Blackcliff Longsword', 'Cool Steel', 'Dark Iron Sword', 'Dull Blade', 'Favonius Sword', 'Festering Desire', 'Fillet Blade', 'Harbinger of Dawn', '	Iron Sting', 'Lions Roar', 'Primordial Jade Cutter', 'Prototype Rancour',
           'Royal Longsword', 'Sacrificial Sword', 'Silver Sword', 'Skyrider Sword', 'Skyward Blade', 'Summit Shaper', 'Sword of Descension', 'The Alley Flash', 'The Black Sword', 'The Flute', 'Travelers Handy Sword']"/>
          <FormulateInput v-if="values.chara =='hutao'|| values.chara =='rosaria'|| values.chara =='xiangling'|| values.chara =='xiao'|| values.chara =='zhongli'" key="polearm" name="weapon" type="select" :options="['Black Tassel', 'Blackcliff Pole', 'Crescent Pike', 'Deathmatch', 'Dragons Bane', 'Dragonspine Spear', 'Favonius Lance', '	Halberd', 'Iron Point', 'Lithic Spear', 'Primordial Jade Winged-Spear', 'Prototype Starglitter','Royal Spear','Skyward Spine',
           'Staff of Homa', 'Vortex Vanquisher','White Tassel']"/>
          <FormulateInput v-if="values.chara =='barbara'|| values.chara =='klee'|| values.chara =='lisa'|| values.chara =='mona'|| values.chara =='ningguang'|| values.chara =='sucrose'|| values.chara =='yanfei'" key="catalyst" name="weapon" type="select" :options="['Amber Catalyst', 'Apprentices Notes',  'Blackcliff Agate', 'Emerald Orb', 'Favonius Codex', '	Frostbearer', 'Lost Prayer to the Sacred Winds', 'Magic Guide', 'Mappa Mare', 'Memory of Dust', 'Otherworldly Story',
          'Prototype Amber', '	Royal Grimoire', 'Sacrificial Fragments', 'Skyward Atlas', 'Solar Pearl', 'The Widsith', 'Thrilling Tales of Dragon Slayers', 'Twin Nephrite', 'Wine and Song']"/>
          <FormulateInput v-if="values.chara =='amber'|| values.chara =='diona'|| values.chara =='fischl'|| values.chara =='ganyu'|| values.chara =='tartaglia'|| values.chara =='venti'" key="bow" name="weapon" type="select" :options="['Alley Hunter', 'Amos Bow', 'Blackcliff Warbow','Compound Bow', 'Ebony Bow', 'Elegy for the End', 'Favonius Warbow','Hunters Bow', 'Messenger', 'Prototype Crescent', 'Raven Bow', 'Recurve Bow', 'Royal Bow','Rust',
            'Sacrificial Bow', 'Seasoned Hunters Bow', 'Skyward Harp', 'Slingshot', 'The Stringless', 'The Viridescent Hunt', 'Windblume Ode']"/>
        </div>
      </div>
      <vsa-list>
          <vsa-item>
            <vsa-heading>Constellation & Talents </vsa-heading>
              <vsa-content>
              <div class="row">
                <div class="col-25">
                  <label class="typo__label">Constellation:</label>
                </div>
                <div class="col-75">
                  <FormulateInput type="select" name='constellation' :options="['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6']"/>
                </div>
              </div>
              <h4>Talents</h4>
              <div class="row">
                <div class="col-25">
                  <label class="typo__label">Normal Attack:</label>
                </div>
                <div class="col-75">
                  <FormulateInput type='number' name="normal" validation="required|number|between:0,16,value" />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label class="typo__label">Elemental Skill :</label>
                </div>
                <div class="col-75">
                  <FormulateInput type='number' name="skill" validation="required|number|between:0,16,value" />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label class="typo__label">Elemental Burst:</label>
                </div>
                <div class="col-75">
                  <FormulateInput type='number' name="burst" validation="required|number|between:0,16,value" />
                </div>
              </div>
            </vsa-content>
          </vsa-item>
          
      </vsa-list>
      <h3> Artifacts</h3>
            <vsa-list>
              <!-- Flower Artifacts -->
              <vsa-item>
                <vsa-heading>Flower of Life</vsa-heading>
                  <vsa-content>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Set:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='flower' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                            'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Main stat:</label>
                      </div>
                      <div class="col-90">
                        <FormulateInput
                          type='number' name="flowermain" validation="number" /> 
                      </div>
                      <div class="col-85">
                        HP
                      </div>
                    </div>

                    <FormulateInput
                      type="group"
                      name="flowersubstats"
                      :repeatable="true"
                      label="Sub Stats"
                      add-label="+ Add Sub Stat"
                      validation="min:2, max:4, required"
                      validation-name="sub stats"
                    >
                      <div class="substat">
                        <FormulateInput
                          type="select"
                          name="flowertype"
                          validation="required"
                          validation-name="Sub stat type required"
                          :options="['', 'HP', 'ATK', 'DEF','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %','CRIT Rate %', 'CRIT DMG %']"
                        />
                        <FormulateInput
                          type="number"
                          name="flowerstat"
                          validation="required|number"
                          validation-name="Sub stat value required"
                        />
                      </div>
                    </FormulateInput>
                  </vsa-content>
              </vsa-item>
              <!-- Feather Artifact -->
              <vsa-item>
                <vsa-heading>Plume of Death</vsa-heading>
                  <vsa-content>
                    <div class="row">
                        <div class="col-25">
                          <label class="typo__label">Set:</label>
                        </div>
                          <div class="col-75">
                           <FormulateInput type="select" name='flower' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                            'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='number' name="feathermain" validation="number" /> 
                                </div>
                                <div class="col-85">
                                  ATK
                                </div>
                              </div>
                        
                        <FormulateInput
                      type="group"
                      name="feathersubstats"
                      :repeatable="true"
                      label="Sub Stats"
                      add-label="+ Add Sub Stat"
                      validation="min:2, max:4, required"
                      validation-name="sub stats"
                    >
                      <div class="substat">
                        <FormulateInput
                          type="select"
                          name="feathertype"
                          validation="required"
                          validation-name="Sub stat type required"
                          :options="['', 'HP', 'ATK', 'DEF','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %','CRIT Rate %', 'CRIT DMG %']"
                        />
                        <FormulateInput
                          type="number"
                          name="featherstat"
                          validation="required|number"
                          validation-name="Sub stat value required"
                        />
                      </div>
                    </FormulateInput>
                  </vsa-content>
              </vsa-item>
              <!-- Sands Artifact -->
              <vsa-item>
                <vsa-heading>Sands of Eon</vsa-heading>
                  <vsa-content>
                    <div class="row">
                        <div class="col-25">
                          <label class="typo__label">Set:</label>
                        </div>
                          <div class="col-75">
                            <FormulateInput type="select" name='flower' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                            'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='number' name="sandsmain" validation="number" /> 
                                </div>
                                <div class="col-85">
                                  <FormulateInput
                                    type='select' name="sandsmaintype" :options="['', 'HP', 'ATK', 'DEF','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %']" /> 
                                </div>
                              </div>

                              <FormulateInput
                                type="group"
                                name="sandssubstats"
                                :repeatable="true"
                                label="Sub Stats"
                                add-label="+ Add Sub Stat"
                                validation="min:2, max:4, required"
                                validation-name="sub stats"
                              >
                                <div class="substat">
                                  <FormulateInput
                                    type="select"
                                    name="sandstype"
                                    validation="required"
                                    validation-name="Sub stat type required"
                                    :options="['', 'HP', 'ATK', 'DEF','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %','CRIT Rate %', 'CRIT DMG %']"
                                  />
                                  <FormulateInput
                                    type="number"
                                    name="sandsstat"
                                    validation="required|number"
                                    validation-name="Sub stat value required"
                                  />
                                </div>
                              </FormulateInput>
                  </vsa-content>
              </vsa-item>
              <!-- Goblet Artifact -->
              <vsa-item>
                <vsa-heading>Goblet of Eonothem</vsa-heading>
                  <vsa-content>
                    <div class="row">
                        <div class="col-25">
                          <label class="typo__label">Set:</label>
                        </div>
                          <div class="col-75">
                            <FormulateInput type="select" name='flower' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                            'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='number' name="gobletmain" validation="number" /> 
                                </div>
                                <div class="col-85">
                                  <FormulateInput
                                    type='select' name="gobletmaintype" :options="['', 'HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %', 'Pyro DMG%','Hydro DMG%', 'Cryo DMG%', 'Electro DMG%', 'Geo DMG%','Anemo DMG%','Physical DMG %']" /> 
                                </div>
                              </div>

                            <FormulateInput
                                type="group"
                                name="gobletsubstats"
                                :repeatable="true"
                                label="Sub Stats"
                                add-label="+ Add Sub Stat"
                                validation="min:2, max:4, required"
                                validation-name="sub stats"
                              >
                                <div class="substat">
                                  <FormulateInput
                                    type="select"
                                    name="goblettype"
                                    validation="required"
                                    validation-name="Sub stat type required"
                                    :options="['', 'HP', 'ATK', 'DEF','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %','CRIT Rate %', 'CRIT DMG %']"
                                  />
                                  <FormulateInput
                                    type="number"
                                    name="gobletstat"
                                    validation="required|number"
                                    validation-name="Sub stat value required"
                                  />
                                </div>
                              </FormulateInput>
                  </vsa-content>
              </vsa-item>
              <!-- Circlet Artifact -->
              <vsa-item>
                <vsa-heading>Circlet of Logos</vsa-heading>
                  <vsa-content>
                    <div class="row">
                        <div class="col-25">
                          <label class="typo__label">Set:</label>
                        </div>
                          <div class="col-75">
                            <FormulateInput type="select" name='flower' :options="['','Adventurer','Archaic Petra', 'Berserker', 'Blizzard Strayer','Bloodstained Chivalry','Brave Heart','Crimson Witch of Flames', 'Defenders Will', 'Gambler','Gladiators Finale', 'Heart of Depth', 'Instructor', 'Lavawalker', 'Lucky Dog',
                            'Maiden Beloved', 'Martial Artist', 'Noblesse Oblige', 'Pale Flame', 'Resolution of Sojourner', 'Retracing Bolide', 'Scholar', 'Tenacity of the Millelith', 'The Exile', 'Thundering Fury', 'Thundersoother', 'Tiny Miracle', 'Traveling Doctor', 'Viridescent Venerer', 'Wanderers Troupe']"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='number' name="circletmain" validation="number" /> 
                                </div>
                                <div class="col-85">
                                  <FormulateInput
                                    type='select' name="circletmaintype" :options="['','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %', 'CRIT Rate %', 'CRIT DMG %', 'Healing%']" /> 
                                </div>
                              </div>

                                  <FormulateInput
                                      type="group"
                                      name="circletsubstats"
                                      :repeatable="true"
                                      label="Sub Stats"
                                      add-label="+ Add Sub Stat"
                                      validation-name="sub stats"
                                      validation="min:2, max:4, required">
                                      <div class="substat">
                                        <FormulateInput
                                          type="select"
                                          name="circlettype"
                                          validation="required"
                                          validation-name="Sub stat type required"
                                          :options="['', 'HP', 'ATK', 'DEF','HP %', 'ATK %', 'DEF %', 'Elemental Mastery', 'Energy Recharge %','CRIT Rate %', 'CRIT DMG %']"
                                        />
                                        <FormulateInput
                                          type="number"
                                          name="circletstat"
                                          validation="required|number"
                                          validation-name="Sub stat value required"
                                        />
                                      </div>
                                    </FormulateInput>
                  </vsa-content>
              </vsa-item>
            </vsa-list>
  <FormulateInput
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
      }
    }
  },
  props: {
    validation: String
  },
  methods: {
      submit() {
        console.log(this.values)
        this.$router.push({name: 'CharaBuildRender', 
        params: this.values
      })
    },
  }
}
</script> 





<style scoped>
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.button{
  margin: 10px 120px;
  }
.col-25 {
  float: left;
  width: 35%;
  text-align: right;
  font-family: SuezOne-Regular; 
  margin-bottom: 15px;
}
.col-75 {
  float: right;
  width: 55%;
  margin-bottom: 10px;
}
.col-75 {
  float: right;
  width: 45%;
  margin-bottom: 10px;
}
.col-85 {
  float: right;
  width: 30%;
  margin-bottom: 10px;
}
.col-90 {
  float: right;
  width: 20%;
  margin-bottom: 10px;
}
.row{
  align-items: center;
  width: 100%
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
  width: 75%;
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
</style>