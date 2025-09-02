<script lang="ts" setup>
const { words } = defineProps({ words: { type: String, default: 'A' } })
</script>
<template>
  <div class="avatar">
    <p class="letter">{{ words[0].toUpperCase() }}</p>
  </div>
</template>
<style lang="css" scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #209aa6;

  display: flex;
  align-items: center;
  justify-content: center;
}
.letter {
  font-family: 'Montserrat';
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 24px;
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: #ffffff;
}
</style>
