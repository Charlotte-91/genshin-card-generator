<template>
    <div class='buttons-and-footer'>
        <div class= "social">
            <button @click="$router.push({name: 'Home'})">Back</button>
              <share-it 
                :shareConfig="share" 
                text="Checkout Genshin Card Generator!"
                url="https://genshin-impact-card-generator.herokuapp.com/"
              />
          </div>
        <div class= "footer">
          <br>
            Genshin Card Generator is not affiliated with or endorsed by miHoYo. |
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