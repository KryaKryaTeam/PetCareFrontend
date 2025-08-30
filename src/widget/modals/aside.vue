<script setup lang="ts">
import { AlignVerticalJustifyEndIcon, Bell, PanelLeft } from 'lucide-vue-next'
import HorizontalAnimalCard from '../cards/horizontalAnimalCard.vue'
import useAnimalStore from '@/stores/animalStore'
import { useUiStore } from '@/stores/uiStateStore'
import AsideController from '../controlls/asideController.vue'

const animal = useAnimalStore()
const ui = useUiStore()
</script>
<template>
  <aside :class="['aside', { toggle: !ui.asideState }]">
    <div class="header">
      <AsideController />
      <button><Bell color="#1A7D87" width="30px" height="30px" /></button>
    </div>
    <div class="content">
      <h2 class="title">Animals</h2>
      <div class="list">
        <HorizontalAnimalCard
          v-for="(pet, index) in animal.AnimalList.values()"
          :key="index"
          :id="pet._id"
          :name="pet.name"
          :status="pet.status"
        />
      </div>
    </div>
  </aside>
</template>
<style lang="css" scoped>
.aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 100vh;

  z-index: 11;

  background: #f9f5ec;

  transition: all 1s linear;
}
.header {
  padding: 50px;
  width: calc(100% - 100px);
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content {
  padding: 0 50px;
  width: calc(100% - 100px);
  height: auto;
}
.title {
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 25px;
  letter-spacing: 5%;
  color: #1f1f1f;
}
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 40px;
}
.toggle {
  left: -500px;
}
</style>
