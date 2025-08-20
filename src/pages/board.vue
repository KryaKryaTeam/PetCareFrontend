<script setup lang="ts">
import useGetAnimals from '@/features/Animal/useGetAnimals'
import ContainerBoard from '@/shared/containers/containerBoard.vue'
import useUserStore from '@/stores/User/userStore'

import AddAnimalCard from '@/widget/addAnimalCard.vue'
import AddAnimalModal from '@/widget/addAnimalModal.vue'
import BoardHeader from '@/widget/boardHeader.vue'
import DeleteCard from '@/widget/deleteCard.vue'
import PetCard from '@/widget/petCard.vue'
import { onMounted, ref } from 'vue'
const pets = ref<any[]>([])
const idToDelete = ref<string | null>(null)
const isDeleteDark = ref(false)
const isAddDark = ref(false)
onMounted(async () => {
  pets.value = await useGetAnimals().then((object) => object.animals)
  console.log(pets.value)
})
const toggleDeleteBackdrop = (id?: string) => {
  idToDelete.value = id ?? null
  isDeleteDark.value = id !== undefined
}

const deleteCard = (id: number) => {
  pets.value = pets.value.filter((e) => e._id !== id)
  toggleDeleteBackdrop()
}
const toggeAddBackdrop = () => (isAddDark.value = !isAddDark.value)
</script>

<template>
  <main class="RootElementWithModalLogic">
    <BoardHeader />
    <div class="root">
      <ContainerBoard class="grid">
        <PetCard
          v-for="(pet, index) in pets"
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
      @delete="(id) => deleteCard(id)"
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
