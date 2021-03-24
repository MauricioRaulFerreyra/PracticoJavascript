
alert("Práctico Clase 2")

const alumno = {
    nombreAlumno: "Mauricio Ferreyra",
    curso: "Javascript",
    camada: "12465"
}

let inputNombreAlumno = prompt("Ingrese nombre del alumno")
let inputCurso = prompt("Ingrese el curso en el que está inscripto")

console.log(inputNombreAlumno)
console.log(inputCurso)

if ( inputNombreAlumno !== alumno.nombreAlumno || inputCurso !== alumno.curso) {
    alert("No eres alumno de Coderhouse") 
    throw new Error ("no eres alumno del curso")
}    
 
let inputCamada = prompt("Ingrese el número de camada")

if ( inputCamada !== alumno.camada )  {
    alert("No eres alumno de esta camada")
    throw new Error ("no eres alumno de esta camada")
} else {  
    alert("Sos alumno de Coderhouse")
    alert("Bienvenido al curso de javascript")
    console.log("eres alumno de Coderhouse del curso de javascript")                
}   





