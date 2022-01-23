<template>
        <!-- <div class="topnav" id="myTopnav">
            <div class="row">
                <div class="column">
                    <router-link to="/"><img src="../../../src/assets/genshin-logo-small.png"></router-link>
                </div>
                <div class="column">
                    <router-link to="/basic-form">Basic Card</router-link>
                </div>
                <div class="column">
                    <router-link to="/character-build-form">Multiplayer Card</router-link>
                </div>
                <div class="column">
                    <router-link to="/multiplayer-form">Character Build Card</router-link>
                </div>
                <div class="column"> 
                    <router-link to="/team-comp-form">Team Composition Card</router-link>
                </div>
                <a href="javascript:void(0);" class="icon" v-on:click=myFunction()>
                    <i class="fa fa-bars"></i>
                 </a>
            </div>
        </div> -->
        <div class="topnav" id="myTopnav">
          <div class="container">
  <a href="#home" class="active"><router-link to="/"><img src="../../../src/assets/genshin-logo-small.png"></router-link></a>
  <router-link to="/basic-form">Basic Card</router-link>
  <router-link to="/character-build-form">Multiplayer Card</router-link>
  <router-link to="/multiplayer-form">Character Build Card</router-link>
  <router-link to="/team-comp-form">Team Composition Card</router-link>
  </div>
  <a href="javascript:void(0);" class="icon" v-on:click=myFunction()>
  <img src="../../../src/assets/burger.png">
  </a>
</div>

</template>

<script>
export default {
  methods: {
            myFunction: function () {
                  var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
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

.topnav a {
  
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
  display: center;
  color: rgb(150, 150, 150);
  transition: 0.3s;
  text-decoration: none;
  font-family: Montserrat, sans-serif; 
  
}

.topnav a:hover {
  color: #fff;
    text-shadow: 0 0 20px #38a6c2; 
}

.topnav a.active {
  color: #fff;
    text-shadow: 0 0 20px #38a6c2; 
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  i {color: #fff;}
  .topnav a.icon {
    color: white;
    float: right;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  i {color: #fff;}
  .topnav.responsive .icon {
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
  }
  .topnav.responsive a {
    float: none;
    display: block;
  }
}
.fa.icon-white {color: white;}
</style>
