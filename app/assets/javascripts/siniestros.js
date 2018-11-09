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

	$("#slider").roundSlider({
		    sliderType: "min-range",
		    editableTooltip: false,
		    radius: 105,
		    width: 16,
		    value: gas_value,
		    handleSize: 0,
		    handleShape: "square",
		    circleShape: "pie",
		    startAngle: 315,
		    tooltipFormat: "changeTooltip",
		    disabled: gas_disabled
		});

	$(document).ready(function(){
    $('.tabs').tabs();
  });

	function changeTooltip(e) {
	    var val = e.value, speed;
	    if (val < 20) speed = "Slow";
	    else if (val < 40) speed = "Normal";
	    else if (val < 70) speed = "Speed";
	    else speed = "Very Speed";

	    return val + " km/h" + "<div>" + speed + "<div>";
	}

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
});

$(function() {
	var canvas = document.querySelector("#firma_canvas");
	var danos_preexistentes = document.querySelector("#danos_preexistentes");
  	if (canvas){
  		if(canvas.id === "firma_canvas" && danos_preexistentes.id === "danos_preexistentes"){
	    	canvas.height = canvas.offsetHeight;
	    	canvas.width = canvas.offsetWidth;
	    	danos_preexistentes.height = danos_preexistentes.offsetHeight;
	    	danos_preexistentes.width = danos_preexistentes.offsetWidth;
	    	//window.onresize = resizeCanvas(canvas);
	    	resizeCanvas(canvas);
	    	resizeCanvas(danos_preexistentes);
	    	signature_pad = new SignaturePad(canvas);
	    	signature_danos = new SignaturePad(danos_preexistentes);
	    	var ctx = danos_preexistentes.getContext("2d");
	    	var img = document.getElementById("autos");
	    	var image = document.querySelector("#autos");
	    	image.addEventListener('load', function(){
	    		ctx.drawImage(img, 0, 0);
	    	});    	
	    	$('#firma_borrar').click(function() { signature_pad.clear() });
	    	$('#danos_pre').click(function() { 
	    		signature_danos.clear();
		    	ctx.drawImage(img, 0, 0);
	    	});
	    	$('#extrasGuardar').click(function(event) { 
	     		if (signature_pad.isEmpty()){
	        		alert('Debes firmar');
	      		} else {
					const data = new FormData();
				  	data.append('firma', base64ImageToBlob(signature_pad.toDataURL()));
				  	data.append('danos_preexistentes', base64ImageToBlob(signature_danos.toDataURL()));
					data.append('token', $("#token").val());
					data.append('usuario', $("#usuario").val());
					data.append('siniestro', $("#siniestro").val());
					data.append('kilometraje', $("#kilometraje").val());
					data.append('bateria', $("#bateria").val());
					data.append('num_tapetes', $("#num_tapetes").val());
					data.append('gasolina_litros', $("input[name=slider]").val());
					data.append('comentarios', $("#comentarios").val());
					data.append('descr_gral', $("#descr_gral").val());
	        		$.ajax({
						url: $("#urlExtras").val(),
						method: 'POST',
						data: data,
						contentType: false,
    					processData: false,
						success: function(response){
							console.log(response);
						},
						error: function (jqXHR, textStatus, errorThrown) {
							console.log(jqXHR);
							console.log(textStatus);
							console.log(errorThrown);
						}
					});
	      		}
	   	 	});
	    }
  	}
});


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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });
          
