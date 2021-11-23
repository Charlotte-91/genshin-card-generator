<template>
    <body>
      <div class ="form">
        <div class="row">
          <div class="valid">{{ this.validation }}</div>
          <div class="col-25">
            <label class="typo__label">Player Name:</label>
          </div>
          <div class="col-75">
            <div class="multiselect">
              <input class="form-style"  type='input' v-model="playerName" min='0' max='60' /> 
            </div>
          </div>
        </div>

       <div class="row">
        <div class="col-25">
          <label class="typo__label">Card Design:</label>
        </div>
        <div class="col-75">
              <multiselect v-model="cardValue" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>

       <div class="row">
        <div class="col-25">
          <label class="typo__label">Card Background:</label>
        </div>
        <div class="col-75">
          <multiselect v-model="cardBgValue" :options="CardBackground" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>

      <div class="row">
          <div class="col-25">
            <label class="typo__label">AR:</label>
          </div>
          <div class="col-75">
            <div class="multiselect">
              <input class="form-style" type='number' v-model="AR" min='0' max='60' /> 
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label class="typo__label">UID:</label>
          </div>
          <div class="col-75">
            <div class="multiselect">
              <input class="form-style" type='number' v-model="UID" /> 
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label class="typo__label">Twitter:</label>
          </div>
          <div class="col-75">
            <div class="multiselect">
              <input class="form-style" type='text' v-model="twitter" /> 
            </div>
          </div>
        </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Platform:</label>
        </div>
        <div class="col-75">
          <multiselect v-model="PlatformValue" :options="PlatformOptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Server:</label>
        </div>
        <div class="col-75">
          <multiselect v-model="ServerValue" :options="ServerOptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Team:</label>
        </div>
        <div class="col-75">
           <multiselect v-model="team" :options="options" :multiple="true" :max="4" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick your team" :show-labels="false" :preselect-first="false">
              <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} team members selected</span></template>
          </multiselect>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Pet:</label>
        </div>
        <div class="col-75">
          <multiselect v-model="PetValue" :options="PetOptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>


      <button class='mobile-button' v-on:click=validate()>Submit</button>
    </div>
  </body>
    

</template>

<script>
import Multiselect from 'vue-multiselect'
import Characters from '../JSON/characters.JSON'
import Pets from '../JSON/pets.JSON'
import Bg from '../JSON/backgrounds.JSON'

export default {
    components: {
    Multiselect
  },
  data () {
    return {
      team: [],
      options: Characters.Characters,
      cardBgValue: '',
      cardValue: '',
      PetValue: '',
      PetOptions: Pets.Pets,
      CardBackground: Bg.Backgrounds,
      PlatformValue: '',
      PlatformOptions: ['PC', 'PS4', 'Android', 'iOS'],
      ServerValue: '',
      ServerOptions: ['America', 'Asia', 'Europe', 'TW/HK/MO'],
    }
  },
  props: {
    cardDesign: String,
    cardBg: String,
    playerName: String,
    AR: Number,
    UID: Number,
    server: String,
    twitter: String,
    platform: String,
    pet: String,
    team1: String,
    team2: String,
    team3: String,
    team4: String,
    validation: String
  },
  methods: {
      submit() {
        this.team1 = this.team[0]
        this.team2 = this.team[1]
        this.team3 = this.team[2]
        this.team4 = this.team[3]
        this.cardDesign = this.cardValue
        this.platform = this.PlatformValue
        this.server = this.ServerValue
        this.pet = this.PetValue
        this.cardBg = this.cardBgValue
        this.$router.push({name: 'Multiplayer Render page', 
        params: {
          cardChara : this.cardDesign, 
          cardBg: this.cardBg,
          playerName: this.playerName,
          AR: this.AR,
          UID: this.UID,
          server: this.server,
          twitter: this.twitter,
          platform: this.platform,
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
        if (this.playerName == undefined || this.playerName == '' || this.AR == undefined || this.AR == '' || this.team.length == 0 || this.cardValue.length == 0 || this.PlatformValue.length == 0 || this.ServerValue.length == 0) {
            if (this.playerName == undefined || this.playerName == '') {errors.push(' Player name ')}
            if (this.AR == undefined || this.AR == '') {errors.push(' AR ')}
            if (this.team.length == 0) {errors.push(' Team ')}
            if (this.cardValue.length == 0) {errors.push(' Card design ')}
            if (this.ServerValue.length == 0) {errors.push(' Server ')}
            if (this.PlatformValue.length == 0) {errors.push(' Platform ')}
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
  src: url('../../assets/SuezOne-Regular.ttf'); } 
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
      url("../../assets/Form-bg.png")
      70 / 50px    
      round;   
                
}
.mobile-button {
    background-color: #464545;
    color: white;
    padding: 10px 80px;
    text-align: center;
    font-size: 25px;
    /* margin: auto; */
    cursor: pointer;
    border-radius: 4px;
    font-family: SuezOne-Regular;
}
.valid {
  font-size: 16px;
  color: red;
  margin-bottom: 15px;
}
</style>