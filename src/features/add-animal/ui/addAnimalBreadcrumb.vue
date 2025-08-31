<script lang="ts" setup>
import { useAttrs } from 'vue'
import { RouterLink } from 'vue-router'
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
  iconColor: 'rgba(81, 79, 77, 1)',
}

export type steps_key = 'selectAnimalType' | 'selectBreed' | 'setGeneralInfo' | 'success'

const steps: Record<steps_key, Step> = {
  selectAnimalType: { url: '/create?step=selectAnimalType' },
  selectBreed: { url: '/create?step=selectBreed' },
  setGeneralInfo: { url: '/create?step=setGeneralInfo' },
  success: {
    url: '/create?step=success',
    color: {
      default: 'rgba(32, 154, 166, 1)',
      active: 'rgba(32, 154, 166, 1)',
      iconColor: 'rgba(32, 154, 166, 1)',
    },
  },
}

function formatStepName(name: string) {
  return name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
}

function getColor(step: Step, key: keyof typeof STEP_COLORS) {
  return step.color?.[key] ?? STEP_COLORS[key]
}
</script>

<template>
  <div class="breadcrumbs" v-bind:attrs>
    <RouterLink to="/app/board" :style="{ color: STEP_COLORS['default'] }">Dashboard</RouterLink>
    <template v-for="(stepObj, stepKey) in steps" :key="stepObj.url">
      <ChevronRight :color="getColor(stepObj, 'iconColor')" />
      <RouterLink
        :to="stepObj.url"
        :style="{
          color:
            stepKey === props.activeStep
              ? getColor(stepObj, 'active')
              : getColor(stepObj, 'default'),
        }"
      >
        {{ formatStepName(stepKey) }}
      </RouterLink>
    </template>
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
