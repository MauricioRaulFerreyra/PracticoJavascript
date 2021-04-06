

alert("Buenos días");

let nombre = prompt("Nombre")
console.log(nombre)

alert("Bienvenido" + " " + nombre)

const DISEÑOHTMLCSS = "DISEÑOHTMLCSS"
const MAQUETADOHTMLCSS = "MAQUETADOHTMLCSS" 
const AMBAS = "AMBAS"


alert("Cotización página/sitio web")
alert("Puede elegir DISEÑOHTMLCSS o MAQUETADOHTMLCSS o AMBAS")

const diseño = 21000
const maquetado = 15000
const Ambas = 36000


let elegido = prompt("La opción elegida es :")

if ( elegido !== DISEÑOHTMLCSS && elegido !== MAQUETADOHTMLCSS && elegido !== AMBAS) {
    alert("No elijio ninguna opcion propuesta")
    throw new Error("No eligio las opciones propuestas")
} else if( elegido == DISEÑOHTMLCSS ) {
    let cotizacion = diseño
} else if( elegido == MAQUETADOHTMLCSS ) {
    let cotizacion = maquetado
} else if( elegido = AMBAS ) {
    let cotizacion = Ambas
} else {
    alert("No eligio ninguna opción propuesta")
}


function cotizar(cotizacion) {

    let i = prompt("¿ Contado o Cuotas?");
    if ( i == "Contado" ) {
        let desc = (cotizacion * 10) / 100
        let pago = cotizacion - desc
        alert("El monto a pagar es "+ pago)
        console.log(pago)
    }   else if ( i == "Cuotas") {      
            let cuotas =parseInt(prompt("¿Cantidad de cuotas?"));
            while ( cuotas > 0 && cuotas <= 6 )  {                 
            let rec = (cotizacion * 10) / 100
            let pago = cotizacion + rec
            console.log("Monto total a pagar es " + pago)
            let recCuotas = pago / cuotas
            alert("Son"+" "+cuotas+" "+"cuotas por mes de"+" "+recCuotas);
            console.log("Monto de cada cuota es " + recCuotas)
            break;
            }                   
    } else {
        alert("No selecciono ninguna opción de pago")
    } 
}

function cotizaweb(elegido) {  

    switch (elegido) { 

        case DISEÑOHTMLCSS:
             
            alert("cotizar DISEÑOHTMLCSS")
            console.log("Cotizar DISEÑOHTMLCSS")
            alert(diseño)
            console.log(diseño)
            alert("Puedes hacerlo hasta en 6 cuotas")
            alert("Al contado un 10% de descuento o un 10% recargo hasta 6 cuotas")
            cotizar(diseño)
            break;

        case MAQUETADOHTMLCSS:
            
            alert("cotizar MAQUETADOHTMLCSS")
            console.log("Cotizar MAQUETADOHTMLCSS")
            alert(maquetado)
            console.log(maquetado)
            alert("Puedes hacerlo hasta en 6 cuotas")
            alert("Al contado un 10% de descuento o un 10% recargo hasta 6 cuotas")
            cotizar(maquetado) 
            break;

        case AMBAS:
            
            alert("cotizar Ambas")
            console.log("Cotizar Ambas")
            alert(Ambas)
            console.log(Ambas)
            alert("Puedes hacerlo hasta en 6 cuotas")
            alert("Al contado un 10% de descuento o un 10% recargo hasta 6 cuotas")
            cotizar(Ambas)
            break;    
    }

}

cotizaweb(elegido) 




 
