<template>
<FormulateForm
    v-model='values'
    :keep-model-data="true"
    @submit="submit">
    <body>

      <div class ="form">
        <div class="row">
          <div class="col-25">
            <label class="typo__label">Player Name:</label>
          </div>
          <div class="col-75">
            <FormulateInput type="text" name="playerName"  validation="required" validation-name="Player name"/>
          </div>
        </div>

      <div class="row">
          <div class="col-25">
            <label class="typo__label">Card Background:</label>
          </div>
            <div class="col-75">
              <FormulateInput
              type="select" name='cardBg' :options="CardBackground"/> 
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
              type="select" name='SA' :options="SALevels"/> 
            </div>
          </div>


      <div class="x-badger-accordion js-badger-accordion">
      <div>
        <div class="badger-accordion__header js-badger-accordion-header">Character 1</div>
        </div>
          <div class="badger-accordion__panel js-badger-accordion-panel">
              <div class="badger-accordion__panel--inner js-badger-accordion-panel-inner">
          <ul>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Character:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='chara' :options="Characters"/>
                    </div>
                  </div>
            
                    <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Weapon:</label>
                    </div>
                    <!-- To be refactored -->
                    <div class="col-75">
                      <FormulateInput v-if="(weaponList.Claymore.Characters).includes(values.chara)" key="Claymore" name="weapon" type="select" :options="weaponList.Claymore.Weapons"/>
                      <FormulateInput v-if="(weaponList.Swords.Characters).includes(values.chara)" key="Swords" name="weapon" type="select" :options="weaponList.Swords.Weapons"/>
                      <FormulateInput v-if="(weaponList.Polearms.Characters).includes(values.chara)" key="Polearms" name="weapon" type="select" :options="weaponList.Polearms.Weapons"/>
                      <FormulateInput v-if="(weaponList.Catalysts.Characters).includes(values.chara)" key="Catalysts" name="weapon" type="select" :options="weaponList.Catalysts.Weapons"/>
                      <FormulateInput v-if="(weaponList.Bows.Characters).includes(values.chara)" key="Bows" name="weapon" type="select" :options="weaponList.Bows.Weapons"/>
                    </div>
                  </div>
                  
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Flower of Life:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='flower1' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Plume of Death:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='feather1' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Sands of Eon:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='sands1' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Goblet of Eonothem:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='goblet1' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Circlet of Logos:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='circlet1' :options="Artifacts"/>
                      </div>
                    </div>
          </ul>
        </div>
      </div>
      <!-- 2 -->
      <div>
        <div class="badger-accordion__header js-badger-accordion-header">Character 2</div>
      </div>
      <div class="badger-accordion__panel js-badger-accordion-panel">
        <div class="badger-accordion__panel--inner js-badger-accordion-panel-inner">
          <ul>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Character:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='chara2' :options="Characters"/>
                    </div>
                  </div>
            
                    <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Weapon:</label>
                    </div>
                    <!-- To be refactored -->
                    <div class="col-75">
                      <FormulateInput v-if="(weaponList.Claymore.Characters).includes(values.chara2)" key="Claymore" name="weapon2" type="select" :options="weaponList.Claymore.Weapons"/>
                      <FormulateInput v-if="(weaponList.Swords.Characters).includes(values.chara2)" key="Swords" name="weapon2" type="select" :options="weaponList.Swords.Weapons"/>
                      <FormulateInput v-if="(weaponList.Polearms.Characters).includes(values.chara2)" key="Polearms" name="weapon2" type="select" :options="weaponList.Polearms.Weapons"/>
                      <FormulateInput v-if="(weaponList.Catalysts.Characters).includes(values.chara2)" key="Catalysts" name="weapon2" type="select" :options="weaponList.Catalysts.Weapons"/>
                      <FormulateInput v-if="(weaponList.Bows.Characters).includes(values.chara2)" key="Bows" name="weapon2" type="select" :options="weaponList.Bows.Weapons"/>
                    </div>
                  </div>
                  
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Flower of Life:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='flower2' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Plume of Death:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='feather2' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Sands of Eon:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='sands2' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Goblet of Eonothem:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='goblet2' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Circlet of Logos:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='circlet2' :options="Artifacts"/>
                      </div>
                    </div>
          </ul>
        </div>
      </div>
      <!-- 3 -->
      <div>
        <div class="badger-accordion__header js-badger-accordion-header">Character 3</div>
      </div>
      <div class="badger-accordion__panel js-badger-accordion-panel">
        <div class="badger-accordion__panel--inner js-badger-accordion-panel-inner">
          <ul>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Character:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='chara3' :options="Characters"/>
                    </div>
                  </div>
            
                    <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Weapon:</label>
                    </div>
                    <!-- To be refactored -->
                    <div class="col-75">
                      <FormulateInput v-if="(weaponList.Claymore.Characters).includes(values.chara3)" key="Claymore" name="weapon3" type="select" :options="weaponList.Claymore.Weapons"/>
                      <FormulateInput v-if="(weaponList.Swords.Characters).includes(values.chara3)" key="Swords" name="weapon3" type="select" :options="weaponList.Swords.Weapons"/>
                      <FormulateInput v-if="(weaponList.Polearms.Characters).includes(values.chara3)" key="Polearms" name="weapon3" type="select" :options="weaponList.Polearms.Weapons"/>
                      <FormulateInput v-if="(weaponList.Catalysts.Characters).includes(values.chara3)" key="Catalysts" name="weapon3" type="select" :options="weaponList.Catalysts.Weapons"/>
                      <FormulateInput v-if="(weaponList.Bows.Characters).includes(values.chara3)" key="Bows" name="weapon3" type="select" :options="weaponList.Bows.Weapons"/>
                    </div>
                  </div>
                  
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Flower of Life:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='flower3' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Plume of Death:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='feather3' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Sands of Eon:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='sands3' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Goblet of Eonothem:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='goblet3' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Circlet of Logos:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='circlet3' :options="Artifacts"/>
                      </div>
                    </div>
          </ul>
        </div>
      </div>
      <div>
        <div class="badger-accordion__header js-badger-accordion-header">Character 4</div>
      </div>
      <div class="badger-accordion__panel js-badger-accordion-panel">
        <div class="badger-accordion__panel--inner js-badger-accordion-panel-inner">
          <ul>
                  <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Character:</label>
                    </div>
                    <div class="col-75">
                      <FormulateInput type="select" name='chara4' :options="Characters"/>
                    </div>
                  </div>
            
                    <div class="row">
                    <div class="col-25">
                      <label class="typo__label">Weapon:</label>
                    </div>
                    <!-- To be refactored -->
                    <div class="col-75">
                      <FormulateInput v-if="(weaponList.Claymore.Characters).includes(values.chara4)" key="Claymore" name="weapon4" type="select" :options="weaponList.Claymore.Weapons"/>
                      <FormulateInput v-if="(weaponList.Swords.Characters).includes(values.chara4)" key="Swords" name="weapon4" type="select" :options="weaponList.Swords.Weapons"/>
                      <FormulateInput v-if="(weaponList.Polearms.Characters).includes(values.chara4)" key="Polearms" name="weapon4" type="select" :options="weaponList.Polearms.Weapons"/>
                      <FormulateInput v-if="(weaponList.Catalysts.Characters).includes(values.chara4)" key="Catalysts" name="weapon4" type="select" :options="weaponList.Catalysts.Weapons"/>
                      <FormulateInput v-if="(weaponList.Bows.Characters).includes(values.chara4)" key="Bows" name="weapon4" type="select" :options="weaponList.Bows.Weapons"/>
                    </div>
                  </div>
                  
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Flower of Life:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='flower4' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Plume of Death:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='feather4' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Sands of Eon:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='sands4' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Goblet of Eonothem:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='goblet4' :options="Artifacts"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Circlet of Logos:</label>
                      </div>
                      <div class="col-75">
                        <FormulateInput type="select" name='circlet4' :options="Artifacts"/>
                      </div>
                    </div>
          </ul>
        </div>
      </div>
    </div>
    
          <FormulateInput
                id="submitB"
                class="button"
                type="submit"
                label="Submit"
              />
    </div>
  </body>
