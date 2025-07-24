<script setup lang="ts">
import { ref, useAttrs } from 'vue'

const { isError, modelValue, errorMessage, type } = defineProps([
  'isError',
  'modelValue',
  'errorMessage',
  'type',
])
const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()
const isOpen = ref(false)

function changeState() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="wrapper">
    <input
      v-if="type != 'password'"
      v-bind="attrs"
      :class="['input', isError ? 'error' : null]"
      :value="modelValue"
      :type="type"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <label
      v-else
      :class="[
        'input_pass',
        isError && modelValue.length > 0 ? 'error' : null,
        !isError && modelValue.length > 0 ? 'focused' : null,
      ]"
    >
      <input
        class="field"
        :type="!isOpen ? 'password' : 'text'"
        v-bind="attrs"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <img
        :src="!isOpen ? '/images/eye-open.svg' : '/images/eye-closed.svg'"
        @click="changeState"
      />
    </label>
    <p v-if="isError && modelValue.length > 0" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
.input {
  background: none;
  padding: 16px 20px;
  border: 1px #aca4a4 solid;
  border-radius: 10px;
  width: calc(100% - 40px);
  color: #aca4a4;
  outline: none;
}

.input.error:valid {
  border: 1px #d31c1c solid;
}
.input:valid {
  color: #1f1f1f;
  border: 1px #1f1f1f solid;
}
.error-message {
  color: #d31c1c;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.input_pass {
  background: none;
  padding: 0px 20px;
  border: 1px #aca4a4 solid;
  border-radius: 10px;
  width: calc(100% - 40px);
  color: #aca4a4;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .field {
    width: 90%;
    padding: 16px 0px;
    background: none;
    border: none;
    outline: none;
    color: #aca4a4;
  }
  .field:valid {
    color: #1f1f1f;
  }
}
.input_pass.error {
  border: 1px #d31c1c solid;
}
.input_pass.focused {
  border: 1px #1f1f1f solid;
}
</style>
