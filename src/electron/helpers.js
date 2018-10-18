/**
 * Obtains the window position
 * @param {Electron.window} window The window whose position to get
 * @param {Electron.Tray} tray The tray the application runs in
 * @returns {object} The x and y coordinates of the window
 */
export const getWindowPosition = (window, tray) => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

  // Position window 5 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 5)

  return { x, y }
}

/**
 * Shows a window
 * @param {Electron.Window} window The window to show
 * @param {Electron.Tray} tray The tray to display the window from
 */
export const showWindow = (window, tray) => {
  const position = getWindowPosition(window, tray)
  window.setPosition(position.x, position.y, false)
  window.show()
  window.focus()
}

/**
 * Toggles the display of a window
 * @param {Electron.Window} window The window to toggle
 * @param {Electron.Tray} tray The tray to display the window from
 */
export const toggleWindow = (window, tray) => {
  if (window.isVisible()) {
    window.hide()
  } else {
    showWindow(window, tray)
  }
}
