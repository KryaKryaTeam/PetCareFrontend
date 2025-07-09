<template>
 dsaasjsad
</template>
<script setup lang="ts">
import parseGoogleAuthFragment from '@/features/api/parseGoogleAuthFragment';
import { onMounted } from 'vue';



 onMounted(async() => {
    if(window.location.hash){
      const accessToken = parseGoogleAuthFragment()
    await  fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login/google`, {
      method: "POST",
      body: JSON.stringify(accessToken),
      
    })

    }
 })
</script>
