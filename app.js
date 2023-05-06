//VARIABLES

const number1= 6;

let number2= 20;
//number2=10;
console.log(number2);

var number= 10;

const button= document.querySelector('button');

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

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

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