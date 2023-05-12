//VARIABLES

const number1= 6;

let number2= 20;
//number2=10;
console.log(number2);

var number= 10;

//const button= document.querySelector('button');

//CONDITIONS
/*
Comparison Operators
==, !=, <, >, >=, <= 
*/

if (number1 < number2 ) {
    console.log(number1+number2)
}else{
    console.log(number1-number2)
}

/*
Logical Operators
&&, ||, !
 */
if (number1 < number2 && number2===5) {
    console.log(number1 + number2)
}

//Ternary Operator
// condition ? codeIfTrue : codeIfFalse
number1 < number2 ? console.log(number1 + number2) : console.log(number1 - number2);


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

