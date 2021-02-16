<template>
    <div class='mobile-footer'>
        <div class= "social">
            <button class="mobile-button" @click="$router.push({name: 'Home'})">Back</button>
              <share-it 
                :shareConfig="share" 
                text="Checkout Genshin Card Generator!"
                url="https://genshin-impact-card-generator.herokuapp.com/"
              />
          </div>
        <div class= "footer">
          <br>
            Genshin Card Generator is not affiliated with or endorsed by miHoYo.  |
            <router-link :to="`contact`"><a>Contact</a></router-link>
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
  font-size: 15px;
  color: rgb(36, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  position: absolute;
  margin: -200px -5px;
}
.social {
  position: bottom;
  align-items: center;
  position: absolute;
}

.mobile-button {
  background-color: #464545;
  color: white;
  padding: 10px 50px;
  text-align: center;
  font-size: 25px;
  border-radius: 4px;
  font-family: SuezOne-Regular; 
  margin: 0px 10px;
}
a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}

</style>