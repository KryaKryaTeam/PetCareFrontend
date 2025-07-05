<template>
  <div class="border-2 border-gray-300 rounded-2xl p-8 max-w-xl mx-auto bg-white shadow-md space-y-6">
    <div class="flex item-center">
    <input 
      v-model="search" 
      class="input w-5/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
      placeholder="Search breeds"
    />
    <button  class="ml-12 rounded hover:bg-gray-100 "  @click="emitClose()" id="" ><CrossI /></button>
  </div>
    <Suspense>
      <template #fallback>
        <p class="text-center text-gray-500 italic">Sorry, loading data. Please wait...</p>
      </template>

      <template #default>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="(breed, index) in dataRender" 
              :key="breed" 
              @click="setBreed(index)"
              :class="[
                'breedButton',
                'px-4 py-2 rounded-lg transition duration-200',
                'focus:outline-none',
                ' text-gray-800',
                 savedIndex === index ? `bg-[#43e681] hover:bg-[#37b868]` : `bg-gray-200 hover:bg-blue-100`
              ]"
              :id="`btnBreed-${index}`"
            >
              {{ breed }}
            </button>
          </div>
          <button 
            @click="sendBreed()" 
            class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition duration-200"
            id="savedBtn"
          >
            Save
          </button>
        </div>
      </template>
    </Suspense>
  </div>
</template>


  <script setup lang="ts">
  import CrossI from '@/shared/icon/crossI.vue';
import { ref, onMounted, watch } from 'vue';
  import { Suspense } from 'vue';

  // data
  const props = defineProps({
    animal: String
  })
  const emit = defineEmits(['breedFromPanel', "ClosePanel"])
  const search = ref('');
  const dataRender = ref<string[]>([]);
  const data = ref<string[]>([]);
  let breedSaved: string | null = ''
  let savedIndex = ref<number | null >(null)
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
    emit("ClosePanel", false)
  }
  const emitClose = () => {
    emit("ClosePanel", false)
  }
  const setBreed = (index: number) => {
  // set value for emit and change color by ternar
  if (savedIndex.value === index) {
    savedIndex.value = null
    breedSaved = null
  } else {
    savedIndex.value = index
    breedSaved = dataRender.value[index]
  }
}
  //  mounts
  onMounted(fetchBreeds);

  // Filter logic
  watch(search, () => {
    dataRender.value = data.value.filter(e =>
      e.toLowerCase().includes(search.value.toLowerCase())
    );
  });
  </script>
  