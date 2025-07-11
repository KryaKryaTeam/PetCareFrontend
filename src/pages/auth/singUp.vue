<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">Sign up</h1>
      <form @submit.prevent="postForm" class="space-y-2">
        <input v-model="form.username" placeholder="Username" class="input w-full" />
        <input v-model="form.email" placeholder="Email" class="input w-full" />
        <input v-model="form.password" type="password" placeholder="Password" class="input w-full" />
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
// Define form type
interface Form {
  username: string
  email: string
  password: string
}

// Reactive form object
const form = reactive<Form>({
  username: '',
  email: '',
  password: '',
})

// Access Pinia store
const user = useUserStore()

// Handle form submission
async function postForm() {
  try {
    console.log('Submitting form:', JSON.stringify(form))

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/register/self`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    console.log('Server response:', data)
    user.newValueAccessToken(data.authorization)
    console.log('Stored accessToken:', user.accessToken)

  } catch (error) {
    console.error('Sign-up error:', error)
  }
}
</script>
