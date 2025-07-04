<template>
    <form>
        <input   placeholder="name"/>
    <select class="select" v-model="animalSelect" placeholder="Pick a animal">
        <option>dog</option>
        <option>cat</option>
        <option>parrot</option>
    </select>
    <BreedPanel v-if="panelStatus" :animal="animalSelect" @breed-from-panel="(data) => breedData = data"/>
        <input placeholder="weight"/>
        <button>submit</button>
    </form>
</template>
<script setup lang="ts">
import BreedPanel from '@/widget/breedPanel.vue';
import { ref, watchEffect } from 'vue';
let panelStatus = ref(false);
const animalSelect = defineModel('')
const breedData = ref('вщте рфму')
watchEffect(() => {
    console.log(animalSelect.value)
    if (animalSelect.value) {
    panelStatus.value = true
  }
})
</script>