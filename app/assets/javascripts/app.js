$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('select').formSelect();
    $('.datepicker').datepicker({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 15, // Creates a dropdown of 15 years to control year
    	format: 'dd/mm/yyyy' });  
    $('#tablaSiniestros').DataTable();
 });