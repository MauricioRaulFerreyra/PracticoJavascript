

alert("Buenos días");

let nombre = prompt("Nombre")
console.log(nombre)

alert("Bienvenido" + " " + nombre)

const DISEÑOHTMLCSS = "DISEÑOHTMLCSS"
const MAQUETADOHTMLCSS = "MAQUETADOHTMLCSS" 
const AMBAS = "AMBAS"


alert("Cotización página/sitio web")
alert("Elija DISEÑOHTMLCSS o MAQUETADOHTMLCSS o AMBAS")

const cotizacion = {
    diseño: 21000,
    maquetado: 15000,
    Ambas: 36000
}

let elegido = prompt("La opción elegida es :")

if ( elegido !== DISEÑOHTMLCSS && elegido !== MAQUETADOHTMLCSS && elegido !== AMBAS) {
    alert("No elijio ninguna opcion propuesta")
    throw new Error("No eligio las opciones propuestas")
}
function cotizaweb(elegido) {   

    switch (elegido) {
        case DISEÑOHTMLCSS:
            alert("cotizar DiseñoHTMLCSS")
            console.log("Cotizar DiseñoHTMLCSS")
            alert(cotizacion.diseño)
            console.log(cotizacion.diseño)
            alert("Puedes hacerlo hasta en 12 cuotas")
            let cuotas =  parseInt(prompt("¿En cuantas cuotas lo desea hacer?"));
            while( cuotas > 0 && cuotas <= 12 ) {
                let cantcuotas = cotizacion.diseño / cuotas
                alert("Son"+" "+cuotas+" "+"cuotas por mes de"+" "+cantcuotas);
                console.log(cantcuotas)
                break;
            }
            break;
        case MAQUETADOHTMLCSS:
            alert("cotizar MaquetacionHTMLCSS")
            console.log("Cotizar MaquetacionHTMLCSS")
            alert(cotizacion.maquetado)
            console.log(cotizacion.maquetado)
            alert("Puedes hacerlo hasta en 12 cuotas")
            let cuotas2 =  parseInt(prompt("¿En cuantas cuotas lo desea hacer?"));
            while( cuotas2 > 0 && cuotas2 <= 12 ) {
                let cantcuotas = cotizacion.diseño / cuotas2
                alert("Son"+" "+cuotas2+" "+"cuotas por mes de"+" "+cantcuotas);
                console.log(cantcuotas)
                break;
            }
            break;
        case AMBAS:  
            alert("cotizar Ambas")
            console.log("Cotizar Ambas")
            alert(cotizacion.Ambas)
            console.log(parseInt(cotizacion.Ambas))
            alert("Puedes hacerlo hasta en 12 cuotas")
            let cuotas3 =  parseInt(prompt("¿En cuantas cuotas lo desea hacer?"));
            while( cuotas3 > 0 && cuotas3 <= 12 ) {
                let cantcuotas = cotizacion.Ambas / cuotas3
                alert("Son"+" "+cuotas3+" "+"cuotas por mes de"+" "+cantcuotas);
                console.log(cantcuotas)
                break;
            }
            break;    
    }

}

cotizaweb(elegido)
cotizaweb("AMBAS")


