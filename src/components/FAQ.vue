<template>
  <div className="FAQ">
    <body>
        <div class='centered'>
            <h1>Frequently asked questions</h1>
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
        </div>
    </body>
    <button @click="$router.push({name: 'Home'})">Back</button>
  </div>
</template>


<style scoped>
.app{
    width: 100%
}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
.body {
  background-color:#464545;
  font-size: 25px;
  padding: 20px;
  font-family: SuezOne-Regular; 
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
  padding: 10px 120px;
  text-align: center;
  font-size: 25px;
  margin: 30px 100px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 

}
.centered {
  position: relative;
  top: 70%;
  left: 50%;
  transform: translate(-53%, 0%);
  width: 40%;
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
    padding: 20px;
}

</style>