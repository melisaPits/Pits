$(document).ready(function(){
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

	$('input[type="radio"]').on("click", function(){
		if($("#reparar").is(":checked")){
			$("#refaccion").prop("disabled", true);
			$("#refaccion").val("");
		}else {
			$("#refaccion").prop("disabled", false);
		} 
	});

	$('#manobraGuardar').click(function(event) {
		alert("guardado");
		const data = new FormData();
		if ($("#reparar").is(':checked')){
				data.append('operacione[tipo]', 1);
			}
			 else if ($("#sustitucion").is(':checked')){
				data.append('operacione[tipo]', 2);
			}
			else{
				alert("selecciona una opción");
				return;
			}
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('operacione[manoObra]', $("#manoObra").val());
		data.append('operacione[refaccion]', $("#refaccion").val());
		data.append('operacione[costoHojalateria]', $("#rdH").val());
		data.append('operacione[costoPintura]', $("#rdP").val());
		data.append('operacione[costoMecanica]', $("#rdM").val());

		var tam = document.getElementById('multiFiles').files.length;
		alert(tam);
		for (var x = 0; x < tam; x++){
			data.append("fotos[]", document.getElementById('multiFiles').files[x]);
		}
		/*for (var pair of data.entries()) {
		    console.log(pair[0]+ ', ' + pair[1]); 
		}
		return;*/
			$("#refaccion").val("");
			$("#manoObra").val("");

		$.ajax({
			url: $("#urloperacione").val(),
			method: 'POST',
			data: data,
			contentType: false,
			processData: false,
			success: function(response){
				console.log(response)
				var data = response.data.attributes;
				if (data.tipo === 1){
					var table = $('#tablamanobra').DataTable();
					table.row.add( [data.tipo, 
									data.manoObra, 
									data.costoHojalateria,
									data.costoPintura,
									data.costoMecanica,
									data.trabExterno,
									0] )
					.draw();
				}
				else{
					var table2 = $('#tablarefacciones').DataTable();
					table2.row.add( [data.tipo, 
									data.refaccion, 
									data.costoC,
									data.precioV,
									data.status,
									0] )
					.draw();
					}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	});
});



function llenarTablas(){
	reparacion.forEach(function(value, index, array){
		var table = $('#tablamanobra').DataTable();
				table.row.add( [value.tipo, 
								value.manoObra, 
								value.costoHojalateria,
								value.costoPintura,
								value.costoMecanica,
								value.trabExterno,
								0] )
				.draw();
	});
	sustitucion.forEach(function(value, index, array){
		var table2 = $('#tablarefacciones').DataTable();
				table2.row.add( [value.tipo, 
								value.refaccion, 
								value.costoC,
								value.precioV,
								value.status,
								0] )
				.draw();
	});
}
