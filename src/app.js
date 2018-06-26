const { app, BrowserWindow } = require('electron')
const SignWindow = require('./windows/controllers/login')
const MainWindow = require('./windows/controllers/main')

class Courseware {
  constructor() {
    this.signwindow = null;
    this.MainWindows = [];
    this.screenW = 1024;
    this.screenH = 768;
  }

  init() {
    if (this.verifyLogin()) {
      this.addMainWindow();
    } else {
      this.showSignWindow();
    }
  }

  verifyLogin() {
    return false;
  }

  addMainWindow() {
    const mainTtemWindow = new MainWindow();
    mainTtemWindow.create(this.screenW, this.screenH);
    this.MainWindows.push(mainTtemWindow);
  }

  showSignWindow() {
    if (this.signwindow === null) {
      this.signwindow = new SignWindow();
    }
    this.signwindow.show();
  }

}
const myCourseware = new Courseware();

app.on('ready', () => {
  const {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize
  myCourseware.screenW = width;
  myCourseware.screenH = height;
  myCourseware.init();
})
app.on('activate', () => {

})
app.on('window-all-closed', () => {
  app.quit()
})