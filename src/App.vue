<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/aboutMe">About me</RouterLink>
    <RouterLink to="/experience">Experience</RouterLink>
    <RouterLink to="/studies">Studies</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
  </div>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>
