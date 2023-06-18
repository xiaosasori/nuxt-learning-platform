<script setup>
const { chapters } = useCourse()
</script>

<template>
  <div
    class="flex h-full min-h-screen w-full flex-col items-center bg-gray-100 p-12"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-grow flex-row justify-center">
      <div
        class="prose mr-4 flex min-w-[20ch] max-w-[30ch] flex-col rounded-md bg-white p-8"
      >
        <h3>Chapters</h3>
        <div
          v-for="chapter in chapters"
          :key="chapter.slug"
          class="mb-4 flex flex-col space-y-1"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="prose-sm -mx-4 flex flex-row space-x-1 px-4 py-1 font-normal no-underline"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose w-[65ch] rounded-md bg-white p-12">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
