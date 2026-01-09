<template>
  <dialog class="modal" :class="{ 'modal-open': show }" @click.self="closeModal">
    <div class="modal-box w-full max-w-6xl h-[80vh] p-0 bg-base-100 text-base-content">
      <div class="flex flex-col h-full">
        <template v-if="episode">
          <div class="px-6 py-4 border-b border-base-300 flex items-start justify-between">
            <div>
              <h3 class="text-xl font-bold">
                {{ episode.name }}
                <BadgeEpisode>{{ episode.episode }}</BadgeEpisode>
              </h3>

              <div class="mt-2">
                <BadgeAirDate>{{ episode.air_date }}</BadgeAirDate>
              </div>
            </div>

            <button
              class="btn btn-sm btn-circle btn-ghost"
              @click="closeModal"
              aria-label="Fechar modal"
            >
              ✕
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-6 py-4">
            <template v-if="loadingCharacters">
              <div class="flex justify-center py-10">
                <span class="loading loading-spinner loading-lg"></span>
              </div>
            </template>

            <template v-else>
              <CharacterList :characters="characters" :items-per-page="8" />
            </template>
          </div>
        </template>

        <template v-else>
          <div class="flex-1 flex justify-center items-center">
            <span class="loading loading-spinner loading-lg"></span>
          </div>
        </template>

        <div class="px-6 py-4 border-t border-base-300 flex justify-end">
          <button class="btn btn-primary" @click="closeModal">Fechar</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import axios from 'axios'
import { ref, watch } from 'vue'

const props = defineProps({
  id: String,
})

const show = defineModel()

const episode = ref(null)
const characters = ref([])
const loadingCharacters = ref(false)

const getEpisodeData = async () => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${props.id}`)
    episode.value = response.data
    await getCharacters(response.data.characters)
  } catch (error) {
    console.error(error)
  }
}

const getCharacters = async (urls) => {
  try {
    loadingCharacters.value = true
    const requests = urls.map((url) => axios.get(url))
    const responses = await Promise.all(requests)
    characters.value = responses.map((res) => res.data)
  } catch (error) {
    console.error(error)
  } finally {
    loadingCharacters.value = false
  }
}

const closeModal = () => {
  show.value = false
}

watch(show, (newValue) => {
  if (newValue) {
    getEpisodeData()
  } else {
    episode.value = null
    characters.value = []
  }
})
</script>
