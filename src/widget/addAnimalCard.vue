<template>
  <div class="main">
    <button @click="emitAdd()">
      <img src="/images/addPet-icon.svg" alt="add image" class="img" />
      <div id="text">Add animal board</div>
    </button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['add'])

const emitAdd = () => {
    emit("add")
}
</script>

<style scoped lang="css">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 480px;

  padding: 40px 88px;
  gap: 25px;

  border: 2px solid #1a7d87;
  border-radius: 15px;

  box-sizing: border-box;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}
</style>
