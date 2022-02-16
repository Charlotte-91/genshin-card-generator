<template>
<body>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <div class='centered'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdDb9olLHO4_9V3FF1iiZAO8Mxv1jNGAuAsis0N-me-311jpg/viewform?embedded=true" 
            width="100%" 
            height="1110" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…</iframe>
        </div>
</body>
</template>

<style scoped>
body {
  font-size: 25px;
  padding: 20px;
  font-family: roboto-regular; 
}

.centered {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;


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