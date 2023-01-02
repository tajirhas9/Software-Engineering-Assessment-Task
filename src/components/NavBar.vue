<template>
	<main>
		<nav class = "navbar">
      <ul>
			<router-link to="/login">Login</router-link>
			<a href ="#">|</a>
      <router-link to="/signup">SignUp</router-link>
      </ul>
    	</nav>
	</main>
</template>

<script setup lang="ts">
import router from 'vue-router'

</script>

<style scoped>
	.navbar {
    	list-style-type:none;
        margin: 0px;
        padding: 0;
        width: auto;
        font-size: x-large;
   } 
  
  nav ul {
    list-style:none;
    display: flex;
    justify-content: center;
    width: auto;
  }
</style>