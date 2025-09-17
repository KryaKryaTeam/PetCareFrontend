<template>
  <section>
    <div>
   <UiLabel text="active" :active="true" :id="1"/>

    <UiLabel text="archived" :id="2"/>
    <!-- <span v-for="value in source"><UiLabel /></span> -->
    </div>
  </section>
</template>
<script setup lang="ts">
import UiLabel from '@/shared/ui/UiLabel.vue'

</script>
