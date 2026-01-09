<template>
  <div class="card bg-base-100 shadow-sm hover:shadow-md transition">
    <figure class="px-4 pt-4">
      <img :src="image" :alt="name" class="rounded-xl w-full object-cover" />
    </figure>

    <div class="card-body gap-3">
      <div class="flex items-start justify-between">
        <h2 class="card-title text-base">
          {{ name }}
        </h2>

        <span class="badge badge-sm" :class="statusBadge">
          {{ status }}
        </span>
      </div>

      <div class="text-sm opacity-80 space-y-1">
        <p><span class="font-semibold">Espécie:</span> {{ species }}</p>

        <p><span class="font-semibold">Gênero:</span> {{ gender }}</p>

        <p><span class="font-semibold">Origem:</span> {{ origin?.name }}</p>

        <p><span class="font-semibold">Localização:</span> {{ location?.name }}</p>
      </div>

      <div class="card-actions justify-between items-center mt-2">
        <span class="badge badge-outline badge-sm"> {{ episode.length }} episódios </span>

        <span class="text-xs text-base-content/60"> Criado em {{ formattedCreated }} </span>
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
  created: String,
})

const formattedCreated = computed(() => {
  if (!props.created) return ''
  return new Date(props.created).toLocaleDateString('pt-BR')
})

const statusBadge = computed(() => {
  if (props.status === 'Alive') return 'badge-success'
  if (props.status === 'Dead') return 'badge-error'
  return 'badge-neutral'
})
</script>
