<template>
  <header class="bg-white flex flex-col items-center gap-6">
    <router-link to="/" aria-label="Página inicial">
      <img class="header-logo-img" src="/images/logo.png" alt="Rick and Morty App" />
    </router-link>

    <NavBar />
  </header>
</template>

<style scoped>
.header-logo-img {
  width: 250px;
  max-width: 100%;
}
</style>
