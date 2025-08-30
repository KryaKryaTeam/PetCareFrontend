<script setup lang="ts">
import AvatarGenerated from '@/shared/ui/avatarGenerated.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { id, status, name } = defineProps({
  id: { type: String, default: '' },
  status: { type: String, default: 'active' },
  name: { type: String, default: 'My cat' },
})
</script>

<template>
  <button class="card">
    <AvatarGenerated :words="name" />
    <div class="text">
      <h2 class="name">{{ name }}</h2>
      <p class="status">{{ status }}</p>
    </div>
  </button>
</template>

<style lang="css" scoped>
.card {
  width: calc(100% - 40px);
  height: calc(80px - 32px);
  border-radius: 12px;
  background: #faf6ee;
  box-shadow: 4px 4px 30px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.text {
  height: 100%;
  width: calc(100%-46px);
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.name {
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;
  margin: 0%;
  padding: 0%;
  font-family: 'Montserrat';
  color: #1f1f1f;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
}
.status {
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;
  margin: 0%;
  padding: 0%;
  font-family: 'Montserrat';
  color: #1f1f1f;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0.25px;
}
</style>
