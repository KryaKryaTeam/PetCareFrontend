<script setup lang="ts">
const { disabled, fullWidth } = defineProps({
  disabled: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
})
</script>

<template>
  <button
    :class="['btn', { dis: disabled }]"
    :disabled="disabled"
    :style="{ width: fullWidth ? '100%' : 'max-content' }"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 20px 16px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #209aa6;
  border-radius: 10px;
  cursor: pointer;
}
.btn:hover {
  background: #29b4c2;
}
.btn.dis {
  background: #aeaeb2;
  cursor: default;
}
</style>
