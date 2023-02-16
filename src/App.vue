<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
import { ref } from "vue";

let sideBarOpen = ref(false);

function toggleSideBar() {
  sideBarOpen.value = !sideBarOpen.value;
  /*
  if (sideBarOpen.value === true) {
    document.getElementById("sideBar").style.width = "250px";
  } else {
    document.getElementById("sideBar").style.width = "0px";
  }
  */
}
</script>

<template>
  <div class="bg-bg-pattern min-h-screen">
    <!-- Side bar -->
    <div
      v-if="sideBarOpen"
      id="sideBar"
      class="sideBar h-full w-64 fixed z-1 top-0 left-0 overflow-x-hidden pt-4 md:pt-16 transition bg-gray-700 text-gray-200 shadow-lg"
    >
      <a
        @click="toggleSideBar"
        class="absolute top-0 right-6 text-lg md:text-4xl ml-12"
        >&times;</a
      >
      <RouterLink
        @click="toggleSideBar"
        class="block p-2 pl-8 transition hover:text-teal-400"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        @click="toggleSideBar"
        class="block px-4 hover:text-teal-400"
        to="/aboutMe"
        >About me</RouterLink
      >
      <RouterLink
        @click="toggleSideBar"
        class="block px-4 hover:text-teal-400"
        to="/experience"
        >Experience</RouterLink
      >
      <RouterLink
        @click="toggleSideBar"
        class="block px-4 hover:text-teal-400"
        to="/studies"
        >Studies</RouterLink
      >
      <RouterLink
        @click="toggleSideBar"
        class="block px-4 hover:text-teal-400"
        to="/projects"
        >Projects</RouterLink
      >
    </div>
    <div
      v-else
      id="sideBar"
      class="sideBar h-full w-0 fixed z-1 top-0 left-0 overflow-x-hidden pt-4 md:pt-16 transition bg-gray-700 text-gray-200 shadow-lg"
    ></div>
    <!-- Nav bar-->
    <div
      id="nav"
      class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-700 text-gray-200 shadow-lg"
    >
      <div class="md:hidden">
        <p @click="toggleSideBar">🔻</p>
      </div>
      <div
        class="hidden md:flex w-full flex-wrap items-center justify-between px-6 h-7"
      >
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
