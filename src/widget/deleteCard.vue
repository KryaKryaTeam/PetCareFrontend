<script setup lang="ts">
import useBackdropOpacityV1 from '@/features/composebles/useBackdropOpacity';
import Button from './ui/button.vue';
useBackdropOpacityV1(0.5)
</script>

<template>
    <div>
       <div>
          <span>Are you sure you want to delete this?</span>
       </div>
       <Button />
    </div>
</template>
