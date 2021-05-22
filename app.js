$(document).ready(function () {

    // $('h1').html('desde etiqueta');
    //  $('.display-4').html('desde clase');
    // $('#idh1').html('desde id');

    $('header').addClass('text-center');   
     
    $('#titulo').css('background','gray');
    $('#titulo').css('margin-top' ,'20px');
    $('#titulo').css('margin-bottom','20px');

    $('#container-principal').fadeOut(function(){
        $('h1').css('color','white');
    });

    $("#titulo").on("click",function(){
       
        $('#container-principal').toggle('slow');
        $("h1").css("color", "black");
        $('#titulo').css('background','dimgray'); 

        $('#titulo').animate({height: '50px', opacity: '0.4'}, "slow");
        
        $('#titulo').animate({width: '100px', opacity: '0.8'}, "slow");
        
        $('#titulo').animate({height: '100px', opacity: '0.4'}, "slow");
        
        $('#titulo').animate({width: '500px', opacity: '0.8'}, "slow");

        $('#titulo').animate({height: '50px', opacity: '0.4'}, "slow");
        
        $('#titulo').animate({width: '300px', opacity: '0.8'}, "slow");
        

    });



   
   


   // $('#boton1').click(function () { 
   //     $('.botones').addClass('text-center');    
   // });

   // let botonDos = $('#boton2')
   // let botonTres = $('#boton3')
   // let contenedor = $('#container-principal')

   // botonDos.click(function() {
   //     contenedor.hide(500);
   //});

   // botonTres.click(function() {
   //     contenedor.show(1000);
   // });
    


});


