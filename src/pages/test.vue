<script lang="ts" setup>
import { ref } from 'vue'

import ContainerComp from '@/shared/containers/containerComp.vue'
import AddAnimalCard from '@/widget/addAnimalCard.vue'
import PetCard from '@/widget/petCard.vue'
import DeleteCard from '@/widget/deleteCard.vue'
import useBackgroundColor from '@/features/composebles/useBackgroundColor'
import BoardHeader from '@/widget/boardHeader.vue'

const isDark = ref(false)

useBackgroundColor('black')

const toggleBackdrop = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <BoardHeader />
  <div class="RootElementWithModalLogic">

  </div>

  <div>
    <DeleteCard v-if="isDark" @cancel="() => toggleBackdrop()"/>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 15px;
  column-gap: 19px;
  row-gap: 19px;
}

.test-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  padding: 10px 15px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
}
</style>
