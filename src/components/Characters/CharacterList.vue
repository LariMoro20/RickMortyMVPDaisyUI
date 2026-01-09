<template>
  <div class="space-y-6">
    <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CharacterCard
        v-for="character in paginatedCharacters"
        :key="character.id"
        v-bind="character"
      />
    </section>

    <div v-if="totalPages > 1" class="flex justify-center">
      <div class="join">
        <button class="join-item btn" :disabled="currentPage === 1" @click="prevPage">«</button>

        <button class="join-item btn btn-active">
          Página {{ currentPage }} de {{ totalPages }}
        </button>

        <button class="join-item btn" :disabled="currentPage === totalPages" @click="nextPage">
          »
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import CharacterCard from './CharacterCard.vue'

const props = defineProps({
  characters: {
    type: Array,
    required: true,
    default: () => [],
  },
  itemsPerPage: {
    type: Number,
    default: 8,
  },
})

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.characters.length / props.itemsPerPage))

const paginatedCharacters = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.characters.slice(start, end)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

watch(
  () => props.characters,
  () => {
    currentPage.value = 1
  },
)
</script>
