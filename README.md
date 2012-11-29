Appcelerator Titanium iPhone Camera Flash 
=========================================

A simple collection of tools for the iOS Camera Flash.


Registering the module
----------------------

Register the module with your application by editing `tiapp.xml` and adding your module.
Example:

<modules>
	<module version="0.1">com.noizeramp.cameraflash</module>
</modules>


Using the module in code
------------------------

To use the module in code, you will need to require it. 

For example,

  	var CameraFlash = require('com.noizeramp.cameraflash');


Detecting camera flash availability
-----------------------------------

    CameraFlash.isCameraFlashAvailable()

