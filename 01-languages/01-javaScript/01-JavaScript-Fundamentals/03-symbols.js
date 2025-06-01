//Declaration of Symbol

let sym = Symbol();
let sym1 = Symbol("foo");
let sym2 = Symbol('foo');

console.log(sym);
console.log(sym1);
console.log(sym2);


let _private = Symbol('Secret');

let person = {
    name: "Abdulhakeem",
    [_private]: 'Internal-Value',
}

console.log(person[_private]);
console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`);
}