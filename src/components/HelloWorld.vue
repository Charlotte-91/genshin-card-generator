<template>
  <div className="App">
      <header className="App-header">
        <img src="../assets/genshin-logo.png" height='260px'/>
      </header>
      <div class="body">
        <div class ="container">
          <img src="../assets/Form-bg.png" className="Form-bg" alt="Form background"/>
            <div class="centered">
              <form action="/card_page">
                <div class ="row">
                  <div class="col-25">
                    <label for="card-design">Card design:</label>
                  </div>
                <div class="col-75">
                  <select v-model='cardChara'>
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value="Aether-cd">Aether</option>
                    <option value="Albedo-cd">Albedo</option>
                    <option value="Amber-cd">Amber</option>
                    <option value="Barbara-cd">Barbara</option>
                    <option value="Beidou-cd">Beidou</option>
                    <option value="Bennet-cd">Bennet</option>
                    <option value="Chongyun-cd">Chongyun</option>
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
            <div class="row">
              <div class="col-25">
                <label for="player-name">Player name:</label>
              </div>
              <div class="col-75">
                <input type="text" v-model="playerName"/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="UID">UID (Optional):</label>
              </div>
              <div class="col-75">
                <input type="text" v-model="UID"/>
              </div>
          </div>
          <div class="row">
              <div class="col-25">
                <label for="platform">Platform:</label>
              </div>
              <div class="col-75">
                <select v-model='platform'>
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value="PC">PC</option>
                    <option value="PS4">PS4</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                </select>
              </div>
          </div>
          <div class="row">
              <div class="col-25">
                <label for="server">Server:</label>
              </div>
              <div class="col-75">
                <select v-model='server'>
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value="America">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="TWHKMO">TW/HK/MO</option>
                </select>
              </div>
          </div>
          <div class="row">
              <div class="col-25">
                <label for="twitter">Twitter:</label>
              </div>
              <div class="col-75">
                <input type="text" v-model="twitter"/>
              </div>
          </div>
          <div class="row">
            <div class="col-25">
                <label for="AR">Adventure Rank:</label>
            </div>
            <div class="col-75">
                <input type="text" v-model="AR"/>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="team-1">Choose team:</label>
          </div>
          <div class="col-75">
            <select v-model='team1'>
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
            <select v-model='team2'>
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
            <select v-model='team3'>
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
            <select v-model='team4'>
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
        </form> 
      <button @click="$router.push({name: 'CardPage', 
      params: {
        cardChara : cardChara, 
        playerName: playerName,
        UID: UID,
        AR: AR,
        team1: team1,
        team2: team2,
        team3: team3,
        team4: team4,
        platform: platform,
        server: server,
        twitter: twitter

        
        }})">Submit</button>
    </div>
  </div>
</div>
<div class= "footer">
    Genshin Card Generator is not affiliated with or endorsed by miHoYo.
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
    twitter: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@font-face { font-family: roboto-regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
body{
  background-color:#464545;
}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
.body {
  font-size: 25px;
  padding: 20px;
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
  padding: 10px 150px;
  text-align: center;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
}
app {
  height:0%
}
* {
  box-sizing: border-box;
}
input[type=text], select, textarea {
  width: 75%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.container {
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
.col-25 {
  float: left;
  width: 40%;
  margin-top: 6px;
  text-align: right;
  font-family: SuezOne-Regular; 
}
.col-75 {
  float: right;
  width: 60%;
  margin-top: 6px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  padding: 2px;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>