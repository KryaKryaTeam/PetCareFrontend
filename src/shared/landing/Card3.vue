<script setup>
const props = defineProps({
  text: { type: String, defualt: '' },
  imgUrl: { type: String, defualt: '' },
})
</script>
<template>
  <div class="card">
    <img class="img" :src="props.imgUrl" />
    <p class="text">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 27%;
  height: 450px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  border: 2px solid #1a7d87;
  border-radius: 15px;
  .text {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter';
    line-height: 170%;
    letter-spacing: 10%;
    color: #514f4d;
  }
  .img {
    width: 60%;
  }
}
</style>
