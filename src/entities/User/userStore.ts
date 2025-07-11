import { defineStore } from 'pinia'
import { ref } from 'vue';

const useUserStore = defineStore('user', () => {
  const accessToken = ref<null | unknown | string>(null);

  function newValueAccessToken(newValue: any){
    accessToken.value = newValue
  }
  return {
    accessToken, newValueAccessToken
  }
})

export default useUserStore
