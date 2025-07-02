<template class="border-2 m-12">
    <input v-model="search" class="input" placeholder="Search breeds" /> 
    <Suspense>
      <template #fallback>
        <p>sorry, need load data please wait</p>
      </template>
      <template #default>
      <div class="flex flex-col w-40">
        <button v-for="breed in dataRender" :key="breed" class="btn min-w-3xs" >
        {{ breed }}
        </button>
    </div>
  </template>
  </Suspense>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { Suspense } from 'vue';
 const props = defineProps({
  animal: String
 })
  const search = ref('');
  const dataRender = ref<string[]>([]);
  const data = ref<string[]>([]);
  async function fetchBreeds() {
    try {
      console.log(props.animal)
      const res = await fetch(`http://localhost:3000/breeds/${props.animal}`);
      if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status}`);
      }
      const breeds = await res.json();
      dataRender.value = Array.isArray(breeds) ? breeds : [];
      data.value = [...dataRender.value]
    } catch (err) {
      console.error(err);
      dataRender.value = [];
    }
  }

  onMounted(fetchBreeds);

  // Filter logic
  watch(search, () => {
    dataRender.value = data.value.filter(e =>
      e.toLowerCase().includes(search.value.toLowerCase())
    );
  });
  </script>
  