<template>
    <div id="tabs" class="container">
  
    <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Character</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Weapon</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Artifact</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
            Content for tab one
        </div>
        <div v-if="activetab === 2" class="tabcontent">
            Content for tab two
        </div>
        <div v-if="activetab === 3" class="tabcontent">
            Content for tab three
        </div>
    </div>
</div>
</template>
<script>

export default {
        data () { 
            return {
                activetab: 1
            }
    }
}
</script>
<style scoped>
.form-box {
  border-radius: 25px;
  background: #ffffff;
  padding: 20px;
  width: 60%;
  height: 150px;
  align-self: center;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {  
    max-width: 620px; 
    min-width: 420px;
    margin: 40px auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #7F8FA2;
}

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px; 
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 67px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #EFF1F4;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #D3BC8E;
    color: #ffffff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 10px;
}
</style>
