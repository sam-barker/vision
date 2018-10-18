/*
  global expect
  global it
  global describe
  global jest
*/

import {
  getWindowPosition,
  showWindow,
  toggleWindow
} from '../../src/electron/helpers'

/**
 * Creates an empty mock function using jest
 * @returns {jest.Mock} The mock function
 */
function createEmptyMockFunction () {
  return jest.fn().mockImplementation(() => {})
}

describe('Electron Helpers', () => {
  const getWindowBounds = jest
    .fn()
    .mockImplementation(() => ({ width: 500 }))
  const setPosition = createEmptyMockFunction()
  const show = createEmptyMockFunction()
  const focus = createEmptyMockFunction()
  const hide = createEmptyMockFunction()

  const getTrayBounds = jest
    .fn()
    .mockImplementation(() => ({
      x: 0,
      y: 0,
      width: 1000,
      height: 10
    }))

  const window = {
    getBounds: getWindowBounds,
    setPosition,
    show,
    focus,
    hide
  }
  const tray = { getBounds: getTrayBounds }

  it('Should get the window position correctly', () => {
    const actual = getWindowPosition(window, tray)
    const expected = { x: 250, y: 15 }
    expect(actual).toEqual(expected)
  })

  it('Should show the window', () => {
    showWindow(window, tray)
    expect(setPosition).toHaveBeenCalledWith(
      250,
      15,
      false
    )
    expect(show).toHaveBeenCalled()
    expect(focus).toHaveBeenCalled()
  })

  it('Hides the window if visible when toggled', () => {
    const isVisible = jest.fn().mockImplementation(() => true)
    window.isVisible = isVisible
    toggleWindow(window, tray)
    expect(isVisible).toHaveBeenCalled()
    expect(hide).toHaveBeenCalled()
  })

  it('Shows the window if invisible when toggled', () => {
    const isVisible = jest.fn().mockImplementation(() => false)
    window.isVisible = isVisible
    toggleWindow(window, tray)
    expect(isVisible).toHaveBeenCalled()
    expect(show).toHaveBeenCalled()
  })
})
