<template>
  <div class="main">
    <div class="container">
      <button class="action-btn" @click="router.push(`/app/edit/${id}`)">
        <img src="/images/pen-icon.svg" class="icon" />
        <span class="text">Edit</span>
      </button>

      <button class="action-btn" @click="emitDelete">
        <img src="/images/backet-icon.svg" class="icon" />
        <span class="text">Delete</span>
      </button>
    </div>

    <img :src="props.imgLink" :alt="props.name" class="img" />

    <div id="text">
      {{ props.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const emit = defineEmits(['delete'])
const router = useRouter()
const props = defineProps<{
  id: string
  name: string
  imgLink: string
}>()

const emitDelete = () => {
  emit('delete', props.id)
}
</script>
<style lang="css" scoped>
.main {
  display: flex;
  flex-direction: column; /* Vertical stacking */
  align-items: center; /* Center horizontally */
  justify-content: flex-start; /* Top align children */

  width: 100%;
  max-width: 480px;

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

#img-div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center; /* vertical center of buttons */
  /* justify-content: center; */
  width: 447px;
  gap: 258px;
  padding: 0;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 0;
}

.action-btn {
  display: flex;
  align-items: center; /* vertical center icon + text */
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px; /* space between icon and text */
  padding: 0;
}

.icon {
  width: 30px; /* match Figma icon size */
  height: 30px;
}

.text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #1f1f1f;
  line-height: 170%;
}
</style>
