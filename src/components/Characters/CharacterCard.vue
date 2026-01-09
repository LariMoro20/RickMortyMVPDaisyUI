<template>
  <div
    class="card bg-base-100 border border-base-300 shadow-sm transition-all hover:shadow-md hover:bg-base-200"
  >
    <figure class="px-4 pt-4">
      <img :src="image" :alt="name" class="rounded-box w-full max-w-[200px]" loading="lazy" />
    </figure>

    <div class="card-body gap-3">
      <div class="flex items-start justify-between gap-2">
        <h2 class="card-title text-base font-semibold">
          {{ name }}
        </h2>

        <span class="badge" :class="statusBadgeClass">
          {{ status }}
        </span>
      </div>

      <div class="text-sm space-y-1 opacity-80">
        <p>
          <span class="font-medium">Espécie:</span>
          {{ species }}
        </p>

        <p v-if="type">
          <span class="font-medium">Tipo:</span>
          {{ type }}
        </p>

        <p>
          <span class="font-medium">Gênero:</span>
          {{ gender }}
        </p>

        <p>
          <span class="font-medium">Origem:</span>
          {{ origin?.name }}
        </p>

        <p>
          <span class="font-medium">Localização:</span>
          {{ location?.name }}
        </p>
      </div>

      <div class="card-actions justify-between items-center mt-2">
        <span class="text-xs opacity-70"> {{ episode.length }} episódios </span>

        <a :href="url" target="_blank" rel="noopener" class="btn btn-ghost btn-xs"> Ver API </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: Object,
  location: Object,
  image: String,
  episode: Array,
  url: String,
})

const statusBadgeClass = computed(() => {
  if (props.status === 'Alive') return 'badge-success'
  if (props.status === 'Dead') return 'badge-error'
  return 'badge-neutral'
})
</script>
