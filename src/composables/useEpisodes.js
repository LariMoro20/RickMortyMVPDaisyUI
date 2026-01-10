import { useQuery } from '@pinia/colada'
import axios from 'axios'

export function useEpisodes(page) {
  return useQuery({
    key: () => ['episodes', page.value],
    query: async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page.value}`
      )
      return response.data
    },
  })
}

export function useEpisode(id) {
  return useQuery({
    key: () => ['episode', id.value],
    query: async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id.value}`
      )
      return response.data
    },
    enabled: () => !!id.value,
  })
}

export function useCharacters(urls) {
  return useQuery({
    key: () => ['characters', urls.value],
    query: async () => {
      const requests = urls.value.map((url) => axios.get(url))
      const responses = await Promise.all(requests)
      return responses.map((res) => res.data)
    },
    enabled: () => urls.value?.length > 0,
  })
}
