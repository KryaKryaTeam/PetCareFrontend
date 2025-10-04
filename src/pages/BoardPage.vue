<script setup lang="ts">
import useAnimalStore, { type IAnimal } from '@/stores/animalStore'

import AddAnimalCard from '@/widget/animal_board/AddAnimalCard.vue'
import PetCard from '@/widget/animal_board/PetCard.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import useUserStore from '@/stores/userStore'
import SelectSection from '@/widget/animal_board/SelectSection.vue'
import { useUiStore } from '@/stores/uiStateStore'

const filtredList = storeToRefs(useAnimalStore()).FiltredAnimalList
const animal = useAnimalStore()
const user = useUserStore()
const loadingSelect = storeToRefs(useUiStore()).loadingSelect
onMounted(async () => {
  await animal.getAnimalList()
  loadingSelect.value = false
})
</script>
<template>
  <SelectSection />
  <h2 class="welcome_title">Welcome, {{ user.profile ? user.profile.username : 'user' }}!</h2>
  <div class="grid">
    <PetCard
      v-for="(pet, index) in filtredList"
      :key="index"
      :_id="pet._id"
      :name="pet.name"
      :status="pet.status"
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
  column-gap: 50px;
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
