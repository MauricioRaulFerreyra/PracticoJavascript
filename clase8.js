





class Empresa {
    constructor (nombre, rubro) {
        this.nombre = nombre.toLowerCase();
        this.rubro  = rubro.toLowerCase();
    }
}

let listaEmpresa = JSON.parse(localStorage.getItem('empresas'))

if ( !listaEmpresa ) {
    listaEmpresa = []
}

const getAll = () => {
    return listaEmpresa
}

const create = (empresa) => {
    listaEmpresa.push(empresa)
    return listaEmpresa
}

const formEmpresa = document.getElementById('form-Empresa')
const inputNombre = document.getElementById('input-nombre')
const inputRubro = document.getElementById('input-rubro')
const inputlistado = document.getElementById('listado')

const mostrarlist = (listaEmpresa) => {

    for ( let i = 0; i < listaEmpresa.length; i++ ) {

        let itemEmpresa = document.createElement('li')
        itemEmpresa.textContent = `El nombre de la empresa es ${listaEmpresa[i].nombre}` 
        inputlistado.appendChild(itemEmpresa)

    }
}

mostrarlist(listaEmpresa)

formEmpresa.addEventListener(`submit`, ( event) => {

    // previene la actualización de la página
    event.preventDefault()

    // ejecuta
    const nombre = inputNombre.value
    const rubro = inputRubro.value

    // crea una empresa nueva y la agrega al array
    const empresa = new Empresa(nombre, rubro)
    create(empresa)

    // actualiza el localStorage del usuario
    localStorage.setItem('empresas', JSON.stringify(listaEmpresa)) 

    // limpia los inputs
    inputNombre.value = ''
    inputRubro.value  = ''

    // agrega un nuevo item a la lista
    let itemEmpresa = document.createElement('li')
    itemEmpresa.textContent =`El nombre de la empresa es ${nombre}` 
    inputlistado.appendChild(itemEmpresa)
    
})






