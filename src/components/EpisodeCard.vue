<template>
  <div
    @click="emit('clickEpisode')"
    class="card bg-base-100 shadow-sm hover:shadow-md hover:bg-neutral-content cursor-pointer"
  >
    <EpisodeCharacter :characters="characters" />
    <div class="card-body">
      <h2 class="card-title">
        {{ name }}
        <BadgeEpisode>{{ episode }}</BadgeEpisode>
      </h2>
      <p>
        A card component has a figure, a body part, and inside body there are title and actions
        parts
      </p>
      <div class="card-actions justify-end">
        <BadgeAirDate>{{ air_date }}</BadgeAirDate>
      </div>
    </div>
  </div>
</template>

<script setup>
import EpisodeCharacter from './EpisodeCharacter.vue'
const emit = defineEmits(['clickEpisode'])
const props = defineProps({
  name: String,
  episode: String,
  air_date: String,
  characters: Array,
})
</script>
