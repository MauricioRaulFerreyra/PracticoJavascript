

const listaEmpresa = []

const create = (nombres) => {
    listaEmpresa.push(nombres)
}

const getAll = () => {
    return listaEmpresa
}

class Empresa {

    constructor(nombre, rubro) {
        this.nombre = nombre
        this.rubro = rubro
    }

}

const si = "si"
let i = "si"

while ( i == si ) {       
    i = prompt("¿Desea ingresar al listado de empresas?")  
    if ( i == si ) {
        const nombre = prompt("Nombre de la empresa")
        console.log(nombre)
        const rubro  = prompt("Rubro de la empresa")
        console.log(rubro)
        let empresa = new Empresa(nombre, rubro)
        create(empresa)
        // lista de la empresa ingresada
        console.log(empresa)          
    }
}
// lista del total de las empresas ingresadas
console.log(listaEmpresa)