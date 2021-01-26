<template>
  <div class="cardPage">
    <div class='body'>
      <div class="centered">
        <CardGenerator/>
        <div class= "footer">
          <button @click="$router.push({name: 'Home'})">Back</button>
            <share-it 
                  :shareConfig="share" 
                  text="Check out Genshin Card Generator!"
                  url="https://genshin-impact-card-generator.herokuapp.com/"
                  :height="600"
                  :width="600"/>
          <br>
            Genshin Card Generator is not affiliated with or endorsed by miHoYo.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import CardGenerator from '@/components/CardGenerator.vue'
// import shareIt from 'vue-share-it';



export default {
  
  name: 'CardPage',
  components: {
    CardGenerator,
  },
  data() {
    return {
      share: {
        twitter: {
          size: "x3",
          label: 'Share',
          round: true
        },
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
.body {
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