function readQR(input, callback) {
	qrcode.callback = callback;
	var file = input.files[0];
	canvasResize(file, {
	    width: 800,
	    height: 0,
	    crop: false,
	    quality: 80,
	    callback: function(data) {
	       	qrcode.decode(data);
    	}
   	});
}