
// se creo un arrays
const listaEmpresa = []

// se utiliza método push
const create = (empresa) => {
    listaEmpresa.push(empresa)
    return listaEmpresa
}

const getAll = () => {
    return listaEmpresa
}

const si = "si"
let i = "si"


// se creo una clase Empresa
class Empresa {
    constructor (nombre, rubro) {
        this.nombre = nombre;
        this.rubro  = rubro; 
        this.venta  = false;
    } 
    vendido() {
        this.venta = true;
        this.cant  = 1;  
    }
}

let total = 0;
function suma() {
    total = total + 1;
    return total;
} 

while ( i == si ) {     

    i = prompt("¿Ingresar al listado de empresas? si/no")  
    if ( i == si ) {
        const nombre = prompt("Nombre de la empresa")
        console.log("El nombre de la empresa es" +" "+ nombre)
        const rubro  = prompt("Rubro de la empresa")
        console.log("El rubro de la empresa" + " " + nombre+" " +"es"+" " +rubro)
        let empresa = new Empresa(nombre, rubro)     
        create(empresa)
        i = prompt("¿Desea un servicio web? si/no")
            if ( i == si ) {
            empresa.vendido();
            console.log("Se concreto la venta de un servicio")
            console.log(suma())
        }
        // lista de la empresa ingresada
        console.log(empresa)  
        console.log(listaEmpresa)      
    } else { 
        i = prompt("¿Desea seguir con el listado? si/no") 
    } 
}

console.log("Cantidad total de servicios vendidos es" + " "+ total)
console.log("Cantidad de empresas ingresadas son" +" "+ listaEmpresa.length)
console.log(listaEmpresa)

