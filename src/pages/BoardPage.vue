<script setup lang="ts">
import useAnimalStore from '@/stores/animalStore'

import AddAnimalCard from '@/widget/animal_board/AddAnimalCard.vue'
import PetCard from '@/widget/animal_board/PetCard.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import useUserStore from '@/stores/userStore'

const animal = useAnimalStore()
const user = useUserStore()
const { AnimalList } = storeToRefs(animal)
onMounted(async () => {
  await animal.getAnimalList()
  console.log(AnimalList.value)
})
</script>

<template>
  <h2 class="welcome_title">Welcome, {{ user.profile ? user.profile.username : 'user' }}!</h2>
  <div class="grid">
    <PetCard
      v-for="(pet, index) in AnimalList.values()"
      :key="index"
      :_id="pet._id"
      :name="pet.name"
      :status="pet.status"
      :avatar="pet.avatar"
    />
    <AddAnimalCard />
  </div>
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
