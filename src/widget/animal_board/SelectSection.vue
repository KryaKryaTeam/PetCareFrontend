<template>
  <section>
    <div><UiLabel text="active" @selected="" /></div>
    <div>
      <UiButton :unactive="activeState !== 'archived'" @click="reduceState('archived')"
        >archived</UiButton
      >
    </div>
    <div v-for="(value, index) in AnimalTypes.entries()" :key="index">
      <UiButton :unactive="activeState !== `${value}`" @click="reduceState(`${value}`)">{{
        value
      }}</UiButton>
    </div>
  </section>
</template>
<script setup lang="ts">
import UiLabel from '@/shared/ui/UiLabel.vue'
import useAnimalStore from '@/stores/animalStore'
import { provide, ref } from 'vue'
const activeState = ref('active')
const AnimalTypes = useAnimalStore().getAllTypesOfAnimal()
const reduceState = (newValue: any) => {
  activeState.value = newValue
}

provide('SelectButtonStateInBoard', activeState)
</script>
