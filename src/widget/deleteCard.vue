<script setup lang="ts">
import useBackdropOpacityV1 from '@/features/composebles/useBackdropOpacityV1'
import Button from '@/shared/ui/button.vue';

useBackdropOpacityV1(0.5)
</script>

<!-- DeleteCard.vue -->
<template>
  <div class="modal-overlay">
    <div class="modal-box">
      <div class="modal-text">
        Are you sure you want to <br />
        <strong class="modal-strong">delete this?</strong>
      </div>
      <div class="button-block">
      <Button class="cancel">Cancel</Button>
      <Button class="delete">Delete</Button>
      </div>
    </div>
  </div>
</template>


<style lang="css" scoped>
.button-block{
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-box {
  background-color: #F9F5EC;
  width: 20%;
  min-width: 300px;
  height: auto;
  padding: 40px 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  alignment-baseline: middle;
}

.modal-text {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #1f1f1f;
  font-weight: 500;
  line-height: auto;
  letter-spacing: 0.5px;
}

.modal-strong {
  display: inline-block;
  padding: 0 70px;
}

.btn {
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  width: 120px;
}

.btn.cancel {
  background-color: #e0e0e0;
  color: black;
}

.btn.delete {
  background-color: #f05b5b;
  color: white;
}

.btn.delete:hover {
  background-color: #d84343;
  color: white;
}
.btn.cancel:hover {
  background-color: #c0c0c0;
  color: black;
}
</style>
