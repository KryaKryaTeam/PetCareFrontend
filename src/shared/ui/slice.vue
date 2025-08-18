<template>
  <span id="line" :style="{ '--color': color }"></span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  isFirst: boolean
}>()

const color = computed(() => props.isFirst ?  '#209AA6' : '#514F4D')
</script>

<style scoped>
#line {
  width: 7px;
  height: 100px;
  background: var(--color);
}
</style>
