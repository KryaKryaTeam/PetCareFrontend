<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-[#F9F5EC] p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-xl font-bold mb-4 justify-center">Creating an account</h1>
      <form @submit.prevent="postForm" class="space-y-[30px]">
        <input v-model="form.username" placeholder="Username" class="input w-full rounded-[10px]" />
        <input v-model="form.email" placeholder="Email" class="input w-full rounded-[10px]" />
        <input v-model="form.password" type="password" placeholder="Password" class="input w-full rounded-[10px]" />
        <input v-model="form.repeat" type="password" placeholder="Repeat please" class="input w-full rounded-[10px]" />
        <input type="checkbox" id="checkbox" v-model="form.checked" class=" border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"/>
        <label for="checkbox" id="checkbox" class="pl-4 ">I agree to the <router-link to="/listing/term-of-use"><u class="font-semibold">Term of Use</u></router-link> and <router-link to="/listing/privacy-policy"><u class="font-semibold">Privacy Policy.</u></router-link></label>
        <button type="submit" id="subbtn" class=" text-[#FFFFFF] btn bg-[#29B4C2] w-full rounded hover:bg-[#209AA6] mt-2 rounded-[10px]" :disabled="!isValid">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useUserStore from '@/entities/User/userStore'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {z} from 'zod'

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const formSchema = z.object({
  username: z.string().min(3, 'Username is too short'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password too short'),
  repeat: z.string(),
  checked: z.literal(false),
}).refine((data) => data.password === data.repeat, {
  message: 'Passwords do not match',
  path: ['repeat'],
})
// Define form type
type Form = z.infer<typeof formSchema>
// Reactive form object
const form = reactive<Form>({
  username: '',
  email: '',
  password: '',
  repeat: '',
  checked: false,
})

const isValid = computed(() => {
  const result = formSchema.safeParse(form)
  return result.success
})

// Access Pinia store
const user = useUserStore()
const router = useRouter()
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
    await user.newValueAccessToken(data.authorization)
    router.push('/app/board')
  } catch (error) {
    console.error('Sign-up error:', error)
  }

}

</script>
<style lang="css" scoped>
  #subbtn:disabled{
  background-color: oklch(87.2% 0.01 258.338);
  color: #FFF;
  cursor: not-allowed;
  opacity: 0.7;
  }
  input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
}
</style>
