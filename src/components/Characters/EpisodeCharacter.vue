<template>
  <div class="avatar-group -space-x-6">
    <div class="avatar" v-for="(character, key) in characterFilter" :key="key">
      <div class="w-12">
        <img :src="getImage(character)" />
      </div>
    </div>
    <div class="avatar avatar-placeholder" v-if="characters?.length > 5">
      <div class="bg-neutral text-neutral-content w-12">
        <span>+{{ characters.length - 5 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  characters: Array,
})
const getImage = (url) => {
  const newURL = url.replace(
    'https://rickandmortyapi.com/api/character/',
    'https://rickandmortyapi.com/api/character/avatar/',
  )
  return `${newURL}.jpeg`
}
const characterFilter = computed(() => {
  if (!props.characters) return []
  if (props.characters.length > 5) {
    return props.characters.slice(0, 5)
  }
  return props.characters
})
</script>
