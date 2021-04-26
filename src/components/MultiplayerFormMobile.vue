<template>
    <body>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      <div class ="form">
        <div class="row">
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
          <label class="typo__label">card Design:</label>
        </div>
        <div class="col-75">
          <multiselect v-model="cardValue" :options="options" :multiple="true" :max="1" :close-on-select="true" :clear-on-select="false" :preserve-search="true" placeholder="Pick card Design" label="name" track-by="name" :preselect-first="false">
              <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">Card design selected</span></template>
          </multiselect>
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
            <label class="typo__label">Spiral Abyss Progress:</label>
          </div>
          <div class="col-75">
            <div class="multiselect">
              <input class="form-style" type='number' v-model="SA" /> 
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
          <multiselect v-model="value" :options="options" :multiple="true" :max="4" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick your team" label="name" track-by="name" :preselect-first="false">
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


      <button class='mobile-button' v-on:click=submit()>Submit</button>
    </div>
  </body>
    

</template>



<script>
import Multiselect from 'vue-multiselect'

export default {
    components: {
    Multiselect
  },
  data () {
    return {
      value: [],
      options: [
        { name: 'Aether', id: 'Aether' },
        { name: 'Albedo', id: 'Albedo' },
        { name: 'Amber', id: 'Amber' },
        { name: 'Barbara', id: 'Barbara' },
        { name: 'Beidou', id: 'Beidou' },
        { name: 'Bennett', id: 'Bennett' }
      ],
      cardValue: [],
      PetValue: '',
      PetOptions: ['Dayflower Seelie', 'Curcuma Seelie', 'Rose Seelie', 'Endora'],
      PlatformValue: '',
      PlatformOptions: ['PC', 'PS4', 'Android', 'iOS'],
      ServerValue: '',
      ServerOptions: ['America', 'Asia', 'Europe', 'TW/HK/MO'],
    }
  },
  props: {
    cardDesign: String,
    playerName: String,
    AR: Number,
    SA: Number,
    UID: Number,
    server: String,
    twitter: String,
    platform: String,
    pet: String,
    team1: String,
    team2: String,
    team3: String,
    team4: String,
  },
  methods: {
      submit() {
        this.team1 = this.value[0].id
        this.team2 = this.value[1].id
        this.team3 = this.value[2].id
        this.team4 = this.value[3].id
        this.cardDesign = this.cardValue[0].id
        this.platform = this.PlatformValue
        this.server = this.ServerValue
        this.pet = this.PetValue
        console.log(this.SA)
        console.log(this.team1)
        console.log(this.team2)
        console.log(this.team3)
        console.log(this.team4)
        // this.$v.form.$touch();
        // if(this.$v.form.$error) return
        this.$router.push({name: 'Multiplayer Render page', 
        params: {
          cardChara : this.cardDesign, 
          playerName: this.playerName,
          AR: this.AR,
          SA: this.SA,
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
      url("../assets/Form-bg.png")
      70 / 50px    
      round;   
                
}
.mobile-button {
    background-color: #464545;
    color: white;
    padding: 10px 80px;
    text-align: center;
    font-size: 25px;
    margin: auto;
    cursor: pointer;
    border-radius: 4px;
    font-family: SuezOne-Regular;
}
</style>