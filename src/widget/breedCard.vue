<template>
<button>

</button>
</template>
<script setup lang="ts">
import useAnimalStore from '@/stores/animalStore';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: String,
  animaltype: String,
  name: String
})
const router = useRouter()
const aimal = useAnimalStore()
const handleRequest = () => {

}
</script>
