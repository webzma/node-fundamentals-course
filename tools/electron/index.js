const { BrowserWindow, app } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    width: 600,
  });

  mainWindow.loadFile("index.html");
}

app.on("ready", createWindow);
