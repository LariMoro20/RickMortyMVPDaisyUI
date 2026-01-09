<template>
  <div
    @click="emit('clickEpisode')"
    class="card bg-base-100 border border-base-300 shadow-sm transition-all cursor-pointer hover:shadow-md hover:bg-base-200"
  >
    <div class="card-body gap-3">
      <EpisodeCharacter :characters="characters" />

      <h2 class="card-title text-base font-semibold">
        {{ name }}
        <BadgeEpisode>{{ episode }}</BadgeEpisode>
      </h2>

      <p class="text-sm opacity-80">
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
const emit = defineEmits(['clickEpisode'])

defineProps({
  name: String,
  episode: String,
  air_date: String,
  characters: Array,
})
</script>
