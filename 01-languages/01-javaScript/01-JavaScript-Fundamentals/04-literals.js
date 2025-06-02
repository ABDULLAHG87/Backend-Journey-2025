

//Syntax for creating Literals

let msg = `Hello World`  //Regular Text with Literal Templates

const age = 34;
const name = "Abdulhakeem";
const occupation = "Software Engineer"

//Injecting Variables inside a string using Literal Templates

let message = `My name is ${name}, I am ${age} years old. I am a ${occupation}`;
console.log(message);


//For multiline message or text
let textmsg = `I am a software engineer in the making,
I have always dream of becoming this since 2016 but always fail.
I think Insha Allah I must succeed year 2025`

console.log(textmsg);

//Formating Number with intl.Number in Template Literals

const amount = 370000;
const score = 78;
//TRICK 1
console.log(new Intl.NumberFormat().format(amount)); //Does the grouping for me in commas

//TRICK 2
console.log(new Intl.NumberFormat("en-NG", {style: "currency", currency: "NGN"}).format(amount));
console.log(new Intl.NumberFormat({style: "percent"}).format(score));


