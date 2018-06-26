const path = require('path');
const { BrowserWindow } = require('electron');
const { mainData, isDebug } = require('../../util/config');

class MainWindow {
  constructor() {
    
  }

  create(width, height) {
    this.mainwindow = new BrowserWindow({
      width: width,
      height: height
    });
    this.mainwindow.loadFile(path.join(__dirname, '/../views/main.html'));
    if(isDebug){
      this.mainwindow.webContents.openDevTools();
      require('devtron').install();
    }
  }

  close() {
    this.mainwindow.close();
  }
}

module.exports = MainWindow;