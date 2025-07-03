<template class="border-2 m-12">
  <input v-model="search" class="input" placeholder="Search breeds" /> 

  <Suspense>
    <template #fallback>
      <p>sorry, need load data please wait</p>
    </template>

    <template #default>
      <div>
        <div class="flex flex-col w-40">
          <button 
            v-for="(breed, index) in dataRender" 
            :key="breed" 
            class="btn min-w-3xs"
            @click="setBreed(index)"
          >
            {{ breed }}
          </button>
        </div>
        <button @click="sendBreed()" class="btn" >save</button>
      </div>
    </template>
  </Suspense>
</template>

  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { Suspense } from 'vue';
  // data
 const props = defineProps({
  animal: String
 })
  const emit = defineEmits(['breedFromPanel'])
  const search = ref('');
  const dataRender = ref<string[]>([]);
  const data = ref<string[]>([]);
  let breedSaved = ''
  // functions
  async function fetchBreeds() {
    try {
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

  const sendBreed = () => {
    emit('breedFromPanel', breedSaved)
  }

  const setBreed = (index: number) => breedSaved = dataRender.value[index]  
  //  mounts
  onMounted(fetchBreeds);

  // Filter logic
  watch(search, () => {
    dataRender.value = data.value.filter(e =>
      e.toLowerCase().includes(search.value.toLowerCase())
    );
  });
  </script>
  