<template>
  <body>
   <FormulateForm
    v-model='values'
    :keep-model-data="true"
    @submit="submit">
      
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
              <FormulateInput type="select" name='chara' validation="required" :options="characters.Characters"/>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Background Design:</label>
        </div>
        <div class="col-75">
          <FormulateInput type="select" name='cardBg' validation="required" :options="Bg.Backgrounds"/>
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
          <FormulateInput v-if="(weapons.Claymore.Characters).includes(values.chara)" key="Claymore" name="weapon" type="select" :options="weapons.Claymore.Weapons"/>
          <FormulateInput v-if="(weapons.Swords.Characters).includes(values.chara)" key="Swords" name="weapon" type="select" :options="weapons.Swords.Weapons"/>
          <FormulateInput v-if="(weapons.Polearms.Characters).includes(values.chara)" key="Polearms" name="weapon" type="select" :options="weapons.Polearms.Weapons"/>
          <FormulateInput v-if="(weapons.Catalysts.Characters).includes(values.chara)" key="Catalysts" name="weapon" type="select" :options="weapons.Catalysts.Weapons"/>
          <FormulateInput v-if="(weapons.Bows.Characters).includes(values.chara)" key="Bows" name="weapon" type="select" :options="weapons.Bows.Weapons"/>

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
                       <FormulateInput type="select" name='flower' validation="required" validation-name="set" :options="artifacts.set"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-25">
                        <label class="typo__label">Main stat:</label>
                      </div>
                      <div class="col-90">
                        <FormulateInput
                          type='text' name="flowermain" validation="required|number" /> 
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
                          :options="artifacts.subStat"
                        />
                        <FormulateInput
                          type="text"
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
                            <FormulateInput type="select" name='feather' validation="required" validation-name="set" :options="artifacts.set"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='text' name="feathermain" validation="required|number" /> 
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
                          :options="artifacts.subStat"
                        />
                        <FormulateInput
                          type="text"
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
                            <FormulateInput type="select" name='sands' validation="required" validation-name="set" :options="artifacts.set"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='text' name="sandsmain" validation="required|number" /> 
                                </div>
                                <div class="col-85">
                                  <FormulateInput
                                    type='select' name="sandsmaintype" :options="artifacts.sands" /> 
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
                                    :options="artifacts.subStat"
                                  />
                                  <FormulateInput
                                    type="text"
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

                            <FormulateInput type="select" name='goblet' validation="required" validation-name="set" :options="artifacts.set"/>

                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='text' name="gobletmain" validation="required|number" /> 
                                </div>
                                <div class="col-85">
                                  <FormulateInput
                                    type='select' name="gobletmaintype" :options="artifacts.goblet" /> 
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
                                    :options="artifacts.subStat"
                                  />
                                  <FormulateInput
                                    type="text"
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
                            <FormulateInput type="select" name='circlet' validation="required" validation-name="set" :options="artifacts.set"/>
                          </div>
                        </div>
                          <div class="row">
                              <div class="col-25">
                                <label class="typo__label">Main stat:</label>
                              </div>
                                <div class="col-90">
                                  <FormulateInput
                                  type='text' name="circletmain" validation="required|number" /> 
                                </div>
                                <div class="col-85">
                                  <FormulateInput
                                    type='select' name="circletmaintype" :options="artifacts.circlet" /> 
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
                                          :options="artifacts.subStat"
                                        />
                                        <FormulateInput
                                          type="text"
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
      class="submit-button"
      type="submit"
      label="Submit"
    />
    </div>
    
  
   </FormulateForm> 
</body>
</template>

<script>
import characters from '../JSON/characters.JSON'
import artifacts from '../JSON/artifacts.JSON'
import weapons from '../JSON/weapons.JSON'
import Bg from '../JSON/backgrounds.JSON'

export default {
  data () {
    return {
      artifacts,
      characters,
      weapons,
      Bg,
      values: {
      }
    }
  },
  props: {
    validation: String
  },
  methods: {
      submit() {
        console.log('validation')
        console.log(this.validation)
        this.$router.push({name: 'CharaBuildRender', 
        params: this.values
      })
    },
  },
}
</script> 

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
body{
  font-family: Montserrat, sans-serif;  
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  min-height: 400px;
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
</style>