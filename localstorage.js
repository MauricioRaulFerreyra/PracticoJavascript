const botonLocalStore = document.getElementById("btn-aceptar-carrito-pago"); 
const nombreLocalStore = document.getElementById("form-nombre");
const apellidoLocalStore = document.getElementById("form-apellido");
const emailLocalStore = document.getElementById("form-email");
const totalPagarLocalStore = document.getElementById("total-pagar");

const agregarLocalStore = () =>{

    const datosLocalStore = {} 

    datosLocalStore.nombre = nombreLocalStore.value
    datosLocalStore.apellido = apellidoLocalStore.value
    datosLocalStore.email = emailLocalStore.value
    datosLocalStore.total = totalPagarLocalStore.value;
    
    localStorage.setItem("datosCompra", JSON.stringify(datosLocalStore))
    
}
botonLocalStore.addEventListener("click", agregarLocalStore)









