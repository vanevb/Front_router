<template>
  <div id="app">
    <div class="header">
      <!--Titulo Aplicativo-->
      <div class="OCR">
        <img src="./assets/Lib_logo.png" alt="1" class="center">
      </div>
  </div>
    <p class = "button_panel">
            <a href="Login"><img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="ADD_BOOk" style="width:42px;height:42px;"></a>|
            <a href="add"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="ADD_BOOk" style="width:42px;height:42px;"></a>|
            <a href="cart"><img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="ADD_BOOk" style="width:42px;height:42px;"></a>|
            <a href="index"><img src="https://cdn-icons-png.flaticon.com/512/864/864685.png" alt="ADD_BOOk" style="width:42px;height:42px;"></a>|
            
    </p>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.header{
  font: 1em OCR A Extended;
  margin-top: -60px;
  margin-left: -30px;
  padding: 0;
  width: 102.5%;
  min-height: 150px;
  background-color: orange ;
  color: #f5c313 ;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  align-content: center;
  text-align: center;
  align-self: center;
}
.button_panel{
  margin-right: 0px;
  margin-top: 25px;
  margin-left: auto;
  align-items:right;
}
</style>
