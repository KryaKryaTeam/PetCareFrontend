<script setup lang="ts">
import ContainerComp from '@/shared/containers/containerComp.vue'
</script>

<template>
  <header>
    <ContainerComp>
      <div class="algin">
        <img src="/images/Logo.svg" class="logo" />
        <nav class="navigationMenu">
          <RouterLink to="/listing/#home"><p class="link">Home</p></RouterLink>
          <RouterLink to="/listing/#features"><p class="link">Features</p></RouterLink>
          <RouterLink to="/listing/pricing"><p class="link">Pricing</p></RouterLink>
          <RouterLink to="/listing/#reviews"><p class="link">Reviews</p></RouterLink>
          <RouterLink to="/listing/#contact"><p class="link">Contacts</p></RouterLink>
        </nav>
        <RouterLink to="/app/auth/singin">
          <img class="account" src="/images/AccountIcon.svg" />
        </RouterLink>
      </div>
    </ContainerComp>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 100px;
  background-color: #faf6ee;
  .algin {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #209aa6 solid;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .account {
    width: 50px;
    height: 50px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
  }
  .navigationMenu {
    width: 50%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .link {
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      font-family: 'Inter';
      text-decoration: none;
      color: #514f4d;
    }
    .link:hover {
      color: #1f1f1f;
    }
  }
}
</style>
