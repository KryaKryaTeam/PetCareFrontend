<script setup>
import { useBackground } from "@/features/@types/hooks/useBackground"
import ContainerComp from "@/shared/components/containerComp.vue"
import FooterListing from "@/widget/footerListing.vue"
import HeaderListing from "@/widget/headerListing.vue"

useBackground("/images/BackgroundAuth.png")
</script>

<template>
    <HeaderListing />
    <ContainerComp>
        <RouterView />
    </ContainerComp>
    <FooterListing />
</template>
