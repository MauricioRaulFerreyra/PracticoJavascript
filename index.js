
alert(`Bienvenido nuevo usuario`)
let nombre = prompt( `Ingrese su nombre`)
console.log(nombre)
let apellido = prompt(`Ingrese su apellido`)
console.log(apellido)
alert( `Buen dia ` + nombre + ` ` + apellido)
let edad = prompt( `Ingrese su edad`)
console.log(edad)

let fecha = new Date()
let año = fecha.getFullYear()
console.log(año)
console.log( typeof edad)
edad = parseInt(edad)
console.log( typeof edad) 
let fechaNac = año - edad

console.log(nombre + apellido)
alert(`Usted ` + nombre + ` `+ apellido + ` nacio en ` + fechaNac)
alert(`Muchas Gracias ` + nombre +` `+ apellido) 