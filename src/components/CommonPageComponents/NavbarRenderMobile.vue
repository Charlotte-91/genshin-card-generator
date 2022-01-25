<template>
  <div class="topnav" id="myTopnav">
    <div class="container">
      <a href="#home" class="active"><router-link to="/"><img src="../../../src/assets/logolarge.png"></router-link></a>
        <div id="myLinks">
          <router-link to="/basic-form">Basic Card</router-link>
          <router-link to="/multiplayer-form">Multiplayer Card</router-link>
          <router-link to="/character-build-form">Character Build Card</router-link>
          <router-link to="/team-comp-form">Team Composition Card</router-link>
        </div>
    </div>
    <a href="javascript:void(0);" class="icon" v-on:click=myFunction()>
      <img src="../../../src/assets/burgerlarge.png">
    </a>
</div>
</template>

<script>
export default {
  methods: {
            myFunction: function () {
                  var x = document.getElementById("myLinks");
                    if (x.style.display === "block") {
                      x.style.display = "none";
                    } else {
                      x.style.display = "block";
                    }
        }
    }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

body {
  margin: 0;
  
}
.container {
  align-self: center;
}

.topnav {
  overflow: hidden;
    margin: -10px -8px;
    background-color: rgb(28, 34, 58);
    filter: drop-shadow(0px 2px 5px #000000);
   align-content: center;
   
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: rgb(150, 150, 150);
  padding: 20px 16px;
  text-decoration: none;
  font-size: 60px;
  display: block;
  font-family: Montserrat, sans-serif; 
}

.topnav a.icon {
  
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.active {

  color: white;
}

.topnav a:hover {
  color: #fff;
    text-shadow: 0 0 20px #38a6c2; 
}

.topnav a.active {
  color: #fff;
    text-shadow: 0 0 20px #38a6c2; 
}
</style>
