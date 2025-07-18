<script setup lang="ts">
import ContainerComp from "@/shared/components/containerComp.vue"
</script>

<template>
    <footer>
        <ContainerComp>
            <img src="/images/Logo-white.svg" class="img" />
            <div class="row">
                <span class="span"
                    ><RouterLink to="/contact">Contact</RouterLink> |
                    <RouterLink to="/privacy">Privacy Policy</RouterLink> |
                    <RouterLink to="/terms">Terms Of Use</RouterLink></span
                >
                <a href="https://github.com/KryaKryaTeam"><p class="team">Krya Krya Team © 2025</p></a>
            </div>
        </ContainerComp>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #209aa6;
    height: 220px;
    .img {
        margin-top: 50px;
    }
    .row {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .span {
            a {
                color: white;
                font-family: "Inter";
            }
        }
        .team {
            font-family: "Inter";
            color: white;
        }
    }
}
</style>
