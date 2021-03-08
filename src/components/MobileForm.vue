<template>
  <div class="body">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
    <div class="centered">
    <div class="summary-text-red" v-if="$v.form.$error">
        Form has errors
    </div>
        <form @submit.prevent="submit">
            <div class="px-4" :class="{ 'hasError': $v.form.cardChara.$error }">
                <label for="card-design">Card design:<star>*</star></label>
                <br>
                <select v-model='form.cardChara'>
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value="Aether-cd">Aether</option>
                    <option value="Albedo-cd">Albedo</option>
                    <option value="Amber-cd">Amber</option>
                    <option value="Barbara-cd">Barbara</option>
                    <option value="Beidou-cd">Beidou</option>
                    <option value="Bennet-cd">Bennet</option>
                    <option value="Chongyun-cd">Chongyun</option>
                    <option value="Dainsleif-cd">Dainsleif</option>
                    <option value="Diluc-cd">Diluc</option>
                    <option value="Diona-cd">Diona</option>
                    <option value="Fischl-cd">Fischl</option>
                    <option value="Ganyu-cd">Ganyu</option>
                    <option value="Hutao-cd">Hu Tao</option>
                    <option value="Jean-cd">Jean</option>
                    <option value="Kaeya-cd">Kaeya</option>
                    <option value="Keqing-cd">Keqing</option>
                    <option value="Klee-cd">Klee</option>
                    <option value="Lisa-cd">Lisa</option>
                    <option value="Lumine-cd">Lumine</option>
                    <option value="Mona-cd">Mona</option>
                    <option value="Ningguang-cd">Ningguang</option>
                    <option value="Noelle-cd">Noelle</option>
                    <option value="Paimon-cd">Paimon</option>
                    <option value="Qiqi-cd">Qiqi</option>
                    <option value="Razor-cd">Razor</option>
                    <option value="Sucrose-cd">Sucrose</option>
                    <option value="Tartaglia-cd">Tartaglia</option>
                    <option value="Venti-cd">Venti</option>
                    <option value="Xiangling-cd">Xiangling</option>
                    <option value="Xiao-cd">Xiao</option>
                    <option value="Xingqiu-cd">Xingqiu</option>
                    <option value="Xinyan-cd">Xinyan</option>
                    <option value="Zhongli-cd">Zhongli</option>
                    </select>
                </div>

                <div class="px-4" :class="{ 'hasError': $v.form.playerName.$error }">
                    <label for="player-name">Player name:<star>*</star></label>
                    <br>
                    <input type="text" v-model="form.playerName"/>
                </div>



                <div class="px-4" :class="{ 'hasError': $v.form.AR.$error }">
                    <label for="AR">Adventure Rank:<star>*</star></label>
                    <br>
                    <input type="text" v-model="form.AR"/>
                </div>
          

                <label for="team-1">Choose team:<star>*</star></label>
                  <div class="px-4" :class="{ 'hasError': $v.form.team1.$error }">
                    <select v-model='form.team1'>
                      <option hidden disabled selected value> -- select an option -- </option>
                      <option value="Aether-small">Aether</option>
                      <option value="Albedo-small">Albedo</option>
                      <option value="Amber-small">Amber</option>
                      <option value="Barbara-small">Barbara</option>
                      <option value="Beidou-small">Beidou</option>
                      <option value="Bennet-small">Bennet</option>
                      <option value="Chongyun-small">Chongyun</option>
                      <option value="Diluc-small">Diluc</option>
                      <option value="Diona-small">Diona</option>
                      <option value="Fischl-small">Fischl</option>
                      <option value="Ganyu-small">Ganyu</option>
                      <option value="Hutao-small">Hu Tao</option>
                      <option value="Jean-small">Jean</option>
                      <option value="Kaeya-small">Kaeya</option>
                      <option value="Keqing-small">Keqing</option>
                      <option value="Klee-small">Klee</option>
                      <option value="Lisa-small">Lisa</option>
                      <option value="Lumine-small">Lumine</option>
                      <option value="Mona-small">Mona</option>
                      <option value="Ningguang-small">Ningguang</option>
                      <option value="Noelle-small">Noelle</option>
                      <option value="Qiqi-small">Qiqi</option>
                      <option value="Razor-small">Razor</option>
                      <option value="Sucrose-small">Sucrose</option>
                      <option value="Tartaglia-small">Tartaglia</option>
                      <option value="Venti-small">Venti</option>
                      <option value="Xiangling-small">Xiangling</option>
                      <option value="Xiao-small">Xiao</option>
                      <option value="Xingqiu-small">Xingqiu</option>
                      <option value="Xinyan-small">Xinyan</option>
                      <option value="Zhongli-small">Zhongli</option>
                    </select>
                  </div>
                    <br>
                  <div class="px-4" :class="{ 'hasError': $v.form.team2.$error }">
                    <select v-model='form.team2'>
                      <option hidden disabled selected value> -- select an option -- </option>
                      <option value="Aether-small">Aether</option>
                      <option value="Albedo-small">Albedo</option>
                      <option value="Amber-small">Amber</option>
                      <option value="Barbara-small">Barbara</option>
                      <option value="Beidou-small">Beidou</option>
                      <option value="Bennet-small">Bennet</option>
                      <option value="Chongyun-small">Chongyun</option>
                      <option value="Diluc-small">Diluc</option>
                      <option value="Diona-small">Diona</option>
                      <option value="Fischl-small">Fischl</option>
                      <option value="Ganyu-small">Ganyu</option>
                      <option value="Hutao-small">Hu Tao</option>
                      <option value="Jean-small">Jean</option>
                      <option value="Kaeya-small">Kaeya</option>
                      <option value="Keqing-small">Keqing</option>
                      <option value="Klee-small">Klee</option>
                      <option value="Lisa-small">Lisa</option>
                      <option value="Lumine-small">Lumine</option>
                      <option value="Mona-small">Mona</option>
                      <option value="Ningguang-small">Ningguang</option>
                      <option value="Noelle-small">Noelle</option>
                      <option value="Qiqi-small">Qiqi</option>
                      <option value="Razor-small">Razor</option>
                      <option value="Sucrose-small">Sucrose</option>
                      <option value="Tartaglia-small">Tartaglia</option>
                      <option value="Venti-small">Venti</option>
                      <option value="Xiangling-small">Xiangling</option>
                      <option value="Xiao-small">Xiao</option>
                      <option value="Xingqiu-small">Xingqiu</option>
                      <option value="Xinyan-small">Xinyan</option>
                      <option value="Zhongli-small">Zhongli</option>
                    </select>
                  </div>
                    <br>
                  <div class="px-4" :class="{ 'hasError': $v.form.team3.$error }">
                    <select v-model='form.team3'>
                      <option hidden disabled selected value> -- select an option -- </option>
                      <option value="Aether-small">Aether</option>
                      <option value="Albedo-small">Albedo</option>
                      <option value="Amber-small">Amber</option>
                      <option value="Barbara-small">Barbara</option>
                      <option value="Beidou-small">Beidou</option>
                      <option value="Bennet-small">Bennet</option>
                      <option value="Chongyun-small">Chongyun</option>
                      <option value="Diluc-small">Diluc</option>
                      <option value="Diona-small">Diona</option>
                      <option value="Fischl-small">Fischl</option>
                      <option value="Ganyu-small">Ganyu</option>
                      <option value="Hutao-small">Hu Tao</option>
                      <option value="Jean-small">Jean</option>
                      <option value="Kaeya-small">Kaeya</option>
                      <option value="Keqing-small">Keqing</option>
                      <option value="Klee-small">Klee</option>
                      <option value="Lisa-small">Lisa</option>
                      <option value="Lumine-small">Lumine</option>
                      <option value="Mona-small">Mona</option>
                      <option value="Ningguang-small">Ningguang</option>
                      <option value="Noelle-small">Noelle</option>
                      <option value="Qiqi-small">Qiqi</option>
                      <option value="Razor-small">Razor</option>
                      <option value="Sucrose-small">Sucrose</option>
                      <option value="Tartaglia-small">Tartaglia</option>
                      <option value="Venti-small">Venti</option>
                      <option value="Xiangling-small">Xiangling</option>
                      <option value="Xiao-small">Xiao</option>
                      <option value="Xingqiu-small">Xingqiu</option>
                      <option value="Xinyan-small">Xinyan</option>
                      <option value="Zhongli-small">Zhongli</option>
                    </select>
                  </div>
                    <br>
                  <div class="px-4" :class="{ 'hasError': $v.form.team4.$error }">
                    <select v-model='form.team4'>
                      <option hidden disabled selected value> -- select an option -- </option>
                      <option value="Aether-small">Aether</option>
                      <option value="Albedo-small">Albedo</option>
                      <option value="Amber-small">Amber</option>
                      <option value="Barbara-small">Barbara</option>
                      <option value="Beidou-small">Beidou</option>
                      <option value="Bennet-small">Bennet</option>
                      <option value="Chongyun-small">Chongyun</option>
                      <option value="Diluc-small">Diluc</option>
                      <option value="Diona-small">Diona</option>
                      <option value="Fischl-small">Fischl</option>
                      <option value="Ganyu-small">Ganyu</option>
                      <option value="Hutao-small">Hu Tao</option>
                      <option value="Jean-small">Jean</option>
                      <option value="Kaeya-small">Kaeya</option>
                      <option value="Keqing-small">Keqing</option>
                      <option value="Klee-small">Klee</option>
                      <option value="Lisa-small">Lisa</option>
                      <option value="Lumine-small">Lumine</option>
                      <option value="Mona-small">Mona</option>
                      <option value="Ningguang-small">Ningguang</option>
                      <option value="Noelle-small">Noelle</option>
                      <option value="Qiqi-small">Qiqi</option>
                      <option value="Razor-small">Razor</option>
                      <option value="Sucrose-small">Sucrose</option>
                      <option value="Tartaglia-small">Tartaglia</option>
                      <option value="Venti-small">Venti</option>
                      <option value="Xiangling-small">Xiangling</option>
                      <option value="Xiao-small">Xiao</option>
                      <option value="Xingqiu-small">Xingqiu</option>
                      <option value="Xinyan-small">Xinyan</option>
                      <option value="Zhongli-small">Zhongli</option>
                    </select>
                </div>
            
            
                <input type="checkbox" name="mutliplayer" id="mutliplayer-choice">
                <label for="multiplayer-choice"> Multiplayer</label>
          
                <div class="reveal-multiplayer">
                    <div class="px-4" :class="{ 'hasError': $v.form.UID.$error }">
                        <label for="UID">UID:</label>
                        <br>
                        <input type="text" v-model="form.UID"/>
                    </div>

                    <div class="px-4" :class="{ 'hasError': $v.form.platform.$error }">
                        <label for="platform">Platform:<star>*</star></label>
                        <br>
                        <select v-model='form.platform'>
                        <option hidden disabled selected value> -- select an option -- </option>
                        <option value="PC">PC</option>
                        <option value="PS4">PS4</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                        </select>
                    </div>

                    <div class="px-4" :class="{ 'hasError': $v.form.server.$error }">
                        <label for="server">Server:<star>*</star></label>
                        <br>
                        <select v-model='form.server'>
                        <option hidden disabled selected value> -- select an option -- </option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="TW/HK/MO">TW/HK/MO</option>
                        </select>
                    </div>

                    <div class="px-4" :class="{ 'hasError': $v.form.twitter.$error }">
                        <label for="twitter">Twitter:</label>
                        <br>
                        <input type="text" v-model="form.twitter"/>
                    </div>
                </div>
                <button type="submit" class="mobile-button">
                        Submit
                </button>
        </form> 
