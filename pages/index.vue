<script setup lang="ts">
const firstLesson = await useFirstLesson()
</script>

<template>
  <NuxtLink class="font-medium underline" :href="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>
