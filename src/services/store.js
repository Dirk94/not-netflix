import { reactive } from 'vue'
import * as api from './api'

export const store = reactive({
  allShows: [],

  async getAllShows() {
    // Very simple cache to not call the API if not needed.
    if (this.allShows?.length > 0) {
      return this.allShows
    }
    this.allShows = await api.getAllShows()
    return this.allShows
  }
})
