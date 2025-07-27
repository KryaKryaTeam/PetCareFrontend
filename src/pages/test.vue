<script lang="ts" setup>
import { ref, watch } from 'vue'
import useBackdropOpacity from '@/features/composebles/useBackdropOpacity'

import ContainerComp from '@/shared/components/containerComp.vue'
import AddAnimalCard from '@/widget/addAnimalCard.vue'
import PetCard from '@/widget/petCard.vue'

const isDark = ref(false)

const opacity = useBackdropOpacity(0)

watch(isDark, (newVal) => {
  opacity.value = newVal ? 0.5 : 0
})

const toggleBackdrop = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div>
    <button class="test-btn" @click="toggleBackdrop">
      Тест
    </button>

    <ContainerComp class="container">
      <div class="grid">
        <PetCard name="alex" imgLink="/images/testimg.png" :id="1" />
        <AddAnimalCard />
      </div>
    </ContainerComp>
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
