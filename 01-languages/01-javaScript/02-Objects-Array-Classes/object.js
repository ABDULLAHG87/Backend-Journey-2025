/*
 * Exploring Object in JavaScript
 */

//Declaration of Object in JavaScript
const Person = {
    fullName: {
        first: "Abdulhakeem",
        last: "Abdullah",
    },
    contact: {
        email: ["hakeemabdullah87@gmail.com", "dalaktronixs@gmail.com"],
        phone: {
            personal: "+2347012345678",
            work: "+2348098765432",
    },
    address: {
        street: "Vineyard Street",
        city: "Abeokuta",
        state: "Ogun",
        postalCode: "110101",
    },
},
gender: "Male",
dob: "1993-08-20",
hobbies: ["Coding", "Research Work", "Tinkering"],
education: {
    tertiary: {
        degree: {
            institution: "Obafemi Awolowo University",
            location: "Ile-Ife",
            course: "Computer Science",
            year: 2022,},
        diploma: {
            institution: "The Polytechnic Ibadan",
            location: "Ibadan",
            course: "Electrical Engineering",
            year: 2017,
        },
    },
    secondary: {
        name: "Elekuro High School",
        yearGraduated: 2012,
    },
},
workExperience: [
    {
        company: "Dalaktronixs",
        role: "Founder",
        startYear: 2023,
        stack: ["Node.js", "MongoDB", "Express"],
    },
    {
        company: "Certifiyeet",
        role: "Backend Intern",
        startYear: 2024,
        stack: ["JavaScript", "MongoDB", "JWT"],
    },
],
isMarried: true,
children: [
    { name: "Aisha", age: 4 },
    { name: "Yusuf", age: 2 },
],

getContactSummary(){
    return {
        Emails: this.contact.email,
        Phone: this.contact.phone,
        Address: this.contact.Address
    }
}
};

//Task Section: Basic Access to Data in an Object
//1. Print Fullname:
console.log(`my fullname is ${Person.fullName.first} ${Person.fullName.last}`);
//2.Get your tertiary degree institution.
//Using the dot method
console.log(Person.education.tertiary.degree.institution);
//Using the bracket Method
console.log((((Person["education"])["tertiary"])["degree"])["institution"]);
//3. Get your first and second email.
const firstEmail = Person.contact.email[0];
const secondEmail = Person.contact.email[1];
console.log(`First email: ${firstEmail},
    Second Email: ${secondEmail}`);

//4. Log the number of hobbies.
console.log(`The number of Hobbies are: ${Person.hobbies.length}`);

//5. Print the first company you worked for.
console.log(`My first company of work is ${Person.workExperience[0].company}`);


// LEVEL 2: intermediate logic


// 1. Write a function that prints all your children’s names.
function printName(){
    const children = Person.children;
    for (names of children ){
        console.log(names.name);
    }
}

function printChildrenNames(){
    Person.children.forEach(child => console.log(child.name) )
}

printName();
printChildrenNames();

//2. Check if "MongoDB" is part of your first job stack.
const isMongoDB = Person.workExperience[0].stack.includes("MongoDB");
console.log(isMongoDB);


//3. Add a new hobby to your hobbies list.
//Person.assign("hobbies").push("Making Designs"); This is not working 
Person["hobbies"].push("Swimming");
console.log(Person)

// 4. Add a third child dynamically.
const childName ="Sulaiman";
const childAge = 10;
const thirdChild = {
    name: 'Sulaiman', 
    age: 10
};
Person.children.push(thirdChild);
/*
Write a function to return your total years of education assuming:

Diploma = 2 years

Degree = 4 years

Secondary = 6 years */

function computeTotalYears(){
    Person.education.tertiary.degree["duration"] = 2;
    Person.education.tertiary.diploma["duration"] = 6;
    Person.education.secondary["duration"] = 4;

    return Person.education;
}

const result = computeTotalYears();

//Level 3: Deep Dive + Mutation
//Write a function to add a new work experience.
function addWorkExperience(work){
    Person.workExperience.push(work);
}

let newExperience = {
        company: "ATB Hub",
        role: "Backend Developer",
        startYear: 2025,
        stack: ["Node.js", "MongoDB", "NestJs", "ExpressJs"],
}

addWorkExperience(newExperience);
console.log(Person);

// /*
// // Write a method getContactSummary() that returns:

// // arduino
// // Copy
// // Edit
// // "Emails: ..., Phone: ..., Address: Vineyard Street, Abeokuta"
// // */

// console.log(Person.getContactSummary());

//3. Write a function that returns all institutions you've attended (names only).
function getInstitutions(){
    for (values of Object.values(Person.education.tertiary)){
        console.log(values.institution)
    }
}   

getInstitutions();
/*
Convert your entire education object into an array of institution objects.
*/
const institutions = {};
Object.assign(institutions, Person.education.tertiary);
console.log(institutions)

/*freeze the Person object so no one can mutate it.
*/

let freeze_object = Object.freeze(Person)
console.log(freeze_object)