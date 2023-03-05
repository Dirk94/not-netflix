import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowList from './ShowList.vue'

describe('ShowList', () => {
  it('renders the correct number of list items', async () => {
    const wrapper = mount(ShowList, {
      props: {
        items: [
          {
            id: 1,
            name: 'Game of Thrones',
            imageSrc: '/game-of-thrones.png'
          },
          {
            id: 2,
            name: 'Star Wars',
            imageSrc: '/star-wars.png'
          }
        ]
      }
    })

    expect(wrapper.findAll('[data-test="show-item"]')).toHaveLength(2)
  })
})
