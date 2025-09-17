import type { filterParamType } from "@/stores/animalStore";
import { defineStore } from "pinia";
import { computed, ref, toRaw } from "vue";


interface IListener {
  id: number;
  param: filterParamType;
  state: boolean;
}

const useLabelBoardObserver = defineStore('label', () => {
  const listeners = ref<Array<IListener>>([]);
  const isFirst = ref(false)
  const activeListener = computed<IListener | undefined>(() =>
  listeners.value.find(el => el.state === true)
)

function addListener(listener: IListener) {
  if (isFirst.value === false) {
    listener.state = true
    isFirst.value = true
  }
  listeners.value.push(listener)
}
  function updateListeners(listener: IListener) {
    listeners.value.forEach((listenerEl) => {
      if(listenerEl.id == listener.id){
        listenerEl.state = listener.state
      } else {
        listenerEl.state = false
      }
    })
  }
  function clearStore(){
    listeners.value = []
  }
  return {
    listeners,
    activeListener,
    addListener,
    updateListeners,
    clearStore
  }
});
export default useLabelBoardObserver
