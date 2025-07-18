<script setup>
const props = defineProps({ text: { type: String, defualt: "" }, imgUrl: { type: String, defualt: "" } })
</script>

<template>
    <div class="card">
        <img :src="props.imgUrl" />
        <p>{{ props.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 27%;
    height: 180px;
    padding: 40px;
    border: 2px solid #1a7d87;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 25px;
    align-items: center;
    p {
        font-size: 16px;
        font-weight: 400;
        font-family: "Inter";
        line-height: 170%;
        letter-spacing: 10%;
        color: #514f4d;
    }
    img {
        height: 60%;
    }
}
</style>