</div>
</div>

</template>

<script>
import { required } from "vuelidate/lib/validators";


export default {
  name: "FormComponent",
  use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
  data() {
    return {
      form: {
        cardChara: "",
        playerName: "",
        UID: "",
        AR: "",
        team1: "",
        team2: "",
        team3: "",
        team4: "",
        platform: "",
        server: "",
        twitter: ""
      }
    };
  },
props: {
    cardChara: String,
    playerName: String,
    UID: Number,
    AR: Number,
    team1: String,
    team2: String,
    team3: String,
    team4: String,
    platform: String,
    server: String,
    twitter: String,
    multiplayer: Boolean
  },
validations: {
    form: {
        cardChara: { required },
        playerName: { required },
        UID: { },
        AR: { required },
        team1: { required },
        team2: { required },
        team3: { required },
        team4: { required },
        platform: { },
        server: { },
        twitter: {}
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return
      if (this.form.platform == '')
        this.$router.push({name: 'CardPage', 
        params: {
          cardChara : this.form.cardChara, 
          playerName: this.form.playerName,
          AR: this.form.AR,
          team1: this.form.team1,
          team2: this.form.team2,
          team3: this.form.team3,
          team4: this.form.team4,
          }})
      else
      this.$router.push({name: 'CardPage', 
        params: {
          cardChara : this.form.cardChara, 
          playerName: this.form.playerName,
          UID: this.form.UID,
          AR: this.form.AR,
          team1: this.form.team1,
          team2: this.form.team2,
          team3: this.form.team3,
          team4: this.form.team4,
          platform: this.form.platform,
          server: this.form.server,
          twitter: this.form.twitter
          }})
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  background-color: #f7f7f7;
  border: 1px solid rgb(199, 199, 199);
  padding: 0.3rem 0.5rem;
  border-radius: 2px;

}
.hasError label {
  color: red;
}
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
.header {
  top: 0;
  padding: 0px;

  height: 280px;
  text-align: center;
}
.body {

  padding: 20px;
  font-family: SuezOne-Regular; 
  align-content: center;
  
}
star {
  font-family: SuezOne-Regular; 
  color: red;
}
.footer {
  position: bottom;
  padding: 30px;
  bottom: 0;
  height: 20px;
  font-size: 15px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
}
button {
  background-color: #464545;
  color: white;
  padding: 10px 30px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  align-items: center;
  margin: auto;
}

app {
  height:0%
}
* {
  box-sizing: border-box;
}
input[type=text], select, textarea {
  width: 85%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.centered {
  position: relative;
  top: 70%;
  left: -6%;
  transform: translate(-0%, 0%);
  width: 95%;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
  margin: 30px;
  padding: 10px;
  font-size: 20px;

  border-image:
      url("../assets/Form-bg.png")
      70 / 50px    
      round;    
  @media screen and (min-width: 500px) {
    position: relative;
  top: 70%;
  left: 52%;
  transform: translate(-58%, 0%);
  width: 80%;
  
  }              
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  padding: 2px;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */

.reveal-multiplayer {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transform: scale(1);
  transition: 0.5s;
  input[type="radio"]:checked ~ &,
  input[type="checkbox"]:checked ~ & {
    opacity: 1;
    max-height: 10000px;
    overflow: visible;
    padding: 15px 10px;
    transform: scale(1);
    width: 100%;
  }
}        


</style>

           
            
          
          
          
          
          