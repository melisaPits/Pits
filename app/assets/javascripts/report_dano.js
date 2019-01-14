$(function() {
	var canvas = document.querySelector("#firma_canvas1");
	var firma_pintor = document.querySelector("#firma_canvas2");
  	if (canvas){
  		if(canvas.id === "firma_canvas1" && firma_pintor.id === "firma_canvas2"){
	    	canvas.height = canvas.offsetHeight;
	    	canvas.width = canvas.offsetWidth;
	    	firma_pintor.height = firma_pintor.offsetHeight;
	    	firma_pintor.width = firma_pintor.offsetWidth;
	    	//window.onresize = resizeCanvas(canvas);
	    	resizeCanvas(canvas);
	    	resizeCanvas(firma_pintor);
	    	signature_pad = new SignaturePad(canvas);
	    	signature_danos = new SignaturePad(firma_pintor);
	    	var ctx = firma_pintor.getContext("2d");
	    	var img = document.getElementById("autos");
	    	var image = document.querySelector("#autos");
	    	image.addEventListener('load', function(){
	    		ctx.drawImage(img, 0, 0);
	    	});    	
	    	$('#firma_asesor').click(function() { signature_pad.clear() });
	    	$('#firma_pintor').click(function() { 
	    		signature_danos.clear();
		    	ctx.drawImage(img, 0, 0);
	    	});
	    	$('#extrasGuardar').click(function(event) { 
	     		if (signature_pad.isEmpty()){
	        		alert('Debes firmar');
	      		} else {
					const data = new FormData();
				  	data.append('firmaasesor', base64ImageToBlob(signature_pad.toDataURL()));
				  	data.append('firmapintor', base64ImageToBlob(signature_danos.toDataURL()));
}
}
}
}
function resizeCanvas( canvas ) {
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}
function base64ImageToBlob(str) {
  // extract content type and base64 payload from original string
  var pos = str.indexOf(';base64,');
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for(var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  var blob = new Blob([buffer], { type: type });

  return blob;
}
	    