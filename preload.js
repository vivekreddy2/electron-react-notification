const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      console.log('preload sendNotification1')
      ipcRenderer.send('notify', message);
    }
  },
  batteryAPI: {

  },
  filesApi: {

  }
})