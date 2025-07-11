import { defineStore } from 'pinia'
import { ref } from 'vue';

const useUserStore = defineStore('user', () => {
  const accessToken = ref<null | unknown | string>(null);

  function newValueAccessToken(newValue: any){
    accessToken.value = newValue
  }
  async function refresh(){
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/refresh`, {
      method: "POST",
      body: JSON.stringify({
        "accessToken": `${accessToken.value}`
      }),
       headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return {
    accessToken, newValueAccessToken, refresh
  }
})

export default useUserStore
