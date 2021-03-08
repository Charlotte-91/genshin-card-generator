<template>
<div className="body">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <div class='centered'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdDb9olLHO4_9V3FF1iiZAO8Mxv1jNGAuAsis0N-me-311jpg/viewform?embedded=true" 
            width="100%" 
            height="1110" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…</iframe>
        </div>
         <button @click="$router.push({name: 'Home'})">Back</button>
</div>
</template>

<style scoped>
.body {
  background-color:#464545;
  font-size: 25px;
  padding: 20px;
  font-family: SuezOne-Regular; 
}
button {
  background-color: #464545;
  color: white;
  padding: 10px 120px;
  text-align: center;
  font-size: 25px;
  margin: 30px 0px;
  cursor: pointer;
  border-radius: 4px;
  font-family: SuezOne-Regular; 

}
.centered {
  position: static;
  top: 70%;
  transform: translate(0%, 0%);
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
  padding: 15px;
  font-size: 20px;

  border-image:
      url("../assets/Form-bg.png")
      70 / 50px    
      round;    
  @media screen and (min-width: 700px) {
    position: relative;
  top: 70%;
  transform: translate(-52%, 0%);
  width: 80%;
  
  }              
}
</style>