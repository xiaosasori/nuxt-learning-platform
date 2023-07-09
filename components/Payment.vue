<script setup>
defineEmits(['close'])
const course = await useCourse()
</script>

<template>
  <Modal @close="$emit('close')">
    <div class="w-full max-w-2xl rounded-xl bg-slate-200 p-8">
      <form>
        <h2 class="text-center text-xl font-bold">Buying {{ course.title }}</h2>
        <div class="width mt-8 rounded bg-white px-8 py-6 text-base shadow-md">
          <div class="mb-8 flex w-full items-center justify-between">
            <label class="font-bold"> Email </label>
            <input
              v-model="email"
              class="input ml-6 w-full text-left focus:outline-none"
              type="email"
              autocomplete="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <button
          class="focus:shadow-outline mt-4 flex h-12 w-full cursor-pointer items-center justify-center rounded bg-yellow-300 px-16 font-sans text-lg font-bold text-black transition hover:bg-yellow-200 focus:outline-none"
        >
          <div>Pay $97</div>
        </button>
      </form>
    </div>
  </Modal>
</template>
