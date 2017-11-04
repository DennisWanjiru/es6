"use strict";

//THE LET KEYWORD WITH LEXICAL BLOCK SCOPING
/*
let shoppingCart = [{
    id: 0,
    product: "DVD",
    price: 12.56
}, {
    id: 1,
    product: "CD",
    price: 9.56
}, {
    id: 2,
    product: "MP3",
    price: 2.56
}];

for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i];
    console.log("Item: " + item.product + " - Price: " + item.price)
}

*/

//OBJECTS CREATION IN ES6
function createDog(name, ability) {
    return {
        type: "animal",
        name: name,
        ability: ability
    };
}

var a = createDog("Wolf", "Bark");

console.log(JSON.stringify(a));