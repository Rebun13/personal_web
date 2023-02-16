<template>
  <div class="home mx-auto mt-16 lg:w-3/5">
    <div
      id="introduction"
      class="p-8 mb-8 items-center bg-gray-700 lg:rounded-lg shadow-lg"
    >
      <h1 class="text-lime-400 text-4xl pb-4">
        Welcome to my personal website
      </h1>
      <p class="text-gray-200">
        Hi, I am Rubén and this is my website. I am a Computer Engineer from
        Spain, and currently am living in Ireland. Here you can find all the
        relevant information about me.<br />
        <span
          class="bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-600 inline-block text-transparent bg-clip-text"
          >I am using this website to experiment and learn to code with Vue.js
          and Tailwind CSS.</span
        >
      </p>
    </div>
    <div class="flex flex-row space-x-4 items-center">
      <RouterLink
        v-for="section in sections"
        :key="section.id"
        :to="section.slug"
        class="basis-1/4"
      >
        <div
          class="flex h-14 items-center justify-center transition bg-gray-700 hover:bg-cyan-400 text-gray-200 hover:text-gray-700 font-bold rounded-lg shadow-lg"
        >
          {{ section.name }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

//const sections = sourceData.sections;
export default {
  data() {
    return {
      sections: sourceData.sections,
    };
  },
};
</script>
