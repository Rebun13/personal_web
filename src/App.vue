<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <div class="bg-bg-pattern min-h-screen">
    <div
      id="nav"
      class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-700 text-gray-200 shadow-lg"
    >
      <div class="w-full flex flex-wrap items-center justify-between px-6 h-7">
        <RouterLink
          class="display: inline-block px-4 hover:text-teal-400"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="display: inline-block px-4 hover:text-teal-400"
          to="/aboutMe"
          >About me</RouterLink
        >
        <RouterLink
          class="display: inline-block px-4 hover:text-teal-400"
          to="/experience"
          >Experience</RouterLink
        >
        <RouterLink
          class="display: inline-block px-4 hover:text-teal-400"
          to="/studies"
          >Studies</RouterLink
        >
        <RouterLink
          class="display: inline-block px-4 hover:text-teal-400"
          to="/projects"
          >Projects</RouterLink
        >
        <img class="h-full" src="/images/logo1-white.png" alt="logo" />
      </div>
    </div>
    <div class="container">
      <RouterView></RouterView>
    </div>
    <div id="footer" class="object-bottom">
      <FooterBar />
    </div>
  </div>
</template>
