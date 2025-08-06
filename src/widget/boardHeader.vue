<template>
  <header>
    <div class="container">
      <router-link to="/app/board"><img src="/images/Logo.svg" class="logo" /></router-link>

      <div class="icons">
        <img src="/images/bell.svg" />
        <img src="/images/Menu.svg" />
        <img src="/images/Account.svg" />
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 150px;
  background-color: #faf6ee;
}

.icons {
  display: flex;
  gap: 50px;
}

.logo {
  height: 40px;
}
</style>
