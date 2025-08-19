<template>
  <GoogleLogin :callback="callback" />
  <!-- <button class="googleAuthBtn">
            <img src="/images/google-logo.svg" />
            <p>Sign in with Google</p>
        </button>
    </GoogleLogin> -->
</template>
<script setup lang="ts">
import useUserStore from '@/stores/User/userStore'
import { useRouter } from 'vue-router'
import type { CallbackTypes } from 'vue3-google-login'
const router = useRouter()
const user = useUserStore()
const emit = defineEmits(['error'])
const callback: CallbackTypes.CredentialCallback = async (response) => {
  try {
    console.log(response)
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login/google`, {
      method: 'POST',
      body: JSON.stringify({
        accessToken: `${response.credential}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    if (!res.ok) {
      emit('error', data?.message)
      throw Error('Request failed!')
    }

    user.newValueAccessToken(data?.authorization)
    router.push('/app/board')
  } catch (err) {
    console.log(err)
  }
}
</script>

<!-- <style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
.googleAuthBtn {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border-radius: 10px;
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 15px 12px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    p {
        color: #1f1f1f;
        font-family: "Roboto";
        font-weight: 500;
        font-size: 16px;
    }
}
.googleAuthBtn:hover {
    border: 1px solid #c1d5f6;
}
.googleAuthBtn:active {
    background-color: #eeeeee;
}
</style> -->
