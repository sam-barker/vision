/*
  global expect
  global it
  global describe
*/

import React from 'react'
import { mount } from 'enzyme'
import App from '../../../src/react/app'

describe('<App> Component', () => {
  it('Should be defined', () => {
    expect(App).toBeDefined()
  })

  it('Should be able to render', () => {
    const app = mount(<App />)
    expect(app).toBeDefined()
  })

  it('Should render the disabled view when disabled', () => {
    const app = mount(<App />)
    expect(app).toBeDefined()
    const switchToClick = app.find('Switch').at(0)
    switchToClick.props().onChange()
    app.update()
    expect(app.state('enabled')).toEqual(false)
    expect(app.text()).toContain('Vision is disabled!')
  })
})
