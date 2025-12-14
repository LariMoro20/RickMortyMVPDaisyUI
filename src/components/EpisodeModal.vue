<script setup>
import axios from 'axios'
import { watch } from 'vue'

const props = defineProps({
  id: String,
})
const episode = ref(null)
const getEpisodeData = async () => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${props.id}`)
    episode.value = response.data
  } catch (error) {
    console.error(error)
  }
}

const show = defineModel()
const closeModal = () => {
  show.value = false
}
watch(show, (newValue) => {
  if (newValue) {
    getEpisodeData()
  } else {
    episode.value = null
  }
})
</script>

<template>
  <dialog id="my_modal_1" class="modal" :class="{ 'modal-open': show }">
    <div class="modal-box">
      <template v-if="episode">
        <h3 class="text-lg font-bold">
          {{ episode.name }} <BadgeEpisode>{{ episode.episode }}</BadgeEpisode>
        </h3>
        <!-- Open the modal using ID.showModal() method -->
        <EpisodeCharacter :characters="episode.characters" />

        <p class="py-4">
          <BadgeAirDate>{{ episode.air_date }}</BadgeAirDate>
        </p>
      </template>
      <div v-else class="flex justify-center py-4">
        <span class="loading loading-spinner loading-lg"></span>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn" @click="closeModal">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
