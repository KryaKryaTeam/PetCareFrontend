<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'

const { text, active } = defineProps({
  text: { type: String, default: '' },
  active: { type: Boolean, default: false },
})
const emit = defineEmits(['selected', 'unselected'])
const state = ref(active)

function clicked() {
  if (state.value) {
    emit('unselected')
  } else {
    emit('selected')
  }
  state.value = !state.value
}
</script>
<template>
  <button :class="['label', { active: state }]" @click="clicked">{{ text }}</button>
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
