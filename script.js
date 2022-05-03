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
            }
        }

    } else if ((isVeganDay != "N") && (isVeganDay != "S")) {
        alert('Ingresó un valor no válido. Use S para Si o N para No.');
        veganDays();
    }
}


function keepLoadingCheck() {
    let keepLoading;
    keepLoading = prompt('¿Desea ingresar otro producto? S/N').toUpperCase();
    if (keepLoading == "S") {
        return true;
    } else if (keepLoading == "N") {
        return false;
    } else {
        alert('Ingrese S para Si o N para No.');
        keepLoadingCheck();
    }
}

function veganCheck() {
    let productVegan;
    productVegan = prompt('¿Este producto es vegano? S/N').toUpperCase();
    if (productVegan == "S") {
        return true;
    } else if (productVegan == "N") {
        return false;
    } else {
        alert('Ingrese S para Si o N para No.');
        veganCheck();
    }
}

function addProduct() {
    let productName, productPrice;
    let keepLoading = true;
    let manualLoad = prompt('¿Desea ingresar un producto? S/N').toUpperCase();
    if (manualLoad == "S") {   
        while (keepLoading) {
            productName = prompt('Ingrese el nombre del producto');
            productPrice = prompt('Ingrese el precio del producto');
            menu.push(new Food(productName, productPrice, veganCheck()));
            keepLoading = keepLoadingCheck();
        }
        return menu;
    } else {
        return;
    }
}

const deleteProduct = () => {
    let index, name;
    let deleteConfirm = prompt('¿Desea eliminar un producto? S/N').toUpperCase();
    let deleted = false;
    if (deleteConfirm == "S") {
        name = prompt('¿Que producto desea eliminar?');
        for (const Food of menu) {
            if (Food.name == name) {
                index = menu.indexOf(Food);
                menu.splice(index, 1);
                alert(`El producto ${name} ha sido eliminado con éxito.`);
                deleted = true;
            }
        }
        if (!deleted) {
            alert(`No se ha encontrado el producto llamado ${name}`);        
        }
    } else if (deleteConfirm != "N") {
        alert('Ingrese S para Si o N para No.');
        deleteProduct();
    }
    return menu;
}

addProduct();
applyIVA();
veganDays();
deleteProduct();
console.log(menu);