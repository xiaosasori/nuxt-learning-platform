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
        class="prose mr-4 flex min-w-[20ch] flex-col rounded-md bg-white p-8"
      >
        <h3>Chapters</h3>
        <!-- All the lessons for the course listed here -->
      </div>

      <div class="prose w-[65ch] rounded-md bg-white p-12">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
