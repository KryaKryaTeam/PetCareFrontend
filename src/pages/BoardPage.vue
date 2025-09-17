<script setup lang="ts">
import useAnimalStore, { type IAnimal } from '@/stores/animalStore'

import AddAnimalCard from '@/widget/animal_board/AddAnimalCard.vue'
import PetCard from '@/widget/animal_board/PetCard.vue'
import { storeToRefs } from 'pinia'
import { onMounted, watchEffect } from 'vue'
import useUserStore from '@/stores/userStore'
import SelectSection from '@/widget/animal_board/SelectSection.vue'



const filtredList = storeToRefs(useAnimalStore()).FiltredAnimalList
const animal = useAnimalStore()
const user = useUserStore()


onMounted(async () => {
  await animal.getAnimalList()
})
watchEffect(() => {
  console.log(filtredList.value)
})
</script>
<template>
  <SelectSection />
  <h2 class="welcome_title">Welcome, {{ user.profile ? user.profile.username : 'user' }}!</h2>
</template>

<style lang="css" scoped>
.grid {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  margin-top: 50px;
}
.welcome_title {
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 10%;
  color: #1f1f1f;
}
</style>
