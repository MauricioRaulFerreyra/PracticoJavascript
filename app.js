const URL = "./api.json"
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

        //************* */ CONSULTAMOS A LA API PARA MOSTRAR LA LISTA DE PRODUCTOS **************//
        $.get(`${URL}`, (response, status)=>{

            if(status === "success"){
                
                for(const prod of response){
                    $("#container-principal").prepend(`
                    <div class=container-card id=card>     
                        <div class=imagen-grid> 
                        <h3>${prod.title}</h3> 
                        <img src=${prod.image} class=img-grid img-fluid rounded mx-auto d-block>
                        </div>
                
                        <div class=imagen-info>
                        <span hidden=true >1</span>
                        <h3 class=imagen-info-title id=title>${prod.subtitle} </h3>
                        <div class="container-price">
                            <h5 class=container-price-signo>$</h5>
                            <h4 class=container-price-price id=price>${prod.price} </h4>
                        </div>
                        <button class="imagen-info-button" id=button-comprar>AGREGAR</button>
                        </div>
                    </div>
                    `)
                }
            }
        })

    });

    // $('.imagen-info-button').on('click',function (){

    //     console.log('muestra formulario');
    //     $('#form').toggle('slow');
        
    // })
    
    // $('#btn-cancelar').on('click',function (){

    //     console.log('oculta formulario');

    //     $('#form').toggle('slow');

    // })


});


