<script lang="ts" setup>
import useUserStore from '@/stores/userStore'
import GoogleButtonAuth from '@/widget/googleButtonAuth.vue'
import Button from '@/shared/ui/button.vue'
import Input from '@/shared/ui/input.vue'
import { computed, provide, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import * as z from 'zod'

const schema = z.object({
  username: z.string().min(3, 'Username is too short').max(150, 'Username is too long'),
  password: z
    .string()
    .min(6, 'Password is too short')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/,
      'Password must have one lowercase letter, oner uppercase letter, one secial symbol ( _ - . $ % ! @ ) and one digit',
    ),
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

const error = ref('')

const isValid = computed(() => {
  const result = schema.safeParse(form)
  return result.success
})
const errors = computed(() => {
  const result = schema.safeParse(form)
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

// functions
async function postForm() {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login/self`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    const data = await response.json()
    if (!response.ok) {
      if (response.status == 401) {
        error.value = data?.message
      }
      if (response.status == 400) {
        error.value = data?.message
      }
      throw new Error('Network response was not ok')
    }
    await user.newValueAccessToken(data.authorization)
    localStorage.setItem('hasRefresh', String(true))
    localStorage.setItem('RefreshTime', new Date().toISOString())
    router.push('/app/board')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="centred">
    <div class="form">
      <h1 class="title">Login into account</h1>
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
          v-model="form.password"
          type="password"
          placeholder="Password"
          :is-error="errors.names.includes('password')"
          :error-message="errors.messages.find((a) => a.name == 'password')?.message"
          name="password"
          required
        />
        <Button
          :disabled="!isValid"
          :full-width="true"
          type="submit"
          type_="default"
          :maxHeight="50"
          >Sign In</Button
        >
        <GoogleButtonAuth
          @error="
            (message) => {
              error = message
            }
          "
        />

        <p class="error" v-if="error.length > 0">{{ error }}</p>

        <p class="disc">
          Don't have an account?
          <router-link to="/app/auth/singup">
            <span class="disc-bold">Sign up</span>
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
