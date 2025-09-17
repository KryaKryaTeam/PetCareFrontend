<template>
  <section>
    <div>
      <UiLabel text="active" :active="true" :id="1" />

      <UiLabel text="archived" :id="2" />
      <span v-for="(param, index) in [...params.entries()]" :key="index">
        <UiLabel :text="param[1]" :id="index + 3" />
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
import UiLabel from '@/shared/ui/UiLabel.vue'
import useAnimalStore from '@/stores/animalStore';
const animal = useAnimalStore();

const params = animal.getAllParamsList();
console.log([...params.entries()])
</script>
