import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchShows from './SearchShows.vue'
import axios from 'axios'

vi.mock('axios')

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms))

describe('SearchShows', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchShows, {})
    expect(wrapper.text()).toContain('Search your favorite show 🎥')
  })

  it('shows a search result list', async () => {
    const wrapper = mount(SearchShows, {})

    // Mock the axios search request
    const apiReturnData = [
      {
        rating: 1,
        show: {
          id: 1,
          name: 'Game of Thrones',
          imageSrc: '/game-of-thrones.png'
        }
      }
    ]
    axios.get.mockResolvedValue({
      data: apiReturnData
    })

    // We don't expect search results in the beginning.
    const searchResultItemList = await wrapper.find('[data-test="search-results"]')
    expect(searchResultItemList.exists()).toBe(false)

    const input = await wrapper.get('[data-test="search-input"]')
    await input.setValue('Game of Thrones')

    // We have to wait for the debounce to trigger after 500ms.
    // TODO find a more elegant way to fix this.
    await sleep(750)

    // After searching, expect there to be a search result.
    const newSearchResultItemList = await wrapper.find('[data-test="search-results"]')
    expect(newSearchResultItemList.exists()).toBe(true)
  })
})
