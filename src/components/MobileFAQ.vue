<template>
  <div className="body">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <div class='centered'>
            <h1>Frequently asked questions</h1>
            <a href="#home" class="active"><router-link to="/"><img src="../../src/assets/Donate.png"></router-link></a>
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
</div>
</template>


<style lang="scss" scoped>

.body {
  font-size: 5px;
  font-family: Montserrat, sans-serif; 

}

 a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}
.question-wrap {
    padding: 0;
}
.centered {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
  margin: 20px;
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

h1 {
  font-size: 20px;
}
h2 {
  font-size: 17px;
}
</style>