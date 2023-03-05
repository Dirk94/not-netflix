<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import * as api from '../services/api.js'
import ShowDetailItem from '../components/Show/ShowDetailItem.vue'
const route = useRoute()

const state = reactive({
  show: null,
  isLoading: true
})

onMounted(async () => {
  state.show = await api.getShowDetails({ id: route.params.id })
  state.isLoading = false
})
</script>

<template>
  <ShowDetailItem
    v-if="state.show"
    :name="state.show?.name"
    :genres="state.show?.genres"
    :image-src="state.show?.image?.medium"
    :summary="state.show?.summary"
  />
</template>

<style scoped>
.content {
  display: flex;
}

.cover {
  border-radius: 8px;
}
</style>
