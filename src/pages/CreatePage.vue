<script lang="ts" setup>
import AddAnimalBreadcrumb, {
  type steps_key,
} from '@/features/add-animal/ui/AddAnimalBreadcrumb.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentStep = computed(() => (route.query.step as steps_key) ?? 'selectAnimalType')
</script>

<template>
  <AddAnimalBreadcrumb :active-step="currentStep" />
</template>
