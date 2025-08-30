<script setup lang="ts">
import Button from '@/shared/ui/button.vue'
import useAnimalStore from '@/stores/animalStore'
import { useUiStore } from '@/stores/uiStateStore'

const ui = useUiStore()
const animal = useAnimalStore()

function archiveAnimal() {
  animal.changeAnimalStatus(ui.deleteDialog._id, 'archived')
  ui.offDeleteDialog()
}
function deleteAnimal() {
  animal.deleteAnimal(ui.deleteDialog._id)
  ui.offDeleteDialog()
}
</script>
<template>
  <section :class="['modal', { toggle: !ui.deleteDialog.active }]">
    <div class="content">
      <h2 class="title">Sorry, are you sure?</h2>
      <p class="text">
        After this action you don't be able to restore your animal. You can archive it.
      </p>
    </div>
    <div class="footer">
      <Button
        :font-weight="400"
        :font-size="12"
        :top-padding="7.5"
        type_="outline"
        @click="ui.offDeleteDialog()"
        >Cancel</Button
      >
      <Button
        :font-weight="400"
        :font-size="12"
        :top-padding="7.5"
        type_="default"
        @click="archiveAnimal()"
        >Archive</Button
      >
      <Button
        :font-weight="400"
        :font-size="12"
        :top-padding="7.5"
        type_="destructive"
        @click="deleteAnimal()"
        >Delete</Button
      >
    </div>
  </section>
</template>
<style lang="css" scoped>
.modal {
  width: 500px;
  height: 200px;
  border-radius: 12px;
  background: #faf6ee;
}
.toggle {
  display: none;
}
.content {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 25px 50px;
  padding-bottom: 0px;

  color: #1f1f1f;
  letter-spacing: 10%;
  line-height: 20px;
  font-family: 'Montserrat';
}

.title {
  font-size: 20px;
  font-weight: 500;
  margin: 0%;
}
.text {
  font-size: 12px;
  font-weight: 300;
  margin: 0%;
}
.footer {
  padding: 25px 50px;
  padding-top: 0px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  column-gap: 16px;
}
</style>
