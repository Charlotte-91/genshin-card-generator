  <img :src="require('../assets/teams/' + testing(this.$route.params.team4) + '.png')" height='200px'/>
    {{ testing() }}
    <img :src="testing()"/>
  


// console.log(testing)
// import pic from '../assets/card-bgs/Tartaglia-cd.png';
// const fs = require('fs')
// const { createCanvas, loadImage } = require('canvas')
// const width = 1210
// const height = 700

// const canvas = createCanvas(width, height)
// const context = canvas.getContext('2d')

// const text = 'Genshin card'

// context.font = 'bold 70pt Menlo'
// context.textAlign = 'center'
// context.fillstyle = '#000000'
// context.fillText(text, 600, 170)


// loadImage(pic).then(image => {
//   context.drawImage(image, 340, 515, 70, 70)
//   const buffer = canvas.toBuffer('image/png')
//   fs.writeFileSync('./test.png', buffer)
// })

// loadImage(pic).then((image) => {
//           context.drawImage(image, 0, 0, 1200, 675)
//           var myImage = canvas.createPNGStream
//           console.log('Image uploaded')
//           return myImage
// });

// const { createCanvas } = require('canvas')
// const canvas = createCanvas(150, 150)
// const ctx = canvas.getContext('2d')
// const fs = require('fs');

// ctx.fillRect(0,0,150,150);   // Draw a rectangle with default settings
// ctx.save();                  // Save the default state

// ctx.fillStyle = '#09F'       // Make changes to the settings
// ctx.fillRect(15,15,120,120); // Draw a rectangle with new settings

// ctx.save();                  // Save the current state
// ctx.fillStyle = '#FFF'       // Make changes to the settings
// ctx.globalAlpha = 0.5;    
// ctx.fillRect(30,30,90,90);   // Draw a rectangle with new settings

// ctx.restore();               // Restore previous state
// ctx.fillRect(45,45,60,60);   // Draw a rectangle with restored settings

// ctx.restore();               // Restore original state
// ctx.fillRect(60,60,30,30);

// module.exports = {
//   data: function () {
//     return{
//       image: this.$route.params.cardChara
//     }
//   }
// }


// import pic from '../assets/card-bgs/Tartaglia-cd.png'
// //const fs = require('fs')
// const { createCanvas, loadImage } = require('canvas')
// const width = 1210
// const height = 700

// const canvas =createCanvas(width, height)
// const context = canvas.getContext('2d')

// const text = 'Genshin card'

// context.font = 'bold 70pt Menlo'
// context.textAlign = 'center'
// context.fillstyle = '#000000'
// context.fillText(text, 600, 170)

// function myCanvas() {
// loadImage(pic).then((image) => {
//   context.drawImage(image, 0, 0, 1200, 675)
//   var myImage = canvas.createPNGStream
//   console.log('Image uploaded')
//   return myImage
  
// })

// }
//   // context.drawImage('../assets/card-bgs/Tartaglia-cd.png', 0, 0 , 1200, 675)
//   // const buffer = canvas.toBuffer('image/png')
//   // fs.writeFileSync('./test.png', buffer)


//   export default {
//   name: 'CardRender',
//   components: myImage
    
//   }



