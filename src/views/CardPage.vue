<template>
  <div class="cardPage">
    <div class='body'>
      <div class="centered">
        <CardGenerator/>
        <div class= "footer">
          <button @click="$router.push({name: 'Home'})">Back</button>
          <twitter-button
            class="share-button--circle"
            description="Checkout Genshin Impact card generator!" 
            url="https://genshin-impact-card-generator.herokuapp.com/" 
            data-hashtags="GenshinImpactCardGeneratdsdsdor" data-show-count="false"
          />
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
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";

export default {
  name: 'CardPage',
  components: {
    CardGenerator,
    TwitterButton
  }
  
}

</script>

<style >
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
* {
  box-sizing: border-box;
}
input[type=text], select, textarea {
  width: 75%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.container {
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
.col-25 {
  float: left;
  width: 40%;
  margin-top: 6px;
  text-align: right;
  font-family: SuezOne-Regular; 
}
.col-75 {
  float: right;
  width: 60%;
  margin-top: 6px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  padding: 2px;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}

</style>