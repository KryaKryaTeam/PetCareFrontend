<script setup lang="ts">
import Slice from '@/shared/ui/slice.vue';

</script>


<template>
   <Teleport to="body">
  <div class="modal-overlay">
    <div class="modal-box">
        <div class="exiet-text">
          <button >back</button>
    </div>
        <div class="modal-text">Please select a board</div>
        <div id="block">
        <Slice :isFirst="true"/>
        <img src="/images/dog-icon.svg" class="img"/>
        <Slice :isFirst="false" class="img"/>
        <img src="/images/cat-icon.svg"/>
        <Slice :isFirst="false" class="img"/>
        <img src="/images/bird-icon.svg"/>
        </div>
    </div>
  </div>
  </Teleport>
</template>
<style lang="css" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  gap: clamp(3vw, 6.5vw, 7vw);
}

.modal-box {
  background-color: #f9f5ec;

  min-width: 300px;
  height: auto;
  padding-left: clamp(4vw, 6.50vw, 9vw);
  padding-right: clamp(4vw, 6.50vw, 9vw);
  padding-bottom: clamp(4vh, 6.50vh, 9vh);
  padding-top: clamp(0.5vh, 2.6vh, 5vh);
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
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  color: #1f1f1f;
  font-weight: 700;
  line-height: auto;
  letter-spacing: 10px;
}
#block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: clamp(1vw, 2vw, 3vw);
}

.img {
  display: flex;
  align-items: center;
}

</style>
