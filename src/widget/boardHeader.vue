<template>
  <header>
    <div class="container">
      <img src="/images/Logo.svg" class="logo" />

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
  background-color: #FAF6EE;
}

.icons {
  display: flex;
  gap: 50px;
}

.logo {
  height: 40px;
}
</style>
