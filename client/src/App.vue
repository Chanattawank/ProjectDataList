<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 60px;
  margin-left: 20%;
  margin-right: 20%;
  padding: 50px 50px;
  background-color: #143802;
  border-radius: 20px;
}
a1{
  color: #ffffff;
}
body{background-image: url(https://medlineplus.gov/images/DrugReactions_share.jpg);
}
button {
  background-color: rgb(255, 85, 85);
  color: aquamarine;
  cursor: pointer;
  height: 35px;
  width: 200px;
  transition-duration: 0.2s;
}

button1 {
  color: rgb(246, 250, 246);
  font-size: 20px;
  cursor: pointer;
  transition-duration: 0.2s;
}

button:hover {
  background-color: #3dfff2;
  color: rgb(0, 0, 0);
}

button1:hover {
  color: rgb(52, 245, 255);
}

div1 {
  align-items: center;
  min-height: 100vh;
}

ul {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

ul li {
  position: relative;
  list-style: none;
}

ul li a {
  position: relative;
  font-size: 2em;
  text-decoration: none;
  line-height: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color:#fff;

}

ul li a::before {
  content: attr(data-text);
  position: absolute;
  color: var(--clr);
  width: 0;
  overflow: hidden;

  border-right: 0px solid var(--clr);
  -webkit-text-stroke: 1px var(--clr);
}

ul li a:hover::before {
  width: 100%;
}

div2 {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* background: linear-gradient(#30142b, #2772a1); */
}

page {
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
}

form1 {
  position: relative;
  z-index: 1;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
}

form input {
  width: 100%;
  padding: 10px 0;
  font-size: 13px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

form .register-form {
  display: none;
}

h1 {
  color: #f8f8f8;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  cursor: pointer
}

h1 span {
  transition: .5s linear
}

h1:hover span:nth-child(1) {
  margin-right: 5px
}

h1:hover span:nth-child(2) {
  margin-left: 30px
}

h1:hover span {
  color: #FFFF00;
  text-shadow: 0 0 10px #FF0000,
    0 0 20px #7FFF00,
    0 0 40px #FFFFE0;
}
button{
  --glow-color: rgb(0, 0, 0);
  --glow-spred-color:  rgb(0, 0, 0);
  --enhanced-glow-color:  rgb(0, 0, 0);
  --btn-color: rgb(251, 247, 13);
  /* border: solid var(--glow-color); */
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  transition: all 0.3s;
}
</style>