</FormulateForm>
</template>

<script>
import BadgerAccordion from "badger-accordion";
import Characters from '../JSON/characters.JSON'
import Bg from '../JSON/backgrounds.JSON'
import Artifacts from '../JSON/artifacts.JSON'
import Weapons from '../JSON/weapons.JSON'
import SA from '../JSON/spiralAbyss.JSON'

export default {
  data () {
    
    return {

      weaponList: Weapons,
      Characters: Characters.Characters,
      CardBackground: Bg.Backgrounds,
      Artifacts : Artifacts.set,
      SALevels : SA.Levels,
      values: {
      },
      weapons: []
    }
    
  },
  props: {
    validation: String
  },
  methods: {
      submit() {
        this.$router.push({name: 'Team Card Render', 
        params: this.values
        })
      },
      onOpenItem() {
        // Item opened
      },
      onCloseItem() {
        // Item closed
    }
  },
  components: {
  
  },
  mounted() {
    new BadgerAccordion(".js-badger-accordion", {
      openMultiplePanels: true
    });
  }
}
</script> 


<style scoped>


body{
  font-family: Montserrat, sans-serif;
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.col-25 {
  float: left;
  width: 45%;
  text-align: right;
  font-family: Montserrat, sans-serif;
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
      url("../../assets/Form-bg.png")
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
    font-family: Montserrat, sans-serif;
  }
}
@media (min-width: 720px) {
  .substat {
    display: block;
    font-family: Montserrat, sans-serif;
  }
}
@media (min-width: 850px) {
  .substat {
    display: flex;
    font-family: Montserrat, sans-serif;
  }
  .substat .formulate-input {
    margin-right: 1.5em;
  }
}
.substat .formulate-input {
  margin-right: 2em;
  margin-bottom: 0;
}
.badger-accordion__header {
  cursor: pointer;
  font-weight: 700;
  padding: 0.5em;
  transition: all ease-in-out 0.3s;
}
.badger-accordion__header:hover {
  background-color: #444;
  color: #eee;
}
.badger-accordion__panel {
  max-height: 75vh;
  overflow: hidden;
}
.badger-accordion__panel.-ba-is-hidden {
  max-height: 0 !important;
  visibility: hidden;
}
.badger-accordion__panel--inner {
  padding: 0.5em 2em;
}
.badger-accordion--initialized .badger-accordion__panel {
  transition: all ease-in-out 0.3s;
}
li {
  margin-bottom: 1em;
}
</style>