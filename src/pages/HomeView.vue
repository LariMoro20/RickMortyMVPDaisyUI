<template>
  <main class="p-4 bg-base-200">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EpisodeCard
        v-for="episode in episodes"
        :key="episode.id"
        :name="episode.name"
        :episode="episode.episode"
        :air_date="episode.air_date"
        :characters="episode.characters"
        @clickEpisode="openModal(episode.id)"
      />
    </div>
    <div class="flex justify-center py-5">
      <div class="join">
        <button
          class="join-item btn btn-lg md:btn-md"
          :class="{ 'btn-active': page === actualPage }"
          v-for="page in totalPages"
          @click="actualPage = page"
        >
          {{ page }}
        </button>
      </div>
    </div>

    <EpisodeModal v-model="modal" :id="episodeSelected" />
  </main>
</template>

<script setup>
import { useEpisodes } from '@/composables/useEpisodes'

const episodeSelected = ref()
const actualPage = ref(1)
const modal = ref(false)
const episodes = computed(() => episodesData.value?.results ?? [])
const totalPages = computed(() => episodesData.value?.info?.pages ?? 0)
const { data: episodesData, isLoading, error } = useEpisodes(actualPage)

const openModal = (epId) => {
  episodeSelected.value = epId
  modal.value = true
}
</script>
