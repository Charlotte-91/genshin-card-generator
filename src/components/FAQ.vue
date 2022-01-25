<template>
  <div className="FAQ">
    <body>
        <div class='centered'>
            <h1>Frequently asked questions</h1>
            <a href="https://ko-fi.com/charnyam"><img src="../../src/assets/Donate.png"></a>
            <div class='question-wrap'>
                <h2>Does Genshin Card Generator save user infomation/data?</h2>
                <p>No. Genshin Card Generator does not save your infomation in anyway. 
                <br>
                Any infomation inputted is stored locally in your web browser until you leave the website. </p>
            </div>
            <div class='question-wrap'>
                <h2>Is Genshin Card Generator endorsed by miHoYo?</h2>
                <p>No. We are not endorsed by or affiliated with miHoYo. 
                <br>
                Any assets used are property of miHoYo.</p>
            </div>
            <div class='question-wrap'>
                <h2>I have a suggestion or issue, can I contact the creator?</h2>
                <p>Of course! Please fill out the form on our <router-link :to="`contact`"><a>contact page</a></router-link> </p>
            </div>
            <div class='question-wrap'>
                <h2>Can I see your Github?</h2>
                <p>Sure! Here is a link to this project on my <a href="https://github.com/Charlotte-91/genshin-card-generator" >Github!</a></p> 
            </div>
        </div>
    </body>
  </div>
</template>


<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
body {
  padding: 20px;
  font-family: Montserrat, sans-serif; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1;

}

.centered {
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
 a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}
.question-wrap {
    padding: 15px;
}
@media screen and (max-width: 800px) {
  .centered{
    width: 80%
  }
}
</style>