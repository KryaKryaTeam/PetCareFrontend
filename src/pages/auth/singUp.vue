<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="w-full">Sing up</h1>
      <form @submit.prevent="postForm()" class="space-y-2">
        <input v-model="form.username" class="input w-full" />
        <input v-model="form.email" class="input w-full" />
        <input v-model="form.password" class="input w-full" />
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
    email: string,
    password: string,
  }
  // data
  const form: Form = reactive({
    username: '',
    email: '',
    password: '',
  })

  // functions
  async function postForm() {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/register/self`, {
      method: "POST",
      body: JSON.stringify(form)
    })
  }
</script>
