$(document).ready(function(){
	$("#f1").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 1);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f1_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f2").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 2);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f2_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f3").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 3);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f3_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f4").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 4);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f4_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f5").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 5);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f5_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f6").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 6);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f6_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f7").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 7);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f7_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f8").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 8);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f8_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f9").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 9);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f9_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f10").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 10);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f10_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f11").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 11);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f11_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f12").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 12);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f12_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f13").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 13);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f13_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f14").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 14);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f14_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f15").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 15);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f15_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f16").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 16);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f16_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f17").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 17);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f17_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f18").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 18);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f18_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f19").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 19);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f19_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f20").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 20);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f20_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f21").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 21);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f21_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f22").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 22);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f22_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f23").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 23);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f23_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f24").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 24);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f24_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f25").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 25);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f25_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	  });

	$("#f26").on("change", function(){
		var file = $(this)[0].files[0];
		const data = new FormData();
		/*fileList.forEach((file) => {
			data.append('foto', file);
	  	});*/
	  	data.append('foto', file);
	  	data.append('tipo', 26);
		data.append('token', $("#token").val());
		data.append('usuario', $("#usuario").val());
		data.append('siniestro', $("#siniestro").val());
	  	$.ajax({
	    	url: $("#urlFotos").val(),
	    	method: "POST",
	    	data: data,
	    	contentType: false,
    		processData: false,
	    	success: function(response){
	    		$("#f26_img").attr('src', response.data.imageURL);
	    	},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
	  	});
	});

	$("#inventGuardar").on("click", function(){
		var inventarios = [];
		$("input:checkbox:checked").each(function() { 
			inventarios.push($(this).val()); 
		});
		$.ajax({
			url: $("#urlInventarios").val(),
			method: 'POST',
			data: {
				inventarios: inventarios,
				token: $("#token").val(),
				usuario: $("#usuario").val(),
				siniestro: $("#siniestro").val()
			},
			success: function(response){
				console.log(response);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	});

	$("#extrasGuardar").on("click", function(){

		$.ajax({
			url: $("#urlExtras").val(),
			method: 'POST',
			data: {
				token: $("#token").val(),
				usuario: $("#usuario").val(),
				siniestro: $("#siniestro").val(),
				kilometraje: $("#kilometraje").val(),
				bateria: $("#bateria").val(),
				num_tapetes: $("#num_tapetes").val(),
				gasolina_litros: $("#gasolina_litros").val(),
				comentarios: $("#comentarios").val(),
				descr_gral: $("#descr_gral").val()
			},
			success: function(response){
				console.log(response);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	});

});

