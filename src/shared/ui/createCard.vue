<style lang="css" scoped>
#main-container {
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  display: flex;
  padding: 16px 20px;
  align-items: center;
  width: 100%;
  max-width: 360px;

  height: 100%;
  max-height: 80px;
  border-radius: 12px;
}
#text-container {
  display: flex;
  font-family: 'Mulish', sans-serif;
  flex-direction: column;
  row-gap: 6.4px;
}
#img-container {
  display: flex;
  justify-content: start;
  margin-right: 12px;
}
#type-container {
  font-weight: 400;
  font-size: calc(9 * 1.333) px;
  line-height: 20px;
  letter-spacing: 0.25px;
}
#name-container {
  font-weight: 500;
  font-size: calc(16 * 1.333) px;
  line-height: 24px;
  letter-spacing: 0.5px;
}
</style>
<template>
  <div id="main-container">
    <div id="img-container">
      <AvatarGenerated words="sanya" />
    </div>
    <div id="text-container">
      <span id="name-container">
        {{ props.name }}
      </span>
      <div id="type-container">{{ props.type }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AvatarGenerated from './avatarGenerated.vue'

const props = defineProps({
  id: String,
  name: String,
  type: String,
  imgUrl: String,
})
</script>
