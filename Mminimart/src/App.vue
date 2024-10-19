<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/navBar.jsx'
import Tabbar from '../src/components/tabbar.jsx'
import Banner from '../src/components/banner.jsx'
import product from '../src/components/product.jsx'

</script>

<template>
  <div class="container">
    
  
    <header>
      <NavBar />
      <Tabbar />
      <Banner />
      <product />
   </header>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  width: 600px;  
  height: 1024px;
  margin: 0;
  padding: 0;
  overflow: auto; 
  border: 1px solid #ccc; 
};

.font-text {
  font-family: 'Prompt', sans-serif;
}

</style>
