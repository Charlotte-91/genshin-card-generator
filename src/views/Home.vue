<template>
  <div className="Home">
      <header className="App-header">
        <img src="../assets/genshin-logo.png" height='260px'/>
      </header>
      <form-component/>
      <div class= "footer">
      Genshin Card Generator is not affiliated with or endorsed by miHoYo.
    </div>
  </div>
</template>

<script>

import FormComponent from "../components/FormComponent.vue";

export default {
  name: 'Home',
  components: {
    FormComponent
  }
}
</script>

<style >
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 25px;
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
  padding: 10px 120px;
  text-align: center;
  font-size: 25px;
  margin: 30px 100px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 

}
app {
  height:0%
}
* {
  box-sizing: border-box;
}
input[type=text], select, textarea {
  width: 60%;
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
  text-align: right;
  font-family: SuezOne-Regular; 
  margin-bottom: 2px;
}
.col-75 {
  float: right;
  width: 60%;
  margin-bottom: 2px;
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