<template>
  <div class="main">
  <button class="invisible">
    <div>
      <div class="controlers">
        <span></span>
        <span></span>
      </div>
      <div class="img">
        <img :src="props.imgLink" :alt="props.name" />
      </div>
      <div><b class="text">{{ props.name }}</b></div>
    </div>
  </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  imgLink: string
}>()
</script>
<style lang="css" scoped>
  .invisible{
    background: none;
    border: none;
    outline: none;
  }
  .text{
    font-family: "Montserrat";
    font-weight: 600;
    letter-spacing: 5%;
    font-size: 25px;
    color: #1F1F1F;
  }
  .main{
    display: flex;
    border: solid 2px #1A7D87;
  }
</style>
