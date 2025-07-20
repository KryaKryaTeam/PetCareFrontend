<script setup>
import { useAttrs } from "vue"

const { isError, modelValue, errorMessage } = defineProps(["isError", "modelValue", "errorMessage"])
const emit = defineEmits(["update:modelValue"])
const attrs = useAttrs()
</script>

<template>
    <div class="wrapper">
        <input
            v-bind="attrs"
            :class="['input', isError ? 'error' : null]"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
        />
        <p v-if="isError && modelValue.length > 0" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<style lang="scss" scoped>
.input {
    padding: 16px 20px;
    background-color: #ffffff;
    border: 1px #aca4a4 solid;
    border-radius: 10px;
    width: calc(100% - 40px);
    color: #aca4a4;
    outline: none;
}
.input.error:valid {
    border: 1px #d31c1c solid;
}
.input:focus {
    color: #1f1f1f;
    border: 1px #1f1f1f solid;
}
.input:valid {
    color: #1f1f1f;
    border: 1px #1f1f1f solid;
}
.error-message {
    color: #d31c1c;
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
}
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
</style>
