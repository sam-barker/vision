/*
  global expect
  global it
  global describe
  global jest
*/

import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
import Bar, { UnstyledBar } from '../../../../../src/react/components/bar'

describe('<Bar> Component', () => {
  it('Should be defined', () => {
    expect(Bar).toBeDefined()
  })

  it('Should be able to render', () => {
    const bar = mount(
      <Bar
        toggleEnabled={jest.fn()}
        title={'Test Title'}
      />
    )
    expect(bar).toBeDefined()
  })

  it('Should have proptypes', () => {
    expect(UnstyledBar.propTypes).toEqual({
      classes: PropTypes.object.isRequired,
      toggleEnabled: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired,
      enabled: PropTypes.bool
    })
  })

  it('Should have defaultprops', () => {
    expect(UnstyledBar.defaultProps).toEqual({
      enabled: true
    })
  })

  it('Should render a disabled switch when disabled', () => {
    const bar = mount(
      <Bar
        enabled={false}
        toggleEnabled={jest.fn()}
        title={'Test Title'}
      />
    )
    expect(bar).toBeDefined()
    const disabledSwitch = bar.find('Switch')
    const { checked } = disabledSwitch.props()
    expect(checked).toEqual(false)
  })

  it('Should render an enabled switch when enabled', () => {
    const bar = mount(
      <Bar
        enabled
        toggleEnabled={jest.fn()}
        title={'Test Title'}
      />
    )
    expect(bar).toBeDefined()
    const enabledSwitch = bar.find('Switch')
    const { checked } = enabledSwitch.props()
    expect(checked).toEqual(true)
  })
})
