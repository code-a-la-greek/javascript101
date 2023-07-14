//VARIABLES

const number1 = 6;

let number2 = 20;
//number2=10;
console.log(number2);

var number = 10;

//const button= document.querySelector('button');

//CONDITIONS
/*
Comparison Operators
==, !=, <, >, >=, <= 
*/

if (number1 < number2) {
  console.log(number1 + number2);
} else {
  console.log(number1 - number2);
}

/*
Logical Operators
&&, ||, !
 */
if (number1 < number2 && number2 === 5) {
  console.log(number1 + number2);
}

//Ternary Operator
// condition ? codeIfTrue : codeIfFalse
number1 < number2
  ? console.log(number1 + number2)
  : console.log(number1 - number2);

/*
Παράδειγμα σύνταξης ενός switch statement, όπου key μπορεί να είναι μια μεταβλητή ή το αποτέλεσμα ενός function.
Κάθε value αντοιστιχεί σε κάθε condition που θέλουμε να ελέγξουμε. 
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

//ΠΑΡΑΔΕΙΓΜΑ:
let day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

// FUNCTIONS
function alert() {
  console.log("alert");
}

alert();

function square(number) {
  console.log(number * number);
}

square(4);

function square2(number) {
  return number * number;
}

let x = square2(6);
console.log(x);

// Arrow functions
//Παράδειγμα μετατροπής function σε arrow function
function example(number) {
  return number * number;
}

// Αν έχετε μία παράμετρο δεν χρειάζονται παρενθέσεις
// Αν έχετε μία γραμμή κώδικα που θα εκτελεστεί, δεν χρειάζονται οι αγκύλες

let y = (number) => console.log(number * number);

y(5);

// ARRAYS
const fruits = [1, 2, 3, "apple", "banana", "orange"];
fruits[3] = "pear";
const firstFruit = fruits[3];
console.log(firstFruit);

//Μέθοδοι που αλλοιώνουν το αρχικό array
fruits.push("apple"); // αυτό θα προσθέσει την "apple" στο τέλος του array
fruits.pop(); // αυτό θα αφαιρέσει τη τελευταία τιμή του array
fruits.sort(); // αυτό θα ταξινομήσει τo array αλφβητκά
fruits.reverse(); // αυτο θα γυρίσει αντιστροφα τις τιμες του array
fruits.shift(); //αφαιρεί το πρώτο στοιχείο του array
fruits.unshift("pear"); //προσθέτει ένα ή περισσότερα στοιχεία στην αρχή του array

//Μέθοδοι που δεν αλλοιώνουν το array
console.log(fruits.length); //επιστρέφει το μήκος του array, δηλαδή πόσα στοιχεία έχει
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); //επιστρέφει το τελευταίο αντικείμενο του array
console.log(fruits.indexOf("orange")); //επιστρέφει το δείκτη(index) του αντικείμενο στο array
console.log(fruits);

//Μέθοδοι που δημιουργούν νέα array. Δεν αλλοιώνουν το αρχικό μας array
const students = [
  { name: "Maria", grade: 8 },
  { name: "Nikos", grade: 4 },
  { name: "Giannis", grade: 7 },
  { name: "Eleni", grade: 3 },
];

const passedStudents = students
  .map(function (student) {
    if (student.grade >= 5) {
      return student.name;
    }
  })
  .filter(Boolean); //φιλτράρει τις undefined τιμες

console.log(passedStudents);

const numbers = [1, 2, 3, 4, 5];

//Η array.reduce() μέθοδος προσθέτει τις τιμές. Αν η array περιέχει αριθμους, θα εμφανισει το σύνολο. Αν περιεχει γραμματα/λεξεις, θα τα ενώσει σε μία γραμμη
const sum = numbers.reduce(function (a, b) {
  return a + b;
});

console.log(sum);

//OBJECTS

const car = {
  type: "Fiat",
  model: 500,
  color: "white",
  start: function () {
    console.log("The car is starting");
  },
  stop: function () {
    console.log("The car is stopping");
  },
};

console.log(car.color);
console.log(car["color"]);
//console.log(car[color]);

car.stop();

// this
const person = {
  name: "john",
  "last name": "doe",
  fullName: function () {
    return this.name + " " + this["last name"];
  },
};

console.log(person.fullName());

// Inheritage of objects
const animal = {
  name: '',
  legs: 4,
  sound: '',
  makeSound: function() {
    console.log(this.name + " says " + this.sound);
  }
};

const dog= Object.create(animal); //δημιουργει ενα νέο object με βάση το template μας 
dog.name='dog';
dog.sound='Woof';

console.log(dog);
dog.makeSound();
console.log(dog.legs)

// Factory Functions
const flower=(name,type,smell)=>{
    return{
        name:name,
        type:type,
        smell:'nice'
    }
};

const garden= flower('rose','flower');

console.log(garden)