<template>
  <div class="body">
    <div class ="container">
      <img src="../assets/Form-bg.png" className="Form-bg" alt="Form background"/>
        <div class="centered">
          <div class="summary-text-red" v-if="$v.form.$error">
            Form has errors
          </div>
          <form @submit.prevent="submit">
            <div class ="row">
              <div class="px-4" :class="{ 'hasError': $v.form.cardChara.$error }">
                <div class="col-25">
                  <label for="card-design">Card design:</label>
                </div>
                <div class="col-75">
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
              </div>
            </div>

            <div class="px-4" :class="{ 'hasError': $v.form.playerName.$error }">
              <div class="row">
                <div class="col-25">
                  <label for="player-name">Player name:</label>
                </div>
                <div class="col-75">
                  <input type="text" v-model="form.playerName"/>
                </div>
              </div>
            </div>


            <div class="px-4" :class="{ 'hasError': $v.form.AR.$error }">
              <div class="row">
                <div class="col-25">
                  <label for="AR">Adventure Rank:</label>
                </div>
                <div class="col-75">
                  <input type="text" v-model="form.AR"/>
                </div>
              </div>
            </div>
          
            <div class="row">
              <div class="col-25">
                <label for="team-1">Choose team:</label>
              </div>
                <div class="col-75">
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
                </div>
                <div class="col-75">
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
                </div>
                <div class="col-75">
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
                </div>
                <div class="col-75">
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
              </div>
            </div>
            
            <input type="checkbox" name="mutliplayer" id="mutliplayer-choice">
            <label for="multiplayer-choice"> Multiplayer</label>
          
            <div class ="reveal-multiplayer">
              <div class="px-4" :class="{ 'hasError': $v.form.UID.$error }">
                <div class="row">
                  <div class="col-25">
                    <label for="UID">UID:</label>
                  </div>
                  <div class="col-75">
                    <input type="text" v-model="form.UID"/>
                  </div>
              </div>
              </div>

              <div class="px-4" :class="{ 'hasError': $v.form.platform.$error }">
                <div class="row">
                  <div class="col-25">
                    <label for="platform">Platform:</label>
                  </div>
                  <div class="col-75">
                    <select v-model='form.platform'>
                      <option hidden disabled selected value> -- select an option -- </option>
                      <option value="PC">PC</option>
                      <option value="PS4">PS4</option>
                      <option value="Android">Android</option>
                      <option value="iOS">iOS</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="px-4" :class="{ 'hasError': $v.form.server.$error }">
                <div class="row">
                  <div class="col-25">
                    <label for="server">Server:</label>
                  </div>
                  <div class="col-75">
                    <select v-model='form.server'>
                      <option hidden disabled selected value> -- select an option -- </option>
                      <option value="America">America</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia">Asia</option>
                      <option value="TW/HK/MO">TW/HK/MO</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="px-4" :class="{ 'hasError': $v.form.twitter.$error }">
                <div class="row">
                  <div class="col-25">
                    <label for="twitter">Twitter:</label>
                  </div>
                  <div class="col-75">
                    <input type="text" v-model="form.twitter"/>
                  </div>
                </div>
              </div>
            </div>
                <button type="submit" class="button">
                    Submit
                </button>
          </form> 
      </div>
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
<style lang="scss">
input {
  background-color: #f7f7f7;
  border: 1px solid rgb(199, 199, 199);
  padding: 0.3rem 0.5rem;
  border-radius: 2px;

}
.hasError label {
  color: red;
}
.reveal-multiplayer {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transform: scale(0.8);
  transition: 0.5s;
  input[type="radio"]:checked ~ &,
  input[type="checkbox"]:checked ~ & {
    opacity: 1;
    max-height: 100px;
    overflow: visible;
    padding: 10px 20px;
    transform: scale(1);
  }
}
</style>

           
            
          
          
          
          
          