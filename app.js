$(document).ready(function () {

    // $('h1').html('desde etiqueta');
    //  $('.display-4').html('desde clase');
    // $('#idh1').html('desde id');

    $('#idh1').addClass('text-center');   
    
    let titulo = $('#idh1')

    $('h1').click (function () {     
        titulo.toggleClass('color');
    });

    $('#boton1').click(function () { 
        $('.botones').addClass('text-center');    
    });

    let botonDos = $('#boton2')
    let botonTres = $('#boton3')
    let contenedor = $('#container-principal')

    botonDos.click(function() {
        contenedor.hide(500);
    });

    botonTres.click(function() {
        contenedor.show(1000);
    });
    


});


