<template>
  <div class='buttons-and-footer'>
    <div class= "social">
      <button @click="$router.push({name: 'Home'})">Back</button>
        <twitter-button>
          <ShareNetwork
            network="twitter"
            url="https://genshin-impact-card-generator.herokuapp.com/"
            title="Check out Genshin Impact Card Generator!"
            hashtags="GenshinImpact,GenshinCard,原神"
            >
            Share on Twitter
          </ShareNetwork>
        </twitter-button>
    </div>
    <div class= "footer">
      <br>
      Genshin Card Generator is not affiliated with or endorsed by miHoYo. 
      <br>
      © All rights Reserved by miHoYo. Other properies belong to their respective owners.|
      <router-link :to="`contact`"><b>Contact Us</b></router-link> | <router-link :to="`FAQ`"><b>FAQ</b></router-link>
    </div>
  </div>
</template>


<style scoped>
@font-face { font-family: roboto-regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
 
.footer {
  bottom: 0;
  margin-bottom: 20px;
  height: 20px;
  font-size: 15px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}
.social {
  align-items: center;
}
button {
  background-color: #464545;
  color: white;
  padding: 10px 150px;
  text-align: center;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  align-items: center;
}
twitter-button {
  background-color: #1da1f2;
  color: #FFF;
  padding: 11px 40px;
  text-align: center;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  align-items: center;
}
a {
    text-decoration: none;
    color: white;
    cursor: pointer;
}
b {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}

</style>