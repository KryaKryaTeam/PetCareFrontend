<script setup lang="ts">
import ContainerBoard from '@/shared/containers/containerBoard.vue'

import AddAnimalCard from '@/widget/addAnimalCard.vue'
import BoardHeader from '@/widget/boardHeader.vue'
import DeleteCard from '@/widget/deleteCard.vue'
import PetCard from '@/widget/petCard.vue'
import { ref } from 'vue'

const idToDelete = ref<number | null>(null)
const isDark = ref(false)

setInterval(() => {
  console.log(pets.value)
}, 5000)

const toggleBackdrop = (id?: number) => {
  idToDelete.value = id ?? null
  isDark.value = id !== undefined
}

const deleteCard = (id: number) => {
  console.log(id)
  pets.value = pets.value.filter((e) => e.id !== id)
  toggleBackdrop()
}

const pets = ref([
  {
    id: 1,
    name: 'alex',
    imgLink: '/images/testimg.png',
  },
  {
    id: 2,
    name: 'milo',
    imgLink: '/images/testimg.png',
  },
  {
    id: 3,
    name: 'luna',
    imgLink: '/images/testimg.png',
  },
])
</script>

<template>
  <main class="RootElementWithModalLogic">
    <BoardHeader />
    <div class="root">
      <ContainerBoard class="grid">
        <PetCard
          v-for="pet in pets"
          :key="pet.id"
          :id="pet.id"
          :name="pet.name"
          :img-link="pet.imgLink"
          @delete="() => toggleBackdrop(pet.id)"
        />

        <AddAnimalCard />
      </ContainerBoard>
    </div>
  </main>

  <div>
    <DeleteCard
      v-if="isDark"
      :id-to-delete="idToDelete"
      @cancel="() => toggleBackdrop()"
      @delete="(id) => deleteCard(id)"
    />
  </div>
</template>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 5px;
  padding-top: 20px;
}

 
</style>
