import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowDetailItem from './ShowDetailItem.vue'

describe('ShowDetailItem', () => {
  it('renders the correct values', async () => {
    const wrapper = mount(ShowDetailItem, {
      props: {
        id: 1,
        name: 'Game of Thrones',
        genres: ['Horror', 'Action'],
        imageSrc: '/game-of-thrones.png',
        summary: 'Game of Trones is a series about winter.'
      }
    })

    const name = await wrapper.get('[data-test="name"]')
    expect(name.text()).toEqual('Game of Thrones')

    const genres = await wrapper.get('[data-test="genres"]')
    expect(genres.text()).toEqual('Genres: Horror, Action')

    const image = await wrapper.get('[data-test="cover"]')
    expect(image.attributes('src')).toEqual('/game-of-thrones.png')

    const summary = await wrapper.get('[data-test="summary"]')
    expect(summary.text()).toEqual('Game of Trones is a series about winter.')
  })
})
