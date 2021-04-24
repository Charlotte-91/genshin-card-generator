<template>
    <body>
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
          <label class="typo__label">Card Design:</label>
        </div>
        <div class="col-75">
          <multiselect v-model="cardValue" :options="cardOptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">Team: </label>
        </div>
        <div class="col-75">
          <multiselect v-model="value" :options="options" :multiple="true" :max="4" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick your team" label="name" track-by="name" :preselect-first="false">
              <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} team members selected</span></template>
          </multiselect>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label class="typo__label">{{this.team1}}'s weapon: </label>
        </div>
        <div class="col-75">
          <multiselect v-model="weapon_1" :options="weapons" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
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
        { name: 'Aether', id: 'Aether-banner' },
        { name: 'Albedo', id: 'Albedo-banner' },
        { name: 'Amber', id: 'Amber-banner' },
        { name: 'Barbara', id: 'Barbara-banner' },
        { name: 'Beidou', id: 'Beidou-banner' },
        { name: 'Bennet', id: 'Bennett-banner' }
      ],
      cardValue: '',
      cardOptions: ['Start Menu', 'Mondstat', 'Liyue'],
      weapon_1: '',
      weapons: ['Start Menu', 'Mondstat', 'Liyue']
    }
  },
  props: {
    cardDesign: String,
    playerName: String,
    AR: Number,
    SA: Number,
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
        this.cardDesign = this.cardValue
        console.log(this.SA)

        // this.$v.form.$touch();
        // if(this.$v.form.$error) return
        this.$router.push({name: 'Team Card Render', 
        params: {
          cardDesign : this.cardDesign, 
          playerName: this.playerName,
          AR: this.AR,
          SA: this.SA,
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





<style>
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 25px;
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
.row:after {
  content: "";
  display: table;
  clear: both;
  padding: 2px;
}
.form {
  position: relative;
  top: 70%;
  left: 50%;
  transform: translate(-53%, 0%);
  width: 45%;
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
</style>