<script lang="ts" setup>
import ContainerComp from '@/shared/components/containerComp.vue'
import PetCard from '@/widget/petCard.vue'
</script>

<template>
  <div>
  <ContainerComp class="container">
    <div class="grid"><PetCard name="alex" imgLink="/images/testimg.png" :id="1" /></div>
  </ContainerComp>
  </div>
</template>
<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 15px;
  column-gap: 19px;
  row-gap: 19px;
}

</style>
