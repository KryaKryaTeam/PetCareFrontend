<script lang="ts" setup>
import useLabelBoardObserver from '@/features/Observer/LabelBoardObserver'
import  { computed, defineProps, onMounted, onUnmounted, useAttrs } from 'vue'

const LabelListeners = useLabelBoardObserver()

const { text, active, id } = defineProps({
  text: { type: String, default: '' },
  active: { type: Boolean, default: false },
  id: Number,
})
const attrs = useAttrs()
const isDisabled = computed(() => !!attrs.disabled)
// On setup, add listener to store (only once)


// Reactive computed to find listener by id from the store
const listener = computed(() => {
  return LabelListeners.listeners.find((l) => l.id === id) || { id, state: false }
})

function clicked() {
  if (listener.value) {
    LabelListeners.updateListeners({
      id: listener.value.id,
      state: !listener.value.state,
      param: text,
    })
  }
}
onMounted(() => {
  LabelListeners.addListener({ id, param: text, state: active })
})
onUnmounted(() => {
  LabelListeners.clearLisner(id)
})
</script>

<template>
  <button :disabled="isDisabled" :class="['label', { active: listener.state }]" @click="clicked">
    {{ text }}
  </button>
</template>

<style lang="css" scoped>
button{
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
.label {
  margin-right: 0.6vw;
  width: max-content;
  height: 25px;
  padding: 0 20px;
  border-color: #514F4D;
  border: 2px solid;
  border-radius: 5px;
  font-family: 'Montserrat';
  line-height: 170%;
  font-weight: 500;
  letter-spacing: 5%;
  font-size: 10px;
  color: #514F4D;
}
.label.active {
  color: #ffffff;
  background: #209AA6;
}
</style>
