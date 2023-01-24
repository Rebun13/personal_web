<script setup lang="ts">
// const props = defineProps(['sel'])
</script>

<template>
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-700 text-gray-200 shadow-lg">
        <div class="w-full flex flex-wrap items-center justify-between px-6 h-7">
            <ul>
                <li ref="navMe" class="display: inline-block px-4 hover:text-teal-400 text-lime-400"><a href="index.html">About
                        me</a></li>
                <li ref="navXp" class="display: inline-block px-4 hover:text-teal-400"><a href="experience.html">My working
                        experience</a></li>
                <li ref="navSt" class="display: inline-block px-4 hover:text-teal-400"><a href="studies.html">My studies</a></li>
                <li ref="navPr" class="display: inline-block px-4 hover:text-teal-400"><a href="projects.html">My projects</a></li>
            </ul>
            <img class="h-full" src="img/logo1 - white.png" alt="logo" />
        </div>
    </nav>
</template>