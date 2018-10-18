import { app, ipcMain, BrowserWindow, Tray } from 'electron'
import {
  toggleWindow,
  showWindow
} from './helpers'
import path from 'path'

// To avoid being garbage collected
let tray
let window

/**
 * Creates the tray
 * @param {function} onClick The function to call when the tray is clicked
 * @param {string} iconLocation The location of the icon
 * @returns {Electron.Tray} The created tray
 */
export const createTray = (onClick, iconLocation) => {
  const tray = new Tray(iconLocation)
  tray.on('right-click', onClick)
  tray.on('click', onClick)
  tray.setIgnoreDoubleClickEvents(true)
  return tray
}

/**
 * Creates the application window
 * @returns {Electron.Window} The created window
 */
export const createWindow = () => {
  const window = new BrowserWindow({
    width: 400,
    height: 400,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    webPreferences: {
      backgroundThrottling: false
    }
  })

  window.loadURL(`file://${__dirname}/../../index.html`)

  // Hide the window when it loses focus
  window.on('blur', window.hide)

  return window
}

app.dock.hide()
ipcMain.on('show-window', (event) => {
  event.preventDefault()
  showWindow(window, tray)
})
app.on('window-all-closed', app.quit)
app.on('ready', () => {
  tray = createTray((event) => {
    event.preventDefault()
    toggleWindow(window, tray)
  }, path.resolve(__dirname, '../../assets/eye.png'))
  window = createWindow()
})
