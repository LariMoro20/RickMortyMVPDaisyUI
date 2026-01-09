<template>
  <div
    class="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1"
  >
    <figure class="px-4 pt-4">
      <img :src="image" :alt="name" class="rounded-xl w-full object-cover" />
    </figure>

    <div class="card-body p-4">
      <h2 class="card-title text-base leading-tight">
        {{ name }}
      </h2>

      <div class="flex flex-wrap gap-2 text-xs">
        <span class="badge badge-outline">{{ status }}</span>
        <span class="badge badge-outline">{{ species }}</span>
        <span class="badge badge-outline">{{ gender }}</span>
      </div>

      <div class="mt-2 text-xs text-base-content/70">
        <p><span class="font-semibold">Origem:</span> {{ origin?.name }}</p>
        <p><span class="font-semibold">Local:</span> {{ location?.name }}</p>
      </div>

      <div class="mt-3 text-xs text-base-content/60">Criado em: {{ formattedDate }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  status: String,
  species: String,
  gender: String,
  origin: Object,
  location: Object,
  image: String,
  created: String,
})

const formattedDate = computed(() => new Date(props.created).toLocaleDateString('pt-BR'))
</script>
