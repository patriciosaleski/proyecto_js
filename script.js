const $botonCalcular = document.querySelector('#calcular')
const $botonReset = document.querySelector('#reset')

$botonCalcular.onclick = function(){
    const absoluteZero = -459.67
    const valor = Number(document.querySelector('#grados-F').value)

    if (isNaN(valor)) {
        alert('Ingrese un valor válido.')
    } else if (valor < absoluteZero) {
        alert('Ese valor se encuentra por debajo del cero absoluto (-459.67 °F), intente con un mayor valor.')
        return;
    } else {
        resultado = ((valor - 32) * 5/9).toFixed(2)

        if (resultado > 40) {
            document.querySelector('#resultado').value = `${resultado}°C`
            alert('Ponete protector solar!')
        } else {
            document.querySelector('#resultado').value = `${resultado}°C`
        }
        
    }
}

$botonReset.onclick = function(){
    document.querySelector('#grados-F').value = ""
    document.querySelector('#resultado').value = ""
}
