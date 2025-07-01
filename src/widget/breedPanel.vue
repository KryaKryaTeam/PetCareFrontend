<template>
    <input v-model="search" class="input" placeholder="Search breeds" /> 
    <Suspense>
      <template #fallback>
        <p>sorry, need load data please wait</p>
      </template>
      <template #default>
      <div>
        <button v-for="breed in dataRender" :key="breed">
        {{ breed }}
        </button>
    </div>
  </template>
  </Suspense>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { Suspense } from 'vue';

  const search = ref('');
  const dataRender = ref<string[]>([]);
  const data = ref<string[]>([]);
  async function fetchBreeds() {
    try {
      const res = await fetch('http://localhost:3000/breeds/dog');
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
  