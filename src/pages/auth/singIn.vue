<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">Sign up</h1>
      <form @submit.prevent="postForm" class="space-y-2">
        <input v-model="form.username" placeholder="Username" class="input w-full" />
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          class="input w-full"
        />
        <button type="submit" class="btn bg-green-400 w-full rounded hover:bg-green-600 mt-2">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useUserStore from '@/entities/User/userStore'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import * as z from 'zod'

const schema = z.object({
  username: z.string().min(5),
  password: z.string().min(6),
})
// interfaces
interface Form {
  username: string
  password: string
}
// data
const form: Form = reactive({
  username: '',
  password: '',
})
const user = useUserStore()
const router = useRouter()
// functions
async function postForm() {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login/self`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    if (response.status == 401) {
      await user.refresh()
    }
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    await user.newValueAccessToken(data.authorization)
    router.push('/app/board')
  } catch (error) {
    console.log(error)
  }
}
</script>
