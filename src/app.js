const { app, BrowserWindow } = require('electron')
const SignWindow = require('./windows/controllers/login')

class Courseware{
  constructor() {
    this.signwindow = null;
  }

  init() {
    if(this.verifyLogin()){

    }else{
      this.showSignWindow();
    }
  }

  verifyLogin() {
    return false;
  }

  showSignWindow() {
    if(this.signwindow === null){
      this.signwindow = new SignWindow();
    }
    this.signwindow.show();
  }

}
const myCourseware = new Courseware();
app.on('ready', () => {
  myCourseware.init();
})
app.on('activate', () => {

})
app.on('window-all-closed', () => {
  app.quit()
})