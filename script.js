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
