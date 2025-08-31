<script lang="ts" setup>
import Input from '@/shared/ui/input.vue'

const props = defineProps<{
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'search', term: string): void
}>()
</script>
<template>
  <Input
    :placeholder="props.placeholder ?? 'Search'"
    @input="(e: Event) => emit('search', (e.target as HTMLInputElement).value)"
  />

  <div class="result-grid">
    <slot name="card" />
  </div>
</template>

<style>
.result-grid {
  margin-top: 45px;
  display: grid;
  grid-template-columns: minmax(1fr, 200px);

  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 60px;
}
</style>
