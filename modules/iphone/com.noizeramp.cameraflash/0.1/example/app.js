var CameraFlash = require('com.noizeramp.cameraflash');
Ti.API.info("module is => " + cameraflash);

var flashPresent = CameraFlash.isCameraFlashAvailable();

var win = Ti.UI.createWindow({ backgroundColor:'white' });

var label = Ti.UI.createLabel({
  text: flashPresent ? "Flash is available" : "Flash is unavailable" });
win.add(label);
win.open();
