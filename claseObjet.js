
// se creo un arrays
const listaEmpresa = []
// se utiliza método push
const create = (empresa) => {
    listaEmpresa.push(empresa)
}

const getAll = () => {
    return listaEmpresa
}

// se creo un objeto Empresa
function Empresa (nombre, rubro) {
    this.nombre = nombre;
    this.rubro  = rubro; 
}

const si = "s"
let i = "s"

while ( i == si ) {       
    i = prompt("¿Desea ingresar al listado de empresas? s/n")  
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