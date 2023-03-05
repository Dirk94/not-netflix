import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowItem from './ShowItem.vue'

describe('ShowItem', () => {
  it('renders the correct image and alt tags', async () => {
    const wrapper = mount(ShowItem, {
      props: {
        id: 1,
        name: 'Game of Thrones',
        imageSrc: '/game-of-thrones.png'
      }
    })

    const image = await wrapper.get('[data-test="image"]')

    expect(image.attributes('src')).toEqual('/game-of-thrones.png')
    expect(image.attributes('alt')).toEqual('Game of Thrones cover')
  })
})
