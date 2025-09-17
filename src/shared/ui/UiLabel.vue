<script lang="ts" setup>
import useLabelBoardObserver from '@/features/Observer/LabelBoardObserver'
import { computed, defineProps } from 'vue'

const LabelListeners = useLabelBoardObserver()

const { text, active, id } = defineProps({
  text: { type: String, default: '' },
  active: { type: Boolean, default: false },
  id: Number
})

// On setup, add listener to store (only once)
LabelListeners.addListener({ id, param: text,state: active })

// Reactive computed to find listener by id from the store
const listener = computed(() => {
  return LabelListeners.listeners.find(l => l.id === id) || { id, state: false }
})

function clicked() {
  if (listener.value) {
    LabelListeners.updateListeners({ id: listener.value.id, state: !listener.value.state, param: text })
  }
}
</script>

<template>
  <button :class="['label', { active: listener.state }]" @click="clicked">{{ text }}</button>
</template>

<style lang="css" scoped>
.label {
  width: max-content;
  height: 25px;
  padding: 0 20px;
  background: #aeaeb2;
  border-radius: 12px;
  font-family: 'Montserrat';
  line-height: 25px;
  font-weight: 500;
  letter-spacing: 5%;
  font-size: 10px;
  color: #ffffff;
}
.label.active {
  background: #29b4c2;
}
</style>
