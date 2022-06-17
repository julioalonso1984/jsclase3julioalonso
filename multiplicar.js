let tablaNumero = parseInt(prompt("Elija un número para ve la tabla de multiplicacion"))
let tope = parseInt(prompt("¿hasta que número quieres multiplicar el número elegido?"))
let i=1
do{
    let resultado = tablaNumero *i
    alert(tablaNumero+ " x " + i + " = " + resultado)
    i++
}while(i<=tope)