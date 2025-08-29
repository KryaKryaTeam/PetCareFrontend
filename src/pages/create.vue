<script setup lang="ts">
import useGetListBreed from '@/features/useGetListBreed'
import { onMounted, ref } from 'vue'


const animalType = new URLSearchParams(document.location.search).get('animal')
const BreedCards = ref<any>([])
onMounted(async () => {
  console.debug(animalType)
  BreedCards.value = await useGetListBreed(animalType)
  console.debug(BreedCards.value)
})

</script>
<template>
  
</template>
