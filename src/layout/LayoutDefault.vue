<template>
  <div class="h-screen">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
