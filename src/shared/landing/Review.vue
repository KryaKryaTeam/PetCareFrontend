<script setup>
const props = defineProps({
  imgUrl: { type: String, defualt: '' },
  content: { type: String, defualt: '' },
  rating: { type: Number, defualt: 0 },
  author: { type: String, defualt: '' },
})
</script>

<template>
  <div class="card">
    <div class="row1">
      <img class="image" :src="props.imgUrl" />
      <div class="content">
        <p class="text">{{ props.content }}</p>
        <div class="row">
          <img class="star" :src="props.rating < 1 ? '/images/star.svg' : '/images/starFull.svg'" />
          <img class="star" :src="props.rating < 2 ? '/images/star.svg' : '/images/starFull.svg'" />
          <img class="star" :src="props.rating < 3 ? '/images/star.svg' : '/images/starFull.svg'" />
          <img class="star" :src="props.rating < 4 ? '/images/star.svg' : '/images/starFull.svg'" />
          <img class="star" :src="props.rating < 5 ? '/images/star.svg' : '/images/starFull.svg'" />
        </div>
      </div>
    </div>
    <p class="author">{{ props.author }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: max-content;
  padding: 40px 4.5%;
  border: 2px #1a7d87 solid;
  border-radius: 15px;
  row-gap: 40px;
  .row1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .image {
      width: 25%;
      border-radius: 1000px;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 70%;
      row-gap: 30px;
      .text {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Inter';
        color: #514f4d;
        line-height: 170%;
        letter-spacing: 10%;
      }
      .row {
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        .star {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  .author {
    font-family: 'Inter';
    font-style: italic;
    font-size: 16px;
    font-weight: 500;
    color: #1f1f1f;
    line-height: 170%;
    letter-spacing: 10%;
  }
}
</style>
