import logo from './assets/genshin-logo.png';
import formbg from './assets/Form-bg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="280px" />
      </header>
      <div class="body">
        <div class ="container">
          <img src={formbg} className="Form-bg" alt="Form background"/>
            <div class="centered">
              <form action="/card_page">
                <div class ="row">
                  <div class="col-25">
                    <label for="card-design">Choose a card design:</label>
                  </div>
                <div class="col-75">
                  <select id='card-design' name='card-design'>
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
                <input type="text" id="player-name" name="player-name"/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="UID">UID (Optional):</label>
              </div>
              <div class="col-75">
                <input type="text" id="player-name" name="player-name"/>
              </div>
          </div>
          <div class="row">
            <div class="col-25">
                <label for="AR">Adventure Rank:</label>
            </div>
            <div class="col-75">
                <input type="text" id="AR" name="AR"/>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="team-1">Choose team:</label>
          </div>
          <div class="col-75">
            <select id='team-1' name='team-1'>
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
            <select id='team-2' name='team-2'>
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
            <select id='team-3' name='team-3'>
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
            <select id='team-4' name='team-4'>
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
        <div class="button" type="submit" id="submit">
          Submit
        </div>
      </form> 
    </div>
  </div>
</div>
<div class= "footer">
    Genshin Card Generator is not affiliated with or endorsed by miHoYo.
</div>
</div>




  );
}

export default App;
