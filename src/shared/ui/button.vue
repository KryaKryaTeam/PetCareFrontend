<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :class="['btn', { dis: disabled }]"
    :disabled="disabled"
    :style="{ width: props.fullWidth ? '100%' : 'max-content' }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 20px 16px;
  width: max-content;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Inter';
  color: white;
  background-color: #209aa6;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  background-color: #29b4c2;
}
.btn.dis {
  background-color: #aeaeb2;
  cursor: default;
}
</style>
