
alert("Práctico Clase 2")

const alumno = {
    nombreAlumno: "Mauricio Ferreyra",
    camada: "12465"
}

let inputNombreAlumno = prompt("Ingrese nombre del alumno")
let inputCamada = prompt("Ingrese número de camada")

console.log(inputNombreAlumno)
console.log(inputCamada)

if ( inputNombreAlumno !== alumno.nombreAlumno || inputCamada !== alumno.camada) {

    console.error("no eres alumno de la camada 12465")

    alert("No eres alumno del curso de javascript")

    } else {

    console.log("es alumno de Coderhouse del curso de javascript")

    alert("Sos alumno de Coderhouse")

    alert("Bienvenido al curso de javascript")

}