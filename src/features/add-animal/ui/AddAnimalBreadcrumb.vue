<script lang="ts" setup>
import { useAttrs, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'

type Step = {
  url: string
  color?: { default?: string; active?: string; iconColor?: string }
}

const props = defineProps<{
  activeStep: steps_key
}>()
const attrs = useAttrs()

const STEP_COLORS = {
  default: 'rgba(174, 174, 178, 1)',
  active: 'rgba(31, 31, 31, 1)',
  successStepColor: 'rgba(32, 154, 166, 1)',
}

export type steps_key = 'selectAnimalType' | 'selectBreed' | 'setGeneralInfo'

export const steps: steps_key[] = ['selectAnimalType', 'selectBreed', 'setGeneralInfo']

function formatStepName(name: string) {
  return name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
}
</script>

<template>
  <div class="breadcrumbs" v-bind:attrs>
    <RouterLink to="/app/board" :style="{ color: STEP_COLORS.default }">Dashboard</RouterLink>
    <template v-for="step of steps" :key="step">
      <ChevronRight />
      <RouterLink
        :to="`?step=${step}`"
        :style="{
          color: props.activeStep === step ? STEP_COLORS.active : STEP_COLORS.default,
        }"
      >
        {{ formatStepName(step) }}
      </RouterLink>
    </template>
    <ChevronRight :color="STEP_COLORS.successStepColor" />
    <RouterLink
      :to="`?step=success`"
      :style="{
        color: STEP_COLORS.successStepColor,
      }"
    >
      Success
    </RouterLink>
  </div>
</template>

<style scoped>
.breadcrumbs {
  font-family: 'Inter';
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumbs a {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  transition: color 0.2s;
}
</style>
