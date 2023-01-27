<script>
import sourceData from '@/data.json'

const sections = sourceData.sections
</script>

<template>
    <div class="home">
        <h1>Welcome to my website</h1>
        <div class="links">
            <RouterLink v-for="section in sections" :key="section.id" :to="section.slug">
                <h1>{{ section.name }}</h1>
                <img :src="`/images/${section.image}`" :alt="section.name" />
            </RouterLink>
        </div>

    </div>
</template>