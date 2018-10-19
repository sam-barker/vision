/*
  global expect
  global it
  global describe
*/

import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
import View, { UnstyledView } from '../../../../../src/react/components/view'

describe('<View> Component', () => {
  it('Should be defined', () => {
    expect(View).toBeDefined()
  })

  it('Should have proptypes', () => {
    expect(UnstyledView.propTypes).toEqual({
      classes: PropTypes.object.isRequired
    })
  })

  it('Should be able to render', () => {
    const view = mount(<View />)
    expect(view).toBeDefined()
  })

  it('Should be able to render children', () => {
    const helloWorld = 'Hello World'
    const view = mount(
      <View>
        <p>{helloWorld}</p>
      </View>
    )
    expect(view).toBeDefined()
    expect(view.text()).toContain(helloWorld)
  })
})
