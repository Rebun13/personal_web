<template>
  <div class="home">
    <h1>Welcome to my website</h1>
    <div class="lg:w-3/5 mx-auto mt-16 md:w-full">
      <div class="grid grid-cols-4 gap-8 items-center">
        <RouterLink
          v-for="section in sections"
          :key="section.id"
          :to="section.slug"
        >
          <h1>{{ section.name }}</h1>
          <img :src="`/images/${section.image}`" :alt="section.name" />
        </RouterLink>
      </div>
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
