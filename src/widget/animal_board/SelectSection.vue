<template>
  <section>
    <div>
      <UiLabel text="active" :active="true" :id="1" />

      <UiLabel v-if="loading" text="loading" :id="3" />

      <span v-else v-for="(param, index) in [...params.entries()]" :key="index">
        <UiLabel :text="param[1]" :id="index + 3" />
      </span>

      <UiLabel text="archived" :id="2" />
    </div>
  </section>
</template>
<script setup lang="ts">
import UiLabel from '@/shared/ui/UiLabel.vue'

import useAnimalStore from '@/stores/animalStore'
import { useUiStore } from '@/stores/uiStateStore'
import { storeToRefs } from 'pinia'
import { ref, watchEffect } from 'vue'
const animal = useAnimalStore()
const loading = storeToRefs(useUiStore()).loadingSelect
const params = ref<Set<string> | null>(null)

watchEffect(() => {
  params.value = animal.getAllParamsList()
})
</script>
