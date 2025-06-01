class Person {
    constructor(name,weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    computeBMI() {
        const BMI = this.weight / this.height ** 2;
        return BMI;
    }
}
//creating Object for Marks
const person1 = new Person("Mark", 78, 1.69 );
const person2 = new Person("John", 92, 1.95);

//Computation of Weight for Marks
const BMIMarks = person1.computeBMI();
console.log("Marks BMI: ", BMIMarks);
const BMIJohn = person2.computeBMI();
console.log("John BMI: ", BMIJohn); 

//Using the Decision Marking Statement
// if (BMIMarks > BMIJohn){
//     console.log("Mark's BMI is greater the John's")
// } else{
//     console.log("John's BMI is greater the Mark's")
// }
//Using Template String

if (BMIMarks > BMIJohn){
    console.log(`Mark's BMI (${BMIMarks}) is higher than John's BMI ${BMIJohn}`);
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's BMI (${BMIMarks})`);
}

