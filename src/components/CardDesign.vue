<template>
  <div className="App">
    <img :src="require('../assets/card-bgs/' + this.$route.params.cardChara + '.png')" />
    <img :src="require('../assets/teams/' + this.$route.params.team1 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team2 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team3 + '.png')" height='200px'/>
    <img :src="require('../assets/teams/' + this.$route.params.team4 + '.png')" height='200px'/>
    
    <button @click="$router.push({name: 'Home'})">Back</button>


    <div class= "footer">
      Genshin Card Generator is not affiliated with or endorsed by miHoYo.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

