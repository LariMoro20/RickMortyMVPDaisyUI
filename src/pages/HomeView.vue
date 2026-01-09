<script setup>
import axios from 'axios'
const episodes = ref([])
const episodeSelected = ref()
const actualPage = ref(1)
const totalPages = ref(0)
const modal = ref(false)
const getEpisodesData = async (page) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
    episodes.value = response.data.results
    totalPages.value = response.data.info.pages
    actualPage.value = page
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getEpisodesData(actualPage.value)
})

const openModal = (epId) => {
  episodeSelected.value = epId
  modal.value = true
}
</script>

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
          @click="getEpisodesData(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>

    <EpisodeModal v-model="modal" :id="episodeSelected" />
  </main>
</template>
