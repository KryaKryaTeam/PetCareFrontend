<template>
  <form>
    <input v-model="form.username" class="input"/>
    <input v-model="form.password" class="input"/>
  </form>
  <button @click="postForm()" class="btn">singUp</button>
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
      body: JSON.stringify(form)
    })
  }
</script>
