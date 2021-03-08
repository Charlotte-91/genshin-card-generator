<template>
  <div className="body">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
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
        <button @click="$router.push({name: 'Home'})">Back</button>
</div>
</template>


<style lang="scss" scoped>
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 

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
  margin: 30px 0px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 

}
 a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}
.question-wrap {
    padding: 20px;
}
.centered {
  position: static;
  top: 70%;
  transform: translate(0%, 0%);
  width: 70%;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
  padding: 15px;
  font-size: 20px;

  border-image:
      url("../assets/Form-bg.png")
      70 / 50px    
      round;    
  @media screen and (min-width: 500px) {
    position: relative;
  top: 70%;
  left: 52%;
  transform: translate(-52%, 0%);
  width: 80%;
  
  }              
}
h1 {
    font-family: SuezOne-Regular; 
    font-size: 25px
}
h2 {
    font-family: SuezOne-Regular; 
    font-size: 20px
}
p {
    font-size: 15px
}
</style>