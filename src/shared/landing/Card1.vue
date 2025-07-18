<script setup>
const props = defineProps({
  text: { type: String, defualt: '' },
  imgUrl: { type: String, defualt: '' },
})
</script>

<template>
  <div class="card">
    <img class="image" :src="props.imgUrl" />
    <p class="text">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
  height: 450px;
  width: 24%;

  border: 2px solid #1a7d87;
  border-radius: 15px;
  .image {
    width: 64%;
  }
  .text {
    width: 80%;
    text-align: center;
    font-size: 1em;
    font-family: 'Inter';
    font-weight: 400;
    line-height: 170%;
    letter-spacing: 10%;
    color: #514f4d;
  }
}
</style>
