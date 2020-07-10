const {app, BrowserWindow, Menu} = require('electron');

Menu.setApplicationMenu(false); // remove menu line

let win;

createWindow = () => {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: __dirname + '/assets/icon.ico'
  });

  win.loadURL('https://google.com/'); // url to open

//  win.webContents.openDevTools(); // open development tools

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  app.quit();
});
