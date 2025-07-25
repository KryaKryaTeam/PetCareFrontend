<template>
  <div class="main">
    <button @click="router.push('/app/addpet')">
      <img src="/images/addPet-icon.svg" alt="add image" class="img" />

      <div id="text">Add animal board</div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style lang="css" scoped>
.main {
  display: flex;
  flex-direction: column; /* Vertical stacking */
  align-items: center; /* Center horizontally */
  justify-content: flex-start; /* Top align children */

  width: 527px;
  height: 510px;

  padding: 40px 88px; /* Top/Bottom: 40px, Left/Right: 88px */
  gap: 25px; /* 25px space between children */

  border: 2px solid #1a7d87;
  border-radius: 15px;

  box-sizing: border-box; /* Ensures padding stays within size */
}

.img {
  width: 70%;
  height: auto;
  margin: 25px 0;
}

#text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: #1f1f1f;
  text-align: center;
}

button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
}
</style>
