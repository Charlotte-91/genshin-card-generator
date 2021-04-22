<template>
    <div class="container">
        <div class="form">
            
    <FormulateForm
        v-model="values"
        :schema="schema"
    />
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      values: {},
      schema: [
        {
            "component": "CSM",
            "children": "Multiplayer Card Generator"
        },
        {
            "label": "Player Name",
            "name": "name",
            "validation": "required"
        },
        {
            "label": "Card Design",
            "name": "card",
            "validation": "required"
        
        },
            {
            
            "type": "select",
            "name": "Team1",
                "label": "Choose Team",
                "placeholder": "Select one",
                "options": {
                "twitter": "Twitter",
                "facebook": "Facebook",
                "instagram": "Instagram",
                "linkedin": "LinkedIn"
                }
        },
        {
            "type": "submit"
        }
      ]
    }
  }
}
</script>
<style scoped >
@font-face { font-family: SuezOne-Regular; 
  src: url('../assets/SuezOne-Regular.ttf'); } 
  
body{
  background-color:#464545;
  font-family: SuezOne-Regular; 
  font-size: 25px;
}
.container {
  max-width: 100%;
  margin: 0px auto;
}
.form {
  position: relative;
  top: 70%;
  left: 50%;
  transform: translate(-53%, 0%);
  width: 45%;
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
</style>