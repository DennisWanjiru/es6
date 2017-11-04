/*
//THE LET KEYWORD WITH LEXICAL BLOCK SCOPING
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

//OBJECTS CREATION IN ES6
function createDog(name, ability) {
    return {
        type: "animal",
        name,
        ability
    }
}

let a = createDog("Wolf", "Bark");

console.log(JSON.stringify(a));

//Computed Properties

var prop = "foo";

var o = {
    [prop]: "Hey",
    ["ba" + "r"]: "There!"
}

console.log(o.foo + " " + o.bar)

function foo() {
    return "firstname";
}

let obj = {
    foo: "bar",
    [foo()]: "Dennis"
}

console.log(JSON.stringify(obj));

//METHOD PROPERTIES
let myObj = {
    add(a, b) {
        return a + b;
    },

    multiply(a, b) {
        return a * b;
    }
}

let b = myObj.multiply(2, 6);
console.log(b);

//OBJECT ASSIGN METHOD
let obj = {
    fname: "Dennis",
    lname: "Wanjiru"
};

let obj2 = {
    jina: "Chrus",

    get lapili() {
        return "Senanu";
    }
};

let obj3 = {
    namer: "Ken",
    laname: "Milo"
};

let copy = Object.assign({}, obj, obj2, obj3);

console.log(copy);
console.log(obj);

//MATH
console.log(Math.trunc(12.34)); //Removes the decimal part of x and returns the integral part.
console.log(Math.cbrt(256)); //Returns the cube root of x.

let k = "12.12";
let p = Number.parseFloat(k);
console.log(typeof p);
console.log(typeof k);

*/

//ARRAY
let arr = Array.of("Dennis", 23, "Male");
console.log(arr)

let eArr = arr.entries();

for (let i = 0; i < arr.length; i++) {
    console.log(eArr.next().value)
}

//COPY
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

//FILL
console.log([1, 2, 3, 4, 6].fill(5, 2, 4))

//Includes
console.log([1.2, 3, 4, 5].includes(3))
console.log([1.2, 3, 4, 5].includes(4, 2))
console.log([1.2, 3, 4, 5].includes(4, 4))
console.log([1.2, 3, 4, 5].includes(8))

let kArr = arr.keys();

for (let i = 0; i < arr.length; i++) {
    console.log(kArr.next())
}

//Symbol Iterator

var arr2 = ["wanjiru", "elly", "tim"];

// var vArr = arr2.values();

// for (let letter of vArr) {
//     console.log(letter);
// }

let names = arr2[Symbol.iterator]();
for (let name of names) {
    console.log(name);
}