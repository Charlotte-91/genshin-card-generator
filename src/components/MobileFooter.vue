<template>
  <div class='mobile-footer'>
    <div class= "social">
      <button class="mobile-button" @click="$router.push({name: 'Home'})">Back</button>
      <br>
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
      © All rights Resevered by miHoYo. Other properies belong to their respective owners.|
        <router-link :to="`contact`"><a>Contact Us</a></router-link> | <router-link :to="`FAQ`"><a>FAQ</a></router-link>
      </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      share: {
        twitter: {
          size: "2x",
        },
        facebook: {
          size: "2x"
        }
      } 
    }
   }
}
</script>

<style scoped>

@font-face { font-family: roboto-regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  

.footer {
  bottom: 0;
  height: 20px;
  font-size: 45px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  position: absolute;
  margin: -620px -5px;
}
.social {
  position: bottom;
  align-items: center;
  position: absolute; 
  width: 100%;
  margin: 0px 0px;
}

.mobile-button {
  background-color: #3b3b3b;
  color: white;
  padding: 45px 370px;
  text-align: center;
  font-size: 60px;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  margin: 100px;
}
twitter-button {
  background-color: #1da1f2;
  color: #FFF;
  padding: 40px 200px;
  text-align: center;
  font-size: 60px;
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