$(document).ready(function(){
$(function() {
var asesor = document.querySelector("#firma_asesor");
var pintor = document.querySelector("#firma_pintor");
var hojalatero = document.querySelector("#firma_hojala");
var mecanico = document.querySelector("#firma_mecanico");
	if (asesor && pintor && hojalatero && mecanico) {
		asesor.height = asesor.offsetHeight;
		asesor.width = asesor.offsetWidth;
		pintor.height = pintor.offsetHeight;
		pintor.width = pintor.offsetWidth;
		hojalatero.height = hojalatero.offsetHeight;
		hojalatero.width =hojalatero.offsetWidth;
		mecanico.height = mecanico.offsetHeight;
		mecanico.width = mecanico.offsetWidth;
 
		resizeCanvas(asesor);
		resizeCanvas(pintor);
		resizeCanvas(hojalatero);
		resizeCanvas(mecanico);
		signature_asesor = new SignaturePad(asesor);
		signature_pintor = new SignaturePad(pintor);
		signature_hojalatero = new SignaturePad(hojalatero);
		signature_mecanico = new SignaturePad(mecanico);

		$('#borrar_asesor').click(function() { signature_asesor.clear() });
		$('#borrar_pintor').click(function() { signature_pintor.clear() });
		$('#borrar_hoja').click(function() { signature_hojalatero.clear() });
		$('#borrar_meca').click(function() { signature_mecanico.clear() });
	}
});

$('#manobraGuardar').click(function(event) {
	alert("szds");
	const data = new FormData();
	data.append('token', $("#token").val());
	data.append('usuario', $("#usuario").val());
	data.append('manoObra', $("#manoObra").val());
	data.append('refaccion', $("#refaccion").val());
	data.append('costoHojalateria', $("#rdH").val());
	data.append('costoPintura', $("#rdP").val());
	data.append('costoMecanica', $("#rdM").val());
	$.ajax({
		url: $("#urloperacione").val(),
		method: 'POST',
		data: data,
		contentType: false,
		processData: false,
		success: function(response){
			console.log(response)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		}
	});

});
});
