<script setup lang="ts">

import ContainerBoard from '@/shared/containers/containerBoard.vue'
import useAnimalStore from '@/stores/animalStore'

import AddAnimalCard from '@/widget/addAnimalCard.vue'
import AddAnimalModal from '@/widget/addAnimalModal.vue'
import BoardHeader from '@/widget/boardHeader.vue'
import DeleteCard from '@/widget/deleteCard.vue'
import PetCard from '@/widget/petCard.vue'
import { storeToRefs } from 'pinia'
import {  onMounted, ref } from 'vue'

const animal = useAnimalStore();
const { AnimalList } = storeToRefs(animal)
const idToDelete = ref<string | null>(null)
const isDeleteDark = ref(false)
const isAddDark = ref(false)
onMounted(async () => {
  await animal.getAnimalList()
  console.log(AnimalList.value)
})
const toggleDeleteBackdrop = (id?: string) => {
  idToDelete.value = id ?? null
  isDeleteDark.value = id !== undefined
}

const toggeAddBackdrop = () => (isAddDark.value = !isAddDark.value)
</script>

<template>
  <main class="RootElementWithModalLogic">
    <BoardHeader />
    <div class="root">
      <ContainerBoard class="grid">
        <PetCard
          v-for="(pet, index) in AnimalList"
          :key="index"
          :id="pet._id"
          :name="pet.name"
          img-link="/images/testimg.png"
          @delete="() => toggleDeleteBackdrop(pet._id)"
        />
        <AddAnimalCard @add="() => toggeAddBackdrop()" />
      </ContainerBoard>
    </div>
  </main>

  <div>
    <DeleteCard
      v-if="isDeleteDark"
      :id-to-delete="idToDelete"
      @cancel="() => toggleDeleteBackdrop()"
      @delete="(id) => toggleDeleteBackdrop()"
    />
    <AddAnimalModal v-if="isAddDark" @close="toggeAddBackdrop()" />
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
