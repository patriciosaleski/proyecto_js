// Este código nombrará todos los números naturales mayores iguales que 3, múltiplos de 3 y 5 hasta el número dado, luego dará como resultado la suma de todos esos números múltiplos.

let numero
let suma

suma = 0
numero = parseInt(prompt('Ingrese un número mayor o igual a 3'))

for (let i = 1; i <= numero; i++) {
    if ((i % 5 == 0 || i % 3 == 0) && i >= 3) {
        document.writeln(i)
        suma += i
    }
}

if (isNaN(numero) || numero < 3) { 
    document.write('Ingrese un número válido')
} else {
    if (suma % 5 == 0 && suma %3 == 0 && numero >= 3){
        document.write(`Todos los números múltiplos de 3 y 5 en el rango del 0 al ${numero} dieron ${suma}, el cual también es múltiplo de 3 y 5.`)

    } else if (suma % 5 == 0 && numero >= 3) {
        document.write(`Todos los números múltiplos de 3 y 5 en el rango del 0 al ${numero} dieron ${suma}, el cual también es múltiplo de 5.`)

    } else if (suma % 3 == 0 && numero >= 3) {
        document.write(`Todos los números múltiplos de 3 y 5 en el rango del 0 al ${numero} dieron ${suma}, el cual también es múltiplo de 3.`)

    } else if (numero >= 3) {
        document.write(`Todos los números múltiplos de 3 y 5 en el rango del 0 al ${numero} dieron ${suma}.`)
    }
}