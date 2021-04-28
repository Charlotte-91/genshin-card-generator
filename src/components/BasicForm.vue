<template>
    <body>
      <div class ="form">
        <div class="row">
          <div class="valid">{{ this.validation }}</div>
          <!-- <h3>Multiplayer card generator</h3> -->
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

      <button class='mobile-button' v-on:click=validate()>Submit</button>
    </div>
  </body>
    

</template>



<script>
import Multiselect from 'vue-multiselect'
// const { required, minLength, maxLength } = window.validators

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
        { name: 'Bennett', id: 'Bennett' },
        { name: 'Chongyun', id: 'Chongyun' },
        { name: 'Diluc', id: 'Diluc' },
        { name: 'Diona', id: 'Diona' },
        { name: 'Fischl', id: 'Fischl' },
        { name: 'Ganyu', id: 'Ganyu' },
        { name: 'Hu tao', id: 'Hutao' },
        { name: 'Jean', id: 'Jean' },
        { name: 'Kaeya', id: 'Kaeya' },
        { name: 'Keqing', id: 'Keqing' },
        { name: 'Klee', id: 'Klee' },
        { name: 'Lisa', id: 'Lisa' },
        { name: 'Lumine', id: 'Lumine' },
        { name: 'Mona', id: 'Mona' },
        { name: 'Ningguang', id: 'Ningguang' },
        { name: 'Noelle', id: 'Noelle' },
        { name: 'Qiqi', id: 'Qiqi' },
        { name: 'Razor', id: 'Razor' },
        { name: 'Rosaria', id: 'Rosaria' },
        { name: 'Sucrose', id: 'Sucrose' },
        { name: 'Tartaglia', id: 'Tartaglia' },
        { name: 'Venti', id: 'Venti' },
        { name: 'Xiangling', id: 'Xiangling' },
        { name: 'Xiao', id: 'Xiao' },
        { name: 'Xingqiu', id: 'Xingqiu' },
        { name: 'Xinyan', id: 'Xinyan' },
        { name: 'Yanfei', id: 'Yanfei' },
        { name: 'Zhongli', id: 'Zhongli' },
        
      ],
      cardValue: [],
      PetValue: '',
      PetOptions: ['Dayflower Seelie', 'Curcuma Seelie', 'Rose Seelie', 'Endora']
    }
  },
  props: {
    cardDesign: String,
    playerName: String,
    AR: Number,
    pet: String,
    team1: String,
    team2: String,
    team3: String,
    team4: String,
    validation: String
  },
  // validations: {
  //   : {
  //     cardDesign: { required },
  //     playerName: { required },
  //     AR: { required, min: minLength(1), max: maxLength(2)},
  //     pet: {},
  //     team1: { required },
  //     team2: { required },
  //     team3: { required },
  //     team4: { required },
  //   }
  // },
  methods: {
      submit() {
        this.team1 = this.value[0].id
        this.team2 = this.value[1].id
        this.team3 = this.value[2].id
        this.team4 = this.value[3].id
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