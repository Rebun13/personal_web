<script>
import experienceData from "@/studies.json";

//const studies = experienceData.studies;
export default {
  data() {
    return {
      studies: experienceData.studies,
    };
  },
};
</script>

<template>
  <div class="lg:w-3/5 mx-auto mt-16 md:w-full">
    <div id="default-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden bg-gray-700 rounded-lg md:h-96">
        <!-- Item 1 -->
        <div
          v-for="(study, index) in studies"
          :key="study.id"
          class="py-12 px-24 hidden duration-700 ease-in-out"
          :data-carousel-item="!index ? 'active' : ''"
        >
          <h2 class="text-2xl font-semibold text-lime-400 md:text-3xl">
            {{ study.title }}
          </h2>
          <h4 class="text-lime-700 text-sm uppercase">
            {{ study.subtitle }}
          </h4>
          <div class="flex gap-6">
            <div class="basis-2/3 lg:basis-5/6">
              <p
                v-for="(paragraph, index) in study.description"
                :key="index"
                class="text-gray-200 mt-2 mb-4 text-justify"
              >
                {{ paragraph }}
              </p>
            </div>
            <div class="flex items-center basis-1/3 md:basis-1/6 justify-end">
              <img :src="study.picture" class="bg-gray-200 rounded-lg p-2" />
            </div>
          </div>
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          v-for="study in studies"
          :key="study.id"
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          :aria-label="'Slide ' + study.id"
          :data-carousel-slide-to="parseInt(study.id) - 1"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>
