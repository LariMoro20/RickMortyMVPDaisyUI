<template>
  <footer class="bg-black flex justify-center py-4">
    <div class="text-center">
      <img class="footer-logo-img mx-auto" src="/images/logo.png" alt="Rick and Morty App" />
      <small class="block mt-2 text-white">
        <a
          href="https://larissa-santos.vercel.app"
          target="_blank"
          rel="noopener"
          class="link link-hover text-white"
        >
          {{ year }} © by Larissa Santos
        </a>
      </small>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer-logo-img {
  width: 120px;
}
</style>
