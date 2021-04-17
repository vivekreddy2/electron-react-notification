const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

if (isDev) {
require('electron-reload')(__dirname, {
	electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

}

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: 'white',
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	win.loadFile('index.html');
}

ipcMain.on('notify', (event, message) => {
	new Notification({title: 'Notification', body: message }).show();
});

app.whenReady().then(createWindow);
