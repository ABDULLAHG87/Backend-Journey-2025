/*
* Fundamentals: variables 
*/


// Declaration of variables
var name = "Abdulhakeem";
var name = "Abdullahi";
console.log(name);

let age = 30;
console.log(age);

const email = "hakeemabdullah87@gmail.com";
console.log(email);

/* Properties of let keyword
* It cannot be redeclared
* It is not hoisted but flags error of Temporal Dead Zone
* It can be reassinged another value
* It is block scoped */

// let age = 50;  // This flags error
// console.log(age);

/* Hositing Error*/
// console.log(FirstName);
// let FirstName = "Abdullahi";

age = 56;
console.log(age); // The value of age has been reassigned with value 56


function myfunc(){
    let firstName = "Abdullahi"; //the variable is function or block scoped here
    console.log(firstName);
};

// myfunc();
// console.log(firstName); //It flags error because, it can see the block varaible firstName


//Declaration of variable as const
/* Properties:
* It is block scoped
* It cannot be redeclared or reassigned
* It is not hoisted 
* When used with Object is only immutable but value of object can be changed*/

const STATUS = 'active';
// STATUS = 'inactive';
// console.log(STATUS);

const person = ["Abdulhakeem", 56, 'male'];
console.log(person);
person[1] = 38;
console.log(person); //I can easily change the value despite the fact it is constant