<script setup lang="ts">
import BreedPanel from '@/widget/breedPanel.vue';
import { ref, watchEffect } from 'vue';
let panelStatus = ref(false);
const animalSelect = defineModel('')
watchEffect(() => {
    console.log(animalSelect.value)
    if (animalSelect.value) {
    panelStatus.value = true
  }
})
</script>

<template>
    <select class="select" v-model="animalSelect">
        <option disabled selected>Pick a animal</option>
        <option>dog</option>
        <option>cat</option>
        <option>parrot</option>
    </select>
    <BreedPanel v-if="panelStatus" :animal="animalSelect"/>
</template>