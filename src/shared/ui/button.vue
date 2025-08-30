<script setup lang="ts">
import { computed } from 'vue'

const { disabled, fullWidth, type_ } = defineProps({
  type_: { type: String, defualt: 'defualt' },
  disabled: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
  fontSize: { type: Number, default: 20 },
  fontWeight: { type: Number, default: 700 },
  maxHeight: { type: Number, default: 50 },
  topPadding: { type: Number, default: 20 },
})
const isDefualt = computed(() => {
  return type_ == 'default' || (type_ != 'destructive' && type_ != 'outline' && type_ != 'default')
})
const isDestructive = computed(() => {
  return type_ == 'destructive'
})
const isOutline = computed(() => {
  return type_ == 'outline'
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    :class="[
      'btn',
      { dis: disabled, destructive: isDestructive, default: isDefualt, outline: isOutline },
    ]"
    :disabled="disabled"
    :style="{
      width: fullWidth ? 'calc(100%-32px)' : 'max-content',
      fontSize: fontSize + 'px',
      fontWeight: fontWeight,
      maxHeight: maxHeight + 'px',
      paddingTop: topPadding + 'px',
      paddingBottom: topPadding + 'px',
    }"
    type="button"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 20px 16px;
  text-align: center;
  font-size: 20px;
  font-family: 'Inter';
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
}
.btn.default:hover {
  background: #29b4c2;
}
.btn.destructive:hover {
  background: #c22929;
}
.btn.outline:hover {
  background: none;
  color: #29b4c2;
  background: none;
  border: 5px #29b4c2 solid;
}
.btn.dis.default {
  background: #aeaeb2;
  cursor: default;
}
.btn.dis.destructive {
  background: #aeaeb2;
  cursor: default;
}
.btn.dis.outline {
  background: none;
  color: #aeaeb2;
  background: none;
  border: 5px #aeaeb2 solid;
}
.btn.default {
  color: white;
  background: #209aa6;
}
.btn.destructive {
  color: white;
  background: #a62020;
}
.btn.outline {
  color: #209aa6;
  background: none;
  border: 5px #209aa6 solid;
}
</style>
