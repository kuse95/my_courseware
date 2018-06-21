const path = require('path');
const { BrowserWindow } = require('electron');
const { signData, isDebug } = require('../../util/config');

class SignWindow {
  constructor() {
    this.signwindow = new BrowserWindow({
      width: signData.WIDTH,
      height: signData.HEIGHT,
      frame: false,
      transparent: true,
      autoHideMenuBar: true,
      show: false,
      resizable: false,
      alwaysOnTop: true
    });
    this.signwindow.loadFile(path.join(__dirname, '/../views/login.html'));
    if(isDebug){
      this.signwindow.webContents.openDevTools();
    }
    this.isShown = false;
  }

  show() {
    this.signwindow.show();
    this.isShown = true;
  }

  hide() {
    this.signwindow.hide();
    this.isShown = false;
  }
}

module.exports = SignWindow;