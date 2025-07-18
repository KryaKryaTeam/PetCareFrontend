<template>
  <GoogleLogin :callback="callback" />
</template>
<script setup lang="ts">
import useUserStore from '@/entities/User/userStore'
import { useRouter } from 'vue-router'
import type { CallbackTypes } from 'vue3-google-login'
const router = useRouter()
const user = useUserStore()
const callback: CallbackTypes.CredentialCallback = async (response) => {
  console.log(response.credential)
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login/google`, {
    method: 'POST',
    body: JSON.stringify({
      accessToken: `${response.credential}`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data)
      user.newValueAccessToken(data.authorization)
      router.push('/app/board')
    })
}
</script>
