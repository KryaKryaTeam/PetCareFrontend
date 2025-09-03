<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const disabled = ref<boolean>(false)

const clickEvent = () => {
  disabled.value = true
  const timeout = setTimeout(() => {
    disabled.value = false
    clearTimeout(timeout)
  }, 5000)
  emit('add')
}
</script>

<template>
  <button :class="['card', { dis: disabled }]" @click="clickEvent" :disabled="disabled">
    <img :src="disabled ? '/images/plus-dis.svg' : '/images/plus.svg'" />
  </button>
</template>

<style lang="css" scoped>
.card {
  width: 360px;
  height: 390px;
  border-radius: 12px;
  border: 5px dashed #209aa6;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.card.dis {
  border: 5px dashed #d3d3d3;
  cursor: default;
}
</style>
