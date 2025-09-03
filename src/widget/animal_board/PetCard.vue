<script setup lang="ts">
import Button from '@/shared/ui/UiButton.vue'
import { useUiStore } from '@/stores/uiStateStore'
import { onMounted, ref } from 'vue'
import * as animejs from 'animejs'

const targetRef = ref(null)
const animation = animejs.animate(targetRef.value, {
  duration: 1000,
  frameRate: 30,
  ease: 'inElastic',
  scale: '+=.25',
})

const { _id, name, status, avatar } = defineProps({
  _id: { type: String, default: '' },
  name: { type: String, default: 'My cat' },
  status: { type: String, default: 'Active' },
  avatar: { type: String, default: '/images/animal_baseicon.png' },
})
const emit = defineEmits(['delete', 'open'])
const isInAction = ref<boolean>(false)

const ui = useUiStore()

onMounted(() => {
  animation.play()
})

function clickOpen() {
  isInAction.value = true
  const timeout = setTimeout(() => {
    isInAction.value = false
    clearTimeout(timeout)
  }, 1000)
  console.log('open')
  emit('open', _id)
}
function clickDelete() {
  isInAction.value = true
  const timeout = setTimeout(() => {
    isInAction.value = false
    clearTimeout(timeout)
  }, 1000)
  console.log('delete')
  ui.onnDeleteDialog(_id)
  emit('delete', _id)
}
</script>

<template>
  <section :id="_id" class="card" ref="targetRef">
    <img :src="avatar" class="avatar" />
    <div class="textContent">
      <div class="text">
        <h2 class="name">{{ name }}</h2>
        <p class="status">{{ status }}</p>
      </div>
      <div class="buttons">
        <Button
          type_="destructive"
          :fontSize="12"
          :fontWeight="400"
          :maxHeight="32"
          :topPadding="8.5"
          @click="clickDelete()"
          :disabled="isInAction"
          >Delete</Button
        >
        <Button
          type_="default"
          :fontSize="12"
          :fontWeight="400"
          :maxHeight="32"
          :topPadding="8.5"
          @click="clickOpen()"
          :disabled="isInAction"
          >Open</Button
        >
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.card {
  width: 360px;
  height: 390px;
  border-radius: 12px;
  background: #faf6ee;
  box-shadow: 4px 4px 30px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
}
.avatar {
  width: 100%;
  height: 260px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.textContent {
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.name {
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #1f1f1f;
  margin: 0%;
  padding: 0%;
}
.status {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #1f1f1f;
  margin: 0%;
  padding: 0%;
}
.text {
  padding: 16px;
  padding-bottom: 0px;
}
.buttons {
  padding: 16px;
  width: calc(100%-32px);
  height: max-content;
  display: flex;
  flex-direction: row;

  column-gap: 8px;
}
</style>
