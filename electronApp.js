const { app, BrowserWindow } = require('electron')

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})
