<template>
        <div class="footer">
            <div class="row">
                <div class="column">
                    <p>Genshin Card Generator is not affiliated with or endorsed by miHoYo.</p>
                    <p>© All rights Reserved by miHoYo. Other properies belong to their respective owners.</p>
                </div>
                <div class="column2">
                    <p><router-link to="/contact">Contact</router-link></p>
                    <p><router-link to="/faq">FAQ</router-link></p>
                    <a href="https://ko-fi.com/charnyam"><img src="../../../src/assets/Donate.png"></a>
                </div>
            </div>
        </div>
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.footer {
    position: relative;
    overflow: hidden;
    margin: -10px -8.3px;
    background-color: rgb(28, 34, 58);
    filter: drop-shadow(0px 2px 5px #000000);
    color: white;
    font-family: Montserrat, sans-serif; 
    text-align: center;
    height: 300px;
}
* {
  box-sizing: border-box;
}

.column {
    float: left;
    width: 50%;
    padding: 10px;
    align-self: center;
    background: transparent;
    color: white;
    font-family: Montserrat, sans-serif; 
    font-size: 30px;
}
.column2 {
    float: left;
    width: 30%;
    padding: 10px;
    align-self: left;
    background: transparent;
    color: white;
    font-family: Montserrat, sans-serif; 
    font-size: 30px;
}

.row {
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

a {
    display: center;
    color: rgb(255, 255, 255);
    transition: 0.3s;
    text-decoration: none;
}
a:hover {
    color: #fff;
    text-shadow: 0 0 20px #38a6c2; 
}

@media screen and (max-width: 1000px) {
    .column {
        width: 55%;
        font-size: 70%;
    }
    .column2 {
        width: 15%;
        font-size: 70%;
    }
    img {
    max-width: 100%;  
    height: auto;  
}
}
    @media screen and (max-width: 500px) {
    .column {
       width: 100%;
        font-size: 60%;
    }
    .column2 {
        width: 30%;
        font-size: 70%;
    }
    img {
    max-width: 100%;  
    height: auto;  
}
}

</style>
