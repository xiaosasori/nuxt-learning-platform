<script setup lang="ts">
const course = await useCourse()
const { query } = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()
watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    })
  }
})

async function login() {
  const redirectTo = `${window.location.origin}${query.redirectTo}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  })
  if (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="prose h-9 w-full max-w-2xl">
    <h1>Log in to {{ course.title }}</h1>
    <button
      class="rounded bg-blue-500 px-4 py-2 font-bold text-white"
      @click="login"
    >
      Log in with Github
    </button>
  </div>
</template>
