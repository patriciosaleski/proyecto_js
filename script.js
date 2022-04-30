// DESAFIO 2

// const $botonCalcular = document.querySelector('#calcular')
// const $botonReset = document.querySelector('#reset')

// $botonCalcular.onclick = function(){
//     const absoluteZero = -459.67
//     const valor = Number(document.querySelector('#grados-F').value)

//     if (isNaN(valor)) {
//         alert('Ingrese un valor válido.')
//     } else if (valor < absoluteZero) {
//         alert('Ese valor se encuentra por debajo del cero absoluto (-459.67 °F), intente con un mayor valor.')
//         return;
//     } else {
//         resultado = ((valor - 32) * 5/9).toFixed(2)

//         if (resultado > 40) {
//             document.querySelector('#resultado').value = `${resultado}°C`
//             alert('Ponete protector solar!')
//         } else {
//             document.querySelector('#resultado').value = `${resultado}°C`
//         }
//     }
// }

// $botonReset.onclick = function(){
//     document.querySelector('#grados-F').value = ""
//     document.querySelector('#resultado').value = ""
// }




// DESAFIO 3

const menu = [];  // Array de todas las comidas disponibles

class Food {
    constructor(name, price, vegan) {
        this.name = name.toLowerCase();
        this.price = parseFloat(price);
        this.vegan = vegan;
    }

    addIVA() {
        this.price = (this.price * 1.21).toFixed(2);
    }

    veganDiscount() {
        this.price = this.price - (this.price * 0.15);
    }
}

menu.push(new Food("Milanesa", "700", false));
menu.push(new Food("banana", "70" , true));
menu.push(new Food("Asado", "1800" , false));
menu.push(new Food("manzana", "90" , true));

function applyIVA() {
    for (const meal of menu) {
        meal.addIVA();
    }
    return menu;
}

function veganDays() {
    let isVeganDay = prompt('¿Desea aplicar un 15% de descuento a los productos veganos? S/N').toUpperCase();
    if (isVeganDay == "S") {
        for (const meal of menu) {
            if (meal.vegan) {
                meal.veganDiscount();
                console.log(`El valor de ${meal.name} es de $${meal.price} (c/IVA)`);
            } else {
                alert('No se encontraron productos veganos en el menu.');
            }
        }

    } else if ((isVeganDay != "N") && (isVeganDay != "S")) {
        alert('Ingresó un valor no válido. Use S para Si o N para No.');
        veganDays();
    }
}

applyIVA();
veganDays();
console.log(menu);















// function addToMenu(name, price, vegan) {
//     const comida = new Food(name, price, vegan);
//     menu.push(comida);
//     return menu;
// }

// function createMenu() {
//     let name;
//     let price;
//     let vegan;
//     let keepLoading = true;
//     while (keepLoading == true) {
//         name = prompt('Ingrese el nombre de la comida');
//         price = prompt('Ingrese el valor de la comida');
//         let isVegan = prompt('¿Es una comida vegana? (S/N)').toUpperCase();
//         if (isVegan == "S") {
//             vegan = true;
//         } else {
//             vegan = false;
//         }
        
//         addToMenu(name, price, vegan);

//         let addAnotherProduct = prompt('¿Desea cargar otro producto? (S/N)').toUpperCase();

//         if (addAnotherProduct == "S") {
//             keepLoading = true;
//         } else {
//             keepLoading = false;
//         }
//     }
// }

// function addIVA() {
//     let product = prompt('¿Sobre que producto desea aplicar el IVA?').toLowerCase();

//     if (menu.find(food => food.name == product)) {
//         Food.addIVA();
//     } else {
//         alert('No se ha encontrado el producto.');
//     }
// }

// createMenu();
// addIVA();


