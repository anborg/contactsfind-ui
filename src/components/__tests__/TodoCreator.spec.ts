import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoCreator from '../TodoCreator.vue'
//codingpr.com/test-your-vue-3-app-with-vitest-and-vue-test-utils/
https: describe('TodoCreator', () => {
  function mountTheComponent() {
    const wrapper = mount(TodoCreator, {uiState:{todoText: '',
    invalid: true,
    errorMsg: ''}})
    return wrapper
  }

  it('Mounts properly', () => {
    const wrapper = mountTheComponent()
    expect(wrapper).toBeTruthy()
    // Check the Create button mounts
    expect(wrapper.text()).toContain('Create')
  })
})
