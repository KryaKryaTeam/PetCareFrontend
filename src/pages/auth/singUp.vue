<script lang="ts" setup>
import useUserStore from '@/entities/User/userStore'
import GoogleButtonAuth from '@/widget/googleButtonAuth.vue'
import Button from '@/shared/ui/button.vue'
import CheckMask from '@/widget/ui/forms/checkMask.vue'
import Input from '@/widget/ui/forms/input.vue'
import { ref } from 'vue'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'

// Access Pinia store
const user = useUserStore()
const router = useRouter()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z
  .object({
    username: z.string().min(3, 'Username is too short').max(150, 'Username is too long'),
    email: z.string().email('Invalid email'),
    password: z
      .string()
      .min(6, 'Password too short')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/,
        'Password must have one lowercase letter, oner uppercase letter, one secial symbol ( _ - . $ % ! @ ) and one digit',
      ),
    repeat: z.string(),
    checked: z.boolean(),
  })
  .refine((data) => data.password === data.repeat, {
    message: 'Passwords do not match',
    path: ['repeat'],
  })

// Define form type
type Form = z.infer<typeof formSchema>

const error = ref('')
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
  return result.success && result.data.checked
})
const errors = computed(() => {
  const result = formSchema.safeParse(form)
  let errorsF = []
  let errorsB = []
  result.error?.issues.forEach((el1) =>
    el1.path.forEach((el) => {
      if (!errorsF.includes(el)) errorsF.push(el)
      errorsB.push({ name: el, message: el1.message })
    }),
  )
  return { names: errorsF, messages: errorsB }
})

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
    const data = await response.json()
    if (!response.ok) {
      if (response.status == 400) {
        error.value = data?.message
      }
      throw new Error('Network response was not ok')
    }
    await user.newValueAccessToken(data.authorization)
    router.push('/app/board')
  } catch (error) {
    console.error('Sign-up error:', error)
  }
}
</script>

<template>
  <div class="centred">
    <div class="form">
      <h1 class="title">Creating an account</h1>

      <form @submit.prevent="postForm" class="formComp">
        <Input
          v-model="form.username"
          placeholder="Username"
          :is-error="errors.names.includes('username')"
          :error-message="errors.messages.find((a) => a.name == 'username')?.message"
          name="username"
          autocomplete="off"
          required
        />
        <Input
          v-model="form.email"
          placeholder="Email"
          :is-error="errors.names.includes('email')"
          :error-message="errors.messages.find((a) => a.name == 'email')?.message"
          name="email"
          autocomplete="off"
          required
        />
        <Input
          v-model="form.password"
          type="password"
          :is-error="errors.names.includes('password')"
          :error-message="errors.messages.find((a) => a.name == 'password')?.message"
          placeholder="Password"
          name="password"
          required
        />
        <Input
          v-model="form.repeat"
          type="password"
          :is-error="errors.names.includes('repeat')"
          :error-message="errors.messages.find((a) => a.name == 'repeat')?.message"
          placeholder="Repeat please"
          name="repeat"
          required
        />

        <label class="checkBox">
          <input type="checkbox" class="hidden" v-model="form.checked" />
          <CheckMask :checked="form.checked" />
          <span class="disc">
            I agree to the
            <router-link to="/listing/terms">
              <span class="disc-bold">Terms of Use</span>
            </router-link>
            and
            <router-link to="/listing/privacy">
              <span class="disc-bold">Privacy Policy</span>
            </router-link>
          </span>
        </label>

        <Button :disabled="!isValid" id="subbtn" type="submit" :full-width="true">Sign up</Button>
        <GoogleButtonAuth
          @error="
            (message) => {
              error = message
            }
          "
        />

        <p class="error" v-if="error.length > 0">{{ error }}</p>

        <p class="disc">
          Have an account?
          <router-link to="/app/auth/singin">
            <span class="disc-bold">Sign in</span>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.centred {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
  .form {
    padding: 125px 145px;
    width: 35%;
    height: max-content;
    background-color: #f9f5ec;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    .title {
      width: 100%;
      text-align: center;
      color: #1f1f1f;
      font-family: 'Inter';
      font-weight: 700;
      font-size: 36px;
    }
    .formComp {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      .checkBox {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 25px;
        .hidden {
          display: none;
        }
        .disc {
          width: max-content;
          color: #1f1f1f;
          font-weight: 300;
          font-family: 'Inter';
          font-size: 14px;
          .disc-bold {
            font-weight: 500;
            text-decoration: underline;
            color: #1f1f1f;
          }
        }
      }
      .disc {
        width: 100%;
        text-align: center;
        color: #1f1f1f;
        font-weight: 300;
        font-family: 'Inter';
        font-size: 14px;
        .disc-bold {
          font-weight: 500;
          text-decoration: underline;
          color: #1f1f1f;
        }
      }
      .error {
        color: #d31c1c;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        padding: 20px;
        border-radius: 10px;
        border: 2px #d31c1c solid;
        width: calc(100% - 40px);
        text-align: center;
      }
    }
  }
}
</style>
