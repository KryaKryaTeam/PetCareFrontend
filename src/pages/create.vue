<template>
    <div>
        <form>
            <div>
                <input v-model="form.name" />
                <input v-model="form.age" />
                <select class="select" v-model="form.animalType" placeholder="Pick a animal">
                    <option>dog</option>
                    <option>cat</option>
                    <option>parrot</option>
                </select>
                <BreedPanel
                    v-if="panelStatus"
                    :animal="form.animalType"
                    @breed-from-panel="(data) => (form.breed = data)"
                    class="overlay"
                />
                <input v-model="form.weight" />
            </div>
            <button class="btn">submit</button>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watchEffect } from "vue"
import BreedPanel from "@/widget/breedPanel.vue"
const form = reactive({
    name: "",
    animalType: "",
    age: 0,
    breed: "",
    weight: 0,
})
const panelStatus = ref(false)
const postRequestFromForm = async () => {
    await fetch("twesda", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json",
        },
    })
}
watchEffect(() => {
    console.log("watchEffect triggered, animalType:", form.animalType)
    if (form.animalType != "") {
        panelStatus.value = true
    }
})
</script>
<style lang="css" scoped>
#global {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
