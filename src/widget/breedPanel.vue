<template>
  <div class="border-2 border-gray-300 rounded-2xl p-8 max-w-xl mx-auto bg-white shadow-md space-y-6">
    <input 
      v-model="search" 
      class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
      placeholder="Search breeds"
    />

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
                'bg-gray-200 text-gray-800 hover:bg-blue-100'
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
  let breedSaved: string | null = ''
  let savedIndex: number | null;
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

  const setBreed = (index: number) => {
    // style changes
    const pastBtn = document.getElementById(`btnBreed-${savedIndex}`)
    const btn = document.getElementById(`btnBreed-${index}`)
    if(savedIndex === index && btn && pastBtn){
      btn.style.backgroundColor = "oklch(92.8% 0.006 264.531)"
      savedIndex = null;
      breedSaved = null;
      return
    }
    if (btn) {
    btn.style.backgroundColor = "#43e681"
    }
    if(pastBtn){
      pastBtn.style.backgroundColor = "oklch(92.8% 0.006 264.531)"
    }
    // set value
    savedIndex = index
    breedSaved = dataRender.value[index] 
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
  