/*
  global expect
  global it
  global describe
*/

import React from 'react'
import { mount } from 'enzyme'
import App from '../../src/react/app'

describe('<App> Component', () => {
  it('Should be defined', () => {
    expect(App).toBeDefined()
  })

  it('Should be able to render', () => {
    const app = mount(<App />)
    expect(app).toBeDefined()
  })
})
