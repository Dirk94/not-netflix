<script setup>
import { reactive, onMounted } from 'vue'
import SearchInput from '../components/Search/SearchShows.vue'
import ShowList from '../components/Show/ShowList.vue'
import { store } from '../services/store.js'

const GENRES_TO_SHOW = ['Drama', 'Horror']

const state = reactive({
  isLoading: true,
  showsTopRated: [],
  showsByGenre: []
})

onMounted(async () => {
  const allShows = await store.getAllShows()

  state.topRatedShows = allShows.filter((item) => item.rating?.average >= 7.5)

  GENRES_TO_SHOW.forEach((genre) => {
    state.showsByGenre.push({
      title: `${genre} shows`,
      items: allShows.filter((item) => item.genres?.includes(genre))
    })
  })

  state.isLoading = false
})
</script>

<template>
  <main v-if="!state.isLoading">
    <SearchInput />

    <ShowList :items="state.topRatedShows">
      <h2>Top rated shows</h2>
    </ShowList>

    <ShowList v-for="genre in state.showsByGenre" :items="genre.items" :key="genre.title">
      <h2>{{ genre.title }}</h2>
    </ShowList>
  </main>
</template>
