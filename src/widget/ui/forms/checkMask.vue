<script setup lang="ts">
const props = defineProps({ checked: { type: Boolean, defualt: false } })
</script>

<template>
  <div :class="['check', props.checked ? 'act' : none]">
    <img v-if="props.checked" src="/images/arrow.svg" />
  </div>
</template>

<style lang="scss" scoped>
.check {
  border: 1px solid #aca4a4;
  border-radius: 7px;
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.check:hover {
  border: 1px solid #1f1f1f;
}
.check.act {
  background-color: #209aa6;
}
.check.act:hover {
  border: 1px solid #1a7d87;
}
</style>
