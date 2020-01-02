const { app, BrowserWindow, Menu} = require('electron')
function createWindow () {
  var menu =Menu.buildFromTemplate([
    {
      label: 'Application',
      submenu:[
        {label:'Show on screen keyboard'},
        {label:'Automatic upadate'},
        {label:'Check for updates'},
        {type:'separator'},
        {
          label:'Quit',click(){
                app.quit()
              }
       }
  
    ]},
  {
      label: 'Edit',
      submenu:[
        {label:'Undo',accelerator: 'Ctrl+Z'},
        {label:'Redo',accelerator: 'Ctrl+Shift+Z'},
        {label:'Cut',accelerator:'Ctrl+X'},
        {label:'Copy',accelerator:'Ctrl+V'},
        {label:'Paste',accelerator:'Ctrl+V'},
        {label:'Select All',accelerator:'Ctrl+A'}
      ]
    }
  ])
  Menu.setApplicationMenu(menu);
  // and load the index.html of the app.

    // Create the browser window.
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })

  win.loadFile('index.html')
}

app.on('ready', createWindow)
