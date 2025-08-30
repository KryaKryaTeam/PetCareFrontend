<script setup lang="ts">
import useUserStore from '@/stores/userStore'
import { ref } from 'vue'
import { onMounted } from 'vue'

const user = useUserStore()

const image = ref<string>('')

onMounted(async () => {
  await user.requestProfile()
  image.value = user.profile.avatar
})
</script>

<template>
  <header>
    <div class="container">
      <router-link to="/app/board"><img src="/images/Logo.svg" class="logo" /></router-link>

      <div class="icon">
        <img class="avatar" :src="image" />
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 150px;
  background-color: #faf6ee;
}

.icons {
  display: flex;
  gap: 50px;
}

.logo {
  height: 40px;
}

.avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
