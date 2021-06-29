<template>
  <div className="SplashSelection">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <div class="row">
            <div class="column">
                <router-link to="/basic-form">
                    <div class="container">
                        <img src="../assets/SplashPage/Basic.png"/>
                        <div class="overlay">
                            <div class="text">Basic card</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/character-build-form">
                    <div class="container">
                        <img src="../assets/SplashPage/Characomp.png"/>
                        <div class="overlay">
                            <div class="text">Character Build card</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="column">
                <router-link to="/multiplayer-form">
                    <div class="container">
                        <img src="../assets/SplashPage/Multiplayer.png"/>
                        <div class="overlay">
                            <div class="text">Multiplayer card</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Team-Comp-Form">
                    <div class="container">
                        <img src="../assets/SplashPage/Teamcomp.png"/>
                        <div class="overlay">
                            <div class="text">Team Composition card</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
      </div>
</template>


<style scoped>

@font-face { font-family: roboto-regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: center;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 100%;
  max-width: 600px;
  padding: 0 15px;
}

.column img {
  margin-top: 15px;
  vertical-align: middle;
  width: 100%;
}


/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
  .text {
  font-size: 20px;
  }
}
.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #464545;
  font-family: roboto-regular; 
}

.container:hover .overlay {
  opacity: 0.8;
}

.text {
  color: white;
  font-size: 40px;
  position: absolute;
  font-family: roboto-regular;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
title {
    margin: 25px;
    height: 1000px;
}
</style>