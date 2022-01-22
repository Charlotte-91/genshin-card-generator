<template>
        <ul>
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
            </div>
        </ul>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

 ul {
    margin: -10px -8px;
    overflow: hidden;
    background-color: rgb(28, 34, 58);
    filter: drop-shadow(0px 2px 5px #000000);
    height: 80px;
}
* {
  box-sizing: border-box;
}

.column {
    width: auto;
    padding: 10px;
    align-self: center;
    background: transparent;
    color: rgb(28, 34, 58);
    font-family: Montserrat, sans-serif; 
    font-size: 14px;
}

.row {
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    display: center;
    color: rgb(150, 150, 150);
    transition: 0.3s;
    text-decoration: none;
}
a:hover {
    color: #fff;
    text-shadow: 0 0 20px #38a6c2; 
}
</style>
