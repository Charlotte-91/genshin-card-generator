<template>
    <div class='buttons-and-footer'>
        <div class= "social">
            <button @click="$router.push({name: 'Home'})">Back</button>
              <!-- <share-it 
                :shareConfig="share" 
                text="Check out Genshin Card Generator!"
                url="https://genshin-impact-card-generator.herokuapp.com/"
              /> -->
              <share-it :shareConfig="share"  href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" 
              data-text="Check out Genshin Impact card generator!" data-url="https://genshin-impact-card-generator.herokuapp.com/" 
              data-hashtags="GenshinImpactCardGenerator" data-show-count="false">Tweet</share-it>
          </div>
        <div class= "footer">
          <br>
            Genshin Card Generator is not affiliated with or endorsed by miHoYo. |
            <router-link :to="`contact`"><a>Contact Us</a></router-link>
        <br>
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
        // facebook: {
        //   size: "2x"
        // }
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
a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}

</style>