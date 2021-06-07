const containerPrincipal = document.getElementById("container-principal");
const form = document.getElementById("form");
let formId = document.getElementById("form-id");
let formDescripcion = document.getElementById("form-description");
let formPrecio = document.getElementById("form-price");
let totalPrecio = document.getElementById("total-precio");
let cantidad = document.getElementById("cantidad");

const buttonCancelar = document.getElementById("btn-cancelar");
const buttonAceptarCarrito = document.getElementById("btn-aceptar-carrito");

let tableTotal = document.getElementById("table-total");

const buttonComprar = document.getElementById("table-buttom-comprar"); 
const formularioVisible = document.getElementById("container-formulario-visible"); 
const totalPagar = document.getElementById("total-pagar");
const btnFinalizarCompra = document.getElementById("btn-aceptar-carrito-pago");

const tableItem = document.getElementById("table-items");
const fragment = document.createDocumentFragment();

let subtotal = 0;
let cant = 0;
let id = 0;
let carrito = [];

const finalizarCompra = () => {
    
    formularioVisible.classList.remove("is-visible");
    form.classList.remove("is-visible");
    containerTable.classList.remove("is-visible");
    alert("Compra Finalizada con Exito")
}

const cancelar = () => {

    form.classList.remove("is-visible");
    
}


const mostrar = (e) => {

    console.log("boton agregar")

    if(e.target.classList.contains("imagen-info-button")){
        addServicio(e.target.parentElement);
    }

}

const addServicio = (objecto) => {

    console.log('formulario descriptivo al seleccionar un producto')

    form.classList.add("is-visible");
    formDescripcion.value = objecto.querySelector("h3").textContent;
    id = objecto.querySelector("span").textContent;
    objecto.querySelector("button").dataset.id = id;
    formId.value = id;
    formPrecio.value = objecto.querySelector("h4").textContent;

}


const containerTable = document.getElementById("container-table");

const mostrarCarrito = () => {

    console.log('formulario final de compra')

       containerTable.classList.add("is-visible");
        
    addCarrito();

}


const modificar = (e) => {
    e.preventDefault();
    cantidad.addEventListener("keyup", ()=>{
        cant = document.getElementById("cantidad").value;
        subtotal = formPrecio.value * cant;
        document.getElementById("total-precio").value = subtotal;
    })
}


const addCarrito = () =>{

    const productoCarrito = 
        {
            id: id,
            descripcion: document.getElementById("form-description").value,
            precio: document.getElementById("form-price").value,
            cantidad: parseInt(cant),
            subtotal: subtotal
        }
 
    if(carrito.hasOwnProperty(productoCarrito.id)){
        productoCarrito.cantidad += carrito[productoCarrito.id].cantidad  
        productoCarrito.subtotal = productoCarrito.precio * productoCarrito.cantidad
        console.log(productoCarrito.precio)
    }
    carrito[productoCarrito.id] = {...productoCarrito}
    
    pintarCarrito();
}


tableItem.addEventListener("click", (e) => {

    let productos = [];

    productos = carrito;

    carrito = productos.filter(producto => producto.id !== e.target.dataset.id)
    
    pintarCarrito();
      
  })



const pintarCarrito = () => {

    tableItem.innerHTML = "";

    let total = 0;
    
    carrito.forEach((producto) => {

        const formContainer = document.createElement("tr");
        const formId = document.createElement("td");
        const formDescripcion = document.createElement("td");
        const formCantidad = document.createElement("td");
        const formPrecio = document.createElement("td");
        const formSubTotal = document.createElement("td");
        const formEliminar = document.createElement("td");
        const iconoEliminar = document.createElement("i");
        
        formEliminar.appendChild(iconoEliminar);

        iconoEliminar.classList.add("fas");
        iconoEliminar.classList.add("fa-trash-alt");
        iconoEliminar.setAttribute("title", "Eliminar");
       
        formId.textContent = producto.id;
        formDescripcion.textContent = producto.descripcion;
        formPrecio.textContent = producto.precio;
        formCantidad.textContent = producto.cantidad;
        formSubTotal.textContent = producto.subtotal;

        console.log(producto.descripcion)
        total += parseInt(formSubTotal.textContent);

        iconoEliminar.dataset.id = producto.id;
        
        formContainer.appendChild(formId);
        formContainer.appendChild(formDescripcion);
        formContainer.appendChild(formPrecio);
        formContainer.appendChild(formCantidad);
        formContainer.appendChild(formSubTotal);
        formContainer.appendChild(formEliminar);
    
        fragment.appendChild(formContainer);
        
    })
    tableItem.appendChild(fragment);
    
    tableTotal.textContent = total;
    
}

buttonAceptarCarrito.addEventListener("click", mostrarCarrito);
form.addEventListener("click", modificar);
containerPrincipal.addEventListener("click", mostrar); 
buttonCancelar.addEventListener("click", cancelar);
buttonComprar.addEventListener("click", ()=> {
    formularioVisible.classList.add("is-visible") 
    totalPagar.value = tableTotal.textContent;
    console.log(tableTotal.textContent)
});
btnFinalizarCompra.addEventListener("click", finalizarCompra); 






