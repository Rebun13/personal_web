<template>
  <div class="home">
    <div class="lg:w-3/5 mx-auto mt-16 md:w-full">
      <div class="grid grid-cols-4 gap-8 items-center">
        <RouterLink
          v-for="section in sections"
          :key="section.id"
          :to="section.slug"
        >
          <h1>{{ section.name }}</h1>
          <div class="bg-gray-200 p-4 rounded-lg shadow-lg h-30">
            <img :src="`/images/${section.image}`" :alt="section.name" />
          </div>
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
