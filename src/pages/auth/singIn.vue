<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">Sign up</h1>
      <form @submit.prevent="postForm" class="space-y-2">
        <input v-model="form.username" placeholder="Username" class="input w-full" />
        <input v-model="form.password" type="password" placeholder="Password" class="input w-full" />
        <button type="submit" class="btn bg-green-400 w-full rounded hover:bg-green-600 mt-2">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
  // interfaces
  interface Form{
    username: string,
    password: string,
  }
  // data
  const form: Form = reactive({
    username: '',
    password: '',
  })

  // functions
  async function postForm() {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login/self`, {
      method: "POST",
      body: JSON.stringify(form),
       headers: {
        'Content-Type': 'application/json',
      },
    })
  }
</script>
