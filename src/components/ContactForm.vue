<template>
    <body>
    <div class='centered'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdDb9olLHO4_9V3FF1iiZAO8Mxv1jNGAuAsis0N-me-311jpg/viewform?embedded=true" 
        width="640" 
        height="900" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">Loading…</iframe>
    </div>
    </body>
</template>

<style scoped>
body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.centered {
    
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 600px;
  background-color: #F9F6F2;
  border: 36px solid orange;
  border-radius: 10px;
  margin: 30px;
  padding: 10px;

  border-image:
      url("../assets/Form-bg.png")
      70 / 50px    
      round;                  
}
 a {
    text-decoration: none;
    color: rgb(145, 136, 136);
    cursor: pointer;
}
</style>