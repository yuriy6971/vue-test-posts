<template>
<div class="app" >
 <nav-bar />
 <router-view></router-view>
</div>
</template>

<script>

import NavBar from "./components/NavBar.vue"
export default {
 components : {NavBar}

}
</script>




<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}

.body {
  font-family: 'Nunito', sans-serif;
}

.app {
  width: 1250px;
  min-height: 100vh;
  background-color: #D3D3D3;
  margin: 0 auto;
  padding: 5px 10px 30px;

}


</style>
