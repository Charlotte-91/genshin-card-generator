<template>
  <div class="cardPage">
    <div class='body'>
      <div class="centered">
        <div class = "savetext">
          Please right-click  on image and select "Save Image As" to save to your device
        </div>
        <CardGenerator/>
        
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
            Genshin Card Generator is not affiliated with or endorsed by miHoYo.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardGenerator from '@/components/CardGenerator.vue'

export default {
  name: 'CardPage',
  components: {
    CardGenerator,
  },
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
  
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 30px;
}
.header {
  top: 0;
  padding: 0px;
  font-size: 40px;
  height: 280px;
  text-align: center;
}
.savetext {
  font-size: 15px;
  padding: 20px;
  font-family: SuezOne-Regular; 
  color: grey;
  top: 20px;
}
.body {
  font-size: 25px;
  padding: 20px;
  font-family: SuezOne-Regular; 
}
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
app {
  height:0%
}
</style>