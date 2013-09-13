mQR.js - A mobile JS QR-Scanner
======================

About
-----
This is a JavaScript mainly for scanning QR codes with mobile devices, using just basic HTML5.
It's mainly just a composition of different JS libraries, and other people hva done most of the work.
The idea is to have a simple .js file to include in projects where you just need a quick and dirty QR code scanner.
The problem with just jsqrcode is that on mobile devices it breaks if the images are too big. So this script resizes
the image and then scans it.

How To
------
Just include jQuery and the qr.min.js file. Then just listen for change on your HTML input:
```JavaScript
$('#cameraInput').change(function(e) {
	readQR(this, function(data) {
		alert(data);
    });
});
```

Use
```HTML
<input type="file" capture="camera" accept="image/*" id="cameraInput" style="width:200px;height:200px;opacity:0;cursor:pointer;">
```
to enable direct upload from camera on mobile device (iOS6 at least)

The demo application should be sufficient to just get it up and running.

Compatibility
-------------
This is not tested thoroughly at all. But a quick test has been done on:

* iOS 6 - Chrome and Safari
* Windows - Chrome
* Mac OS X - Chrome

Library
-------
These are all included in the qr.min.js file. If you want to remove them you'll have to import the different librarys individually.

* canvasResize - [GitHub](https://github.com/gokercebeci/canvasResize) - [MIT License](https://github.com/gokercebeci/canvasResize/blob/master/LICENCE.md)
 * binaryajax - [GitHub](https://github.com/jseidelin/binaryajax) - [MPL License](http://www.mozilla.org/MPL/1.1/index.txt)
 * exif - [GitHub](https://github.com/jseidelin/exif-js) - [MPL License](http://www.mozilla.org/MPL/1.1/index.txt)
* jsqrcode - [GitHub](https://github.com/LazarSoft/jsqrcode) - [Apache License](http://www.apache.org/licenses/LICENSE-2.0.txt)