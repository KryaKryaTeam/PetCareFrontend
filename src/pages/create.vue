<script setup lang="ts">
import useGetListBreed from '@/features/useGetListBreed'
import { computed, onMounted, ref } from 'vue'
import AddAnimalBreadcrumb, {
  type steps_key,
} from '@/features/add-animal/ui/addAnimalBreadcrumb.vue'
import { useRoute } from 'vue-router'

const animalType = new URLSearchParams(document.location.search).get('animal')
const BreedCards = ref<any>([])
onMounted(async () => {
  console.debug(animalType)
  BreedCards.value = await useGetListBreed(animalType)
  console.debug(BreedCards.value)
})

const route = useRoute()
const currentStep = computed(() => (route.query.step as steps_key) ?? 'selectAnimalType')
</script>

<template>
  <AddAnimalBreadcrumb :style="{ marginBottom: '20px' }" :active-step="currentStep" />
  <!-- Based on url param show step component -->
</template>
