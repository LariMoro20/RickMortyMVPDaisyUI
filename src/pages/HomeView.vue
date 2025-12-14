<script setup>
const text = ref('')
</script>

<template>
  <main class="p-4">HOME</main>
  <input type="text" v-model="text" placeholder="Type here" class="input" />
  {{ text }}
</template>